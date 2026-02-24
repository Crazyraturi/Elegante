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
        setUpiLink(data.paymentUrl); // show QR instead of redirect
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

  // 🔹 Poll order status every 4 seconds
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
  }, [orderId]);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

        <div className="border-b pb-4 mb-4">
          <p className="font-semibold">Deliver to:</p>
          <p>
            {addressData.firstName} {addressData.lastName}
          </p>
          <p>
            {addressData.address}, {addressData.city}, {addressData.state} -{" "}
            {addressData.pinCode}
          </p>
          <p>Phone: {addressData.mobile}</p>
        </div>

        <div className="flex justify-between text-xl font-bold mb-8">
          <span>Total to Pay:</span>
          <span>₹{cartTotal}</span>
        </div>

        {!upiLink && (
          <button
            onClick={handlePaytoworldPayment}
            disabled={isProcessing}
            className="w-full bg-gray-900 text-white py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition disabled:bg-gray-400">
            {isProcessing ? "Generating QR..." : "PAY NOW"}
          </button>
        )}

        {upiLink && (
          <div className="mt-8 flex items-center justify-center">
            <h3 className="text-lg text-center font-semibold mb-4">
              Scan QR to Pay
            </h3>

            <QRCodeCanvas value={upiLink} size={220} />

            <p className="mt-4 text-sm text-center text-gray-600">
              Open any UPI app and scan this QR
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
