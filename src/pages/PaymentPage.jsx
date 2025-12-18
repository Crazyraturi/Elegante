import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

export default function PaymentPage() {
  const { cartItems, cartTotal } = useContext(CartContext);
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const addressData = location.state?.addressData;

  const [isProcessing, setIsProcessing] = useState(false);

  // Redirect back if no address is found
  if (!addressData) {
    navigate("/address");
    return null;
  }

  const handlePayUPayment = async () => {
    setIsProcessing(true);
    try {
      const txnid = "TXN" + Date.now();
      const amount = cartTotal.toFixed(2);

      const token = localStorage.getItem("token");

      // 1. Get Secure Hash from your Node.js Backend
      const { data } = await axios.post("/api/v1/payment/hash", {
        txnid,
        amount,
        productinfo: "Store Order",
        firstname: addressData.firstName,
        email: user.email,
      }, {
      headers: {
        Authorization: `Bearer ${token}` 
      }
    });

      // 2. Prepare PayU Parameters
      const payuParams = {
        key: import.meta.env.VITE_PAYU_MERCHANT_KEY, // Your Merchant Key
        txnid,
        amount,
        productinfo: "Store Order",
        firstname: addressData.firstName,
        email: user.email,
        phone: addressData.mobile,
      surl: "http://localhost:3000/api/v1/payment/response", 
      furl: "http://localhost:3000/api/v1/payment/response",
        hash: data.hash,
        service_provider: "payu_paisa",
      };

      // 3. Create Hidden Form and Submit to PayU
      const form = document.createElement("form");
      form.action = "https://test.payu.in/_payment"; // Use https://secure.payu.in/_payment for Live
      form.method = "POST";

      Object.entries(payuParams).forEach(([key, value]) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = value;
        form.appendChild(input);
      });

      document.body.appendChild(form);
      form.submit();
    } catch (error) {
      console.error("Payment Error:", error);
      alert("Payment failed to initialize. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
        
        <div className="border-b pb-4 mb-4">
          <p className="font-semibold">Deliver to:</p>
          <p>{addressData.firstName} {addressData.lastName}</p>
          <p>{addressData.address}, {addressData.city}, {addressData.state} - {addressData.pinCode}</p>
          <p>Phone: {addressData.mobile}</p>
        </div>

        <div className="flex justify-between text-xl font-bold mb-8">
          <span>Total to Pay:</span>
          <span>₹{cartTotal}</span>
        </div>

        <button
          onClick={handlePayUPayment}
          disabled={isProcessing}
          className="w-full bg-gray-900 text-white py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition disabled:bg-gray-400"
        >
          {isProcessing ? "Redirecting to PayU..." : "PAY NOW"}
        </button>
      </div>
    </div>
  );
}