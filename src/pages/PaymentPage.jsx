import React, { useEffect, useState } from "react";
import {
  Lock,
  Phone,
  CreditCard,
  Wallet,
  Banknote,
  ChevronRight,
  ShieldCheck,
  Users,
  RotateCcw,
  Truck,
} from "lucide-react";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

export default function PaymentPage() {
  // Left Side Payment Tabs
  const paymentTabs = [
    { id: "upi", label: "UPI" },
    { id: "cod", label: "COD" },
    { id: "card", label: "Card" },
    { id: "wallet", label: "Wallet" },
    { id: "netbanking", label: "NetBanking" },
    { id: "epay", label: "EPAY" },
  ];

  const [active, setActive] = useState("upi"); // Default: UPI
  const { cartItems } = useContext(CartContext);
   const totalMRP =
     cartItems?.reduce(
       (sum, item) => sum + (item.price * item.quantity || item.price || 0),
       0
     ) || 0;

  // Rotating messages for UPI Section
  const messages = [
    {
      text: "100% Secure Payments",
      icon: <ShieldCheck className="w-5 h-5 text-green-600" />,
    },
    {
      text: "Trusted by 50 Lakh+ Customers",
      icon: <Users className="w-5 h-5 text-green-600" />,
    },
    {
      text: "Instant Return or Refund",
      icon: <RotateCcw className="w-5 h-5 text-green-600" />,
    },
    {
      text: "No Delivery Charges",
      icon: <Truck className="w-5 h-5 text-green-600" />,
    },
  ];
  const [msgIndex, setMsgIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setMsgIndex((prev) => (prev + 1) % messages.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white min-h-screen px-4 py-6 lg:px-10">
      {/* 🔹 Stepper */}
      <div className="max-w-6xl mx-auto px-4 mb-6 flex justify-center gap-4 text-sm">
        <div className="text-green-600 font-medium">✓ Cart</div>
        <div className="w-20 border-t border-gray-400"></div>
        <div className="text-green-600 font-medium">✓ Address</div>
        <div className="w-20 border-t border-gray-400"></div>
        <div className="text-gray-400 font-medium">○ Payment</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {/* 🔹 LEFT MENU */}
        <div className="space-y-4">
          {/* Pay via UPI */}
          <div
            className={`border rounded-lg p-5 shadow-sm cursor-pointer ${
              active === "upi" ? "border-green-600 shadow-md" : ""
            }`}
            onClick={() => setActive("upi")}
          >
            <div className="flex justify-between">
              <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
                Extra ₹29 Discount
              </span>
              <ChevronRight size={18} />
            </div>
            <div className="flex gap-3 mt-2">
              <Phone className="text-green-600" />
              <div>
                <p className="font-semibold text-gray-900">Preferred UPI</p>
                <p className="text-xs text-gray-500">
                  Save handling charges on prepaid
                </p>
              </div>
            </div>
          </div>

          {/* COD */}
          <div
            className={`border rounded-lg p-5 shadow-sm cursor-pointer ${
              active === "cod" ? "border-green-600 shadow-md" : ""
            }`}
            onClick={() => setActive("cod")}
          >
            <span className="text-xs bg-red-100 text-red-700 px-3 py-1 rounded-full">
              ₹100 COD Fees Added
            </span>
            <div className="flex gap-3 mt-2">
              <Lock />
              <div>
                <p className="font-bold text-gray-900">Cash On Delivery</p>
                <p className="text-xs text-gray-500">Avoid COD Fees</p>
              </div>
            </div>
          </div>

          {/* More Methods */}
          {[
            { id: "card", icon: <CreditCard />, label: "Credit / Debit Card" },
            { id: "wallet", icon: <Wallet />, label: "Wallets" },
            { id: "netbanking", icon: <Banknote />, label: "Net Banking" },
            {
              id: "epay",
              icon: <Banknote className="text-orange-500" />,
              label: "Pay with EPAY",
            },
          ].map((m) => (
            <div
              key={m.id}
              onClick={() => setActive(m.id)}
              className={`border rounded-lg p-5 shadow-sm cursor-pointer flex items-center justify-between ${
                active === m.id ? "border-green-600 shadow-md" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                {m.icon} {m.label}
              </div>
              <ChevronRight size={18} />
            </div>
          ))}
        </div>

        {/* 🔹 CENTER DYNAMIC CONTENT */}
        <div className="border rounded-lg p-6 shadow-sm min-h-[450px]">
          {active === "upi" && (
            <div className="flex flex-col items-center gap-6">
              <div className="bg-green-50 py-2 w-full text-center flex gap-2 justify-center">
                {messages[msgIndex].icon}
                <p className="text-green-700 text-sm font-semibold">
                  {messages[msgIndex].text}
                </p>
              </div>

              <div className="relative">
                <div className="w-48 h-48 bg-gray-200 rounded-md animate-pulse"></div>
                <button className="absolute px-4 py-1 bg-white border rounded-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  Click Here
                </button>
              </div>

              <div className="flex gap-2 text-xs">
                <span className="font-semibold text-purple-700">PhonePe</span>
                <span className="font-semibold text-blue-600">GPay</span>
                <span className="font-semibold text-blue-700">Paytm</span>
                <span className="font-semibold text-gray-700">UPI</span>
              </div>

              <div className="flex items-center w-full gap-3">
                <span className="flex-1 h-px bg-gray-200"></span>
                <span className="text-xs text-gray-500">OR</span>
                <span className="flex-1 h-px bg-gray-200"></span>
              </div>

              <div className="w-full flex border rounded-lg overflow-hidden">
                <input
                  placeholder="Enter UPI ID"
                  className="flex-1 px-3 py-2 text-sm outline-none"
                />
                <button className="bg-black text-white px-6 py-3 text-sm">
                  PAY
                </button>
              </div>

              <p className="text-xs text-gray-500 text-center">
                You will receive a request on your UPI App
              </p>
            </div>
          )}

          {/* 🟥 COD UI */}
          {active === "cod" && (
            <div className="text-center space-y-4">
              <p className="text-sm text-gray-600">
                COD charges applied, please confirm
              </p>

              <button className="bg-black text-white w-full py-3 rounded-lg font-semibold">
                Confirm
              </button>

              <div className="flex items-center gap-2 justify-center text-xs text-gray-500">
                <span className="flex-1 h-px bg-gray-300"></span>
                OR
                <span className="flex-1 h-px bg-gray-300"></span>
              </div>

              <p className="text-xs text-gray-600">
                Pay via UPI or Card & save fees
              </p>

              <button className="border px-6 w-full py-3 rounded-lg text-sm font-semibold">
                Pay Online & Save ₹129
              </button>
            </div>
          )}

          {/* 💳 Card UI */}
          {active === "card" && (
            <div className="space-y-4">
              <div className="bg-green-50 py-2 text-center font-semibold text-green-700 text-sm">
                No Delivery Charges
              </div>

              <p className="font-semibold text-lg">Add New Card</p>

              <input
                className="border rounded-lg w-full px-3 py-3 text-sm"
                placeholder="Full Name"
              />
              <input
                className="border rounded-lg w-full px-3 py-3 text-sm"
                placeholder="XXXX XXXX XXXX XXXX"
              />

              <div className="grid grid-cols-3 gap-3">
                <input
                  className="border rounded-lg px-3 py-3 text-sm"
                  placeholder="MM"
                />
                <input
                  className="border rounded-lg px-3 py-3 text-sm"
                  placeholder="YY"
                />
                <input
                  className="border rounded-lg px-3 py-3 text-sm"
                  placeholder="CVV"
                />
              </div>

              <button className="bg-black text-white w-full py-3 rounded-lg font-semibold text-sm">
                Continue →
              </button>
            </div>
          )}

          {/* 👛 Wallet Section */}
          {active === "wallet" && (
            <div className="space-y-5">
              <div className="bg-green-50 py-2 text-center text-sm font-semibold text-green-700">
                No Delivery Charges
              </div>

              <p className="font-semibold text-lg">Wallets</p>

              {[
                "PhonePe",
                "MobiKwik",
                "AmazonPay",
                "OlaMoney",
                "AirtelMoney",
                "JioMoney",
              ].map((w) => (
                <div
                  key={w}
                  className="flex items-center justify-between border p-4 rounded-lg cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-gray-300"></div>
                    <p className="text-sm font-semibold">{w}</p>
                  </div>
                  <ChevronRight size={18} />
                </div>
              ))}
            </div>
          )}

          {/* 🏦 Net Banking */}
          {active === "netbanking" && (
            <div className="space-y-6">
              <div className="bg-green-50 py-2 text-center text-sm font-semibold text-green-700">
                No Delivery Charges
              </div>

              <p className="font-semibold text-lg">Net Banking</p>

              <div className="grid grid-cols-3 text-center border divide-x divide-y rounded-md">
                {["SBI", "Kotak", "IndusInd", "ICICI", "HDFC", "AXIS"].map(
                  (b) => (
                    <div
                      key={b}
                      className="py-6 cursor-pointer text-xs font-medium"
                    >
                      <div className="w-8 h-8 mx-auto bg-gray-300 rounded-full mb-2"></div>
                      {b} Bank
                    </div>
                  )
                )}
              </div>

              <button className="text-left border p-3 rounded-lg text-sm font-medium flex justify-between">
                Select Different Bank <ChevronRight />
              </button>
            </div>
          )}

          {/* 🔐 Pay with EPAY */}
          {active === "epay" && (
            <div className="space-y-6 text-center">
              <p className="font-medium text-lg">Enter Mobile Number</p>

              <input
                className="border rounded-lg w-full px-3 py-3 text-sm"
                placeholder="Enter Mobile Number"
              />

              <button className="bg-black text-white w-full py-3 rounded-lg font-semibold text-sm">
                SEND OTP
              </button>
            </div>
          )}
        </div>

        {/* 🔹 RIGHT ORDER SUMMARY */}
        {/* RIGHT ORDER SUMMARY */}
        <div className="border rounded-lg p-6 shadow-sm space-y-4">
          <p className="font-bold text-lg text-gray-900">
            PRICE DETAILS ({cartItems?.length || 1} Items)
          </p>

          <div className="space-y-2 text-sm">
            {/* Total MRP */}
            <div className="flex justify-between text-gray-700">
              <span>Total MRP (Inc. of Taxes)</span>
              <span>₹{totalMRP}</span>
            </div>

            {/* Shipping */}
            <div className="flex justify-between text-gray-700">
              <span>Shipping</span>
              <span className="text-green-600 font-medium">Free</span>
            </div>

            {/* Handling / COD Fees */}
            {active === "cod" ? (
              <div className="flex justify-between text-gray-700">
                <span>COD Charges</span>
                <span className="text-red-600 font-semibold">+₹100</span>
              </div>
            ) : (
              <div className="flex justify-between text-gray-700">
                <span>Handling Charges</span>
                <span className="text-green-600 font-medium">₹0</span>
              </div>
            )}

            {/* Divider */}
            <div className="border-t pt-3 flex justify-between font-semibold text-gray-900">
              <span>Total Amount</span>
              <span>₹{active === "cod" ? totalMRP + 100 : totalMRP - 29}</span>
            </div>
          </div>

          {/* Savings Notice */}
          <div className="bg-green-50 text-green-700 text-xs p-3 rounded-md text-center">
            {active === "cod"
              ? "Pay Online & Save ₹129 on this order"
              : "Congrats! You saved ₹29 on this purchase."}
          </div>

          {/* Address */}
          <div className="pt-2">
            <p className="font-semibold text-gray-800 text-sm mb-1">
              Deliver To:
            </p>
            <p className="text-xs text-gray-600 leading-4">
              Aditya Kumar <br />
              Ghaziabad, Uttar Pradesh <br />
              Contact: 9667380553
            </p>
          </div>

          {/* Trust Badges */}
          <div className="flex justify-between text-xs text-gray-700 py-4 border-t border-b">
            <span>🇮🇳 Made in India</span>
            <span>🛡️ 100% Original</span>
            <span>🔒 Secure Payments</span>
          </div>

          {/* Payment Icons */}
          <div className="text-center pt-3">
            <p className="text-xs text-gray-500">
              Visa | MasterCard | UPI | RuPay | Net Banking
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
