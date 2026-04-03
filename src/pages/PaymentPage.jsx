import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { QRCodeCanvas } from "qrcode.react";
import axios from "axios";
import { toast } from "sonner";

export default function PaymentPage() {
  const { cartTotal } = useContext(CartContext);
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const addressData = location.state?.addressData;

  const [selectedMethod, setSelectedMethod] = useState("upi");
  const [isProcessing, setIsProcessing] = useState(false);
  const [upiLink, setUpiLink] = useState(null);
  const [orderId, setOrderId] = useState(null);

  const API_BASE_URL = "https://beyoung-backend.onrender.com";

  if (!addressData) {
    navigate("/address");
    return null;
  }

  const handlePaytoworldPayment = async () => {
    setIsProcessing(true);

    try {
      const newOrderId = "ORDER_" + Date.now();
      setOrderId(newOrderId);

      const token = localStorage.getItem("token");

      const { data } = await axios.post(
        `${API_BASE_URL}/api/v1/payment/initiate-payment`,
        {
          amount: Number(cartTotal).toFixed(2),
          currency: "INR",
          orderId: newOrderId,
          description: "Store Order",
          email: user.email,
        },
        { headers: { Authorization: `Bearer ${token}` } },
      );

      if (data.success && data.paymentUrl) {
        setUpiLink(data.paymentUrl);
      } else {
        toast.error(data.message || "Payment initiation failed");
      }
    } catch (error) {
      console.error("AXIOS ERROR:", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Connection failed");
    } finally {
      setIsProcessing(false);
    }
  };

  useEffect(() => {
    let interval;

    if (orderId) {
      interval = setInterval(async () => {
        try {
          const res = await axios.get(
            `${API_BASE_URL}/api/v1/payment/order-status/${orderId}`,
          );

          if (res.data.status === "Paid") {
            clearInterval(interval);
            navigate("/payment-success");
          }
        } catch (err) {
          console.log("Polling error");
        }
      }, 4000);
    }

    return () => clearInterval(interval);
  }, [orderId, navigate]);

  const paymentMethods = [
    { id: "upi", label: "UPI & QR Code", icon: "📱" },

    { id: "cod", label: "Cash on Delivery", icon: "💵" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-8">
          Secure Checkout
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* LEFT COLUMN: Payment Methods */}
          <div className="lg:w-2/3 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row">
            {/* Sidebar Tabs */}
            <div className="md:w-1/3 bg-gray-50 border-r border-gray-100 flex flex-col">
              {paymentMethods.map((method) => (
                <button
                  key={method.id}
                  onClick={() => {
                    setSelectedMethod(method.id);
                    // Reset UPI state if switching tabs
                    if (method.id !== "upi") {
                      setUpiLink(null);
                    }
                  }}
                  className={`px-6 py-5 text-left flex items-center gap-3 font-medium transition-all ${
                    selectedMethod === method.id
                      ? "bg-white text-yellow-600 border-l-4 border-yellow-500 shadow-[inset_0_0_10px_rgba(0,0,0,0.02)]"
                      : "text-gray-600 hover:bg-gray-100 border-l-4 border-transparent"
                  }`}>
                  <span className="text-xl">{method.icon}</span>
                  {method.label}
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div className="md:w-2/3 p-8 flex flex-col justify-center min-h-[400px]">
              {selectedMethod === "upi" && (
                <div className="animate-fade-in text-center">
                  {!upiLink ? (
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center text-3xl mb-4">
                        📱
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Pay via UPI App
                      </h3>
                      <p className="text-gray-500 mb-8 text-sm px-4">
                        Generate a secure QR code to scan and pay using Google
                        Pay, PhonePe, Paytm, or any other UPI app.
                      </p>
                      <button
                        onClick={handlePaytoworldPayment}
                        disabled={isProcessing}
                        className="w-full max-w-xs bg-yellow-400 text-black py-3.5 rounded-xl font-bold text-lg hover:bg-yellow-500 hover:shadow-lg transition-all disabled:bg-gray-200 disabled:text-gray-400 disabled:shadow-none">
                        {isProcessing
                          ? "Connecting securely..."
                          : `Pay ₹${cartTotal}`}
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center animate-fade-in">
                      <h3 className="text-lg font-bold text-gray-900 mb-6">
                        Scan to complete payment
                      </h3>
                      <div className="bg-white p-4 rounded-2xl shadow-xl border-4 border-yellow-400 inline-block mb-6 relative">
                        {/* Optional corner accents */}
                        <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-black -translate-x-1 -translate-y-1"></div>
                        <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-black translate-x-1 -translate-y-1"></div>
                        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-black -translate-x-1 translate-y-1"></div>
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-black translate-x-1 translate-y-1"></div>

                        <QRCodeCanvas
                          value={upiLink}
                          size={200}
                          bgColor="#ffffff"
                          fgColor="#000000"
                          level="H"
                        />
                      </div>
                      <div className="flex items-center gap-2 text-sm font-medium text-yellow-600 bg-yellow-50 px-4 py-2 rounded-full">
                        <span className="relative flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
                        </span>
                        Waiting for payment confirmation...
                      </div>
                    </div>
                  )}
                </div>
              )}

              {selectedMethod === "card" && (
                <div className="text-center text-gray-500 animate-fade-in">
                  <span className="text-4xl block mb-4">💳</span>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Credit/Debit Card
                  </h3>
                  <p className="text-sm">
                    Card payments are currently disabled for maintenance. Please
                    use UPI.
                  </p>
                </div>
              )}

              {selectedMethod === "netbanking" && (
                <div className="text-center text-gray-500 animate-fade-in">
                  <span className="text-4xl block mb-4">🏦</span>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Net Banking
                  </h3>
                  <p className="text-sm">
                    Select your bank from the list (Currently unavailable).
                  </p>
                </div>
              )}

              {selectedMethod === "cod" && (
                <div className="text-center text-gray-500 animate-fade-in">
                  <span className="text-4xl block mb-4">📦</span>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Cash on Delivery
                  </h3>
                  <p className="text-sm">Not eligible for this order.</p>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT COLUMN: Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                Order Summary
              </h2>

              <div className="bg-gray-50 rounded-xl p-4 mb-6 text-sm text-gray-600">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-semibold text-gray-900">
                    Deliver to:
                  </span>
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 rounded font-medium">
                    Home
                  </span>
                </div>
                <p className="font-bold text-gray-900 mb-1">
                  {addressData.firstName} {addressData.lastName}
                </p>
                <p className="leading-relaxed">
                  {addressData.address}, <br />
                  {addressData.city}, {addressData.state} -{" "}
                  {addressData.pinCode}
                </p>
                <p className="mt-2 text-gray-900 font-medium">
                  📞 +91 {addressData.mobile}
                </p>
              </div>

              <div className="space-y-3 text-sm text-gray-600 border-b border-dashed border-gray-200 pb-6 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-medium text-gray-900">
                    ₹{cartTotal}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="font-medium text-green-600">Free</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span className="font-medium text-gray-900">Inclusive</span>
                </div>
              </div>

              <div className="flex justify-between items-end mb-2">
                <span className="text-gray-900 font-semibold">
                  Total Amount
                </span>
                <span className="text-2xl font-black text-gray-900 tracking-tight">
                  ₹{cartTotal}
                </span>
              </div>
              <p className="text-xs text-right text-gray-500 mt-1">
                Safe and secure payments
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
