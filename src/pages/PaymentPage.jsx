import React, { useEffect, useState, useContext } from "react";
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
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router-dom";

import { CartContext } from "../context/CartContext";

import Phone_pe from "../assets/Phone_pe.svg";
import Paytm from "../assets/Paytm.svg";
import UPI from "../assets/UPI.png";
import Google_pay from "../assets/Google_pay.svg";
import visa from "../assets/visa.svg";
import MasterCard from "../assets/MasterCard.png";
import amazon from "../assets/amazon.svg";

import India_map from "../assets/India_map.png";
import Secure from "../assets/Secure.jpeg";
import Original from "../assets/Original.png";
import upiLogo from "../assets/upiLogo.svg";

import SBI from "../assets/SBI.svg";
import Kotak from "../assets/Kotak.png";
import IndusLand from "../assets/Indusland.png";
import ICICI from "../assets/ICICI.png";
import HDFC from "../assets/HDFC.png";
import AXIS from "../assets/Axis.png";

import PNB from "../assets/PNB.png";
import YesBank from "../assets/Yes_Bank.png";
import IDFC from "../assets/IDFC.png";
import BOI from "../assets/BOI.png";
import Mobikwi from "../assets/Mobikwi.png";
import OlaMoney from "../assets/OlaMoney.png";
import Airtel from "../assets/Airtel.png";
import Jio from "../assets/Jio.png";

export default function PaymentPage() {
  const [active, setActive] = useState("upi");
  const { cartItems } = useContext(CartContext);
  const [showMoreBanks, setShowMoreBanks] = useState(false);

  // ⭐ DEFINE NetBankingSection INSIDE PaymentPage
  function NetBankingSection() {
    const topBanks = [
      { name: "SBI", logo: SBI },
      { name: "Kotak", logo: Kotak },
      { name: "IndusLand", logo: IndusLand },
      { name: "ICICI", logo: ICICI },
      { name: "HDFC", logo: HDFC },
      { name: "AXIS", logo: AXIS },
    ];

    const moreBanks = [
      { name: "PNB", logo: PNB },
      { name: "Yes Bank", logo: YesBank },
      { name: "IDFC", logo: IDFC },
      { name: "Bank of India", logo: BOI },
    ];

    return (
      <div className="space-y-5">
        <div className="bg-green-50 py-2 text-center text-sm font-semibold text-green-700">
          No Delivery Charges
        </div>

        <p className="font-semibold text-lg">Net Banking</p>

        {/* ⭐ TOP BANKS GRID (3 x 3) */}
        <div className="grid grid-cols-3 gap-4">
          {topBanks.map((bank) => (
            <div
              key={bank.name}
              className="flex flex-col items-center justify-center border p-3 rounded-lg cursor-pointer hover:bg-gray-50"
            >
              <img src={bank.logo} className="w-10 h-10" />
              <p className="text-xs font-semibold text-center mt-1">
                {bank.name}
              </p>
            </div>
          ))}
        </div>

        {/* BUTTON */}
        <button
          onClick={() => setShowMoreBanks(!showMoreBanks)}
          className="w-full border p-4 rounded-lg text-sm font-semibold flex justify-between items-center"
        >
          Select Different Bank
          {showMoreBanks ? <ChevronDown /> : <ChevronRight />}
        </button>

        {/* ⭐ MORE BANKS SCROLLABLE LIST */}
        {showMoreBanks && (
          <div className="max-h-48 overflow-y-auto border rounded-lg p-2 space-y-3">
            {moreBanks.map((bank) => (
              <div
                key={bank.name}
                className="flex items-center justify-between border p-2 rounded-lg cursor-pointer hover:bg-gray-50"
              >
                <div className="flex items-center gap-3">
                  <img src={bank.logo} className="w-8 h-8" />
                  <p className="text-sm font-semibold">{bank.name} Bank</p>
                </div>
                <ChevronRight size={18} />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  const totalMRP =
    cartItems?.reduce(
      (sum, item) => sum + (item.price * item.quantity || item.price || 0),
      0
    ) || 0;

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
      setMsgIndex((i) => (i + 1) % messages.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white min-h-screen px-4 py-6 lg:px-10">
      {/* STEP INDICATOR */}
      <div className="max-w-6xl mx-auto px-4 mb-6 flex justify-center gap-4 text-sm">
        <Link to="/cart">
          <div className="text-green-600 font-medium">✓ Cart</div>
        </Link>
        <div className="w-20 border-t"></div>
        <Link to="/address">
          <div className="text-green-600 font-medium">✓ Address</div>
        </Link>
        <div className="w-20 border-t"></div>
        <div className="text-gray-400 font-medium">○ Payment</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {/* LEFT SIDE PAYMENT TABS */}
        <div className="space-y-4">
          {/* UPI */}
          <div
            className={`border rounded-lg p-5 cursor-pointer ${
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
              <img src={upiLogo} alt="upiLogo" className="text-green-600" />
              <div>
                <p className="font-semibold flex justify-between items-center">
                  <span>Preferred UPI</span>

                  <span className="flex items-center gap-2">
                    <span className="line-through text-gray-500 text-sm">
                      {totalMRP}
                    </span>
                    <span className="text-black-600 font-bold">{totalMRP}</span>
                  </span>
                </p>
                <p className="text-xs text-gray-500">
                  We recommend UPI/prepaid payments to get extra discounts &
                  avoid COD charges (₹50 per order)
                </p>
              </div>
            </div>
          </div>

          {/* COD */}
          <div
            className={`border rounded-lg p-5 cursor-pointer ${
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
                <p className="font-bold">Cash On Delivery </p>
                <p className="text-xs text-gray-500">
                  We recommend UPI/prepaid payments to get extra discounts &
                  avoid COD charges (₹50 per order)
                </p>
              </div>
            </div>
          </div>

          {/* OTHER METHODS */}
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
              className={`border rounded-lg p-5 cursor-pointer flex items-center justify-between ${
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

        {/* CENTER CONTENT */}
        <div className="border rounded-lg p-6">
          {/* UPI UI */}
          {active === "upi" && (
            <div className="flex flex-col items-center gap-6">
              <div className="bg-green-50 py-2 w-full flex justify-center gap-2">
                {messages[msgIndex].icon}
                <p className="text-green-700 text-sm font-semibold">
                  {messages[msgIndex].text}
                </p>
              </div>

              <div className="relative">
                <div className="w-48 h-48 bg-gray-200 rounded-md animate-pulse"></div>
                <button className="absolute bg-white border px-4 py-1 rounded-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  Click Here
                </button>
              </div>

              <div className="flex gap-2 text-xs">
                <img src={Phone_pe} />
                <img src={Paytm} />
                <img src={Google_pay} />
                <img src={UPI} />
              </div>

              <div className="flex items-center w-full gap-3">
                <span className="flex-1 h-px bg-gray-200"></span>
                <span className="text-xs text-gray-500">OR</span>
                <span className="flex-1 h-px bg-gray-200"></span>
              </div>

              <div className="w-full flex border rounded-lg overflow-hidden">
                <input
                  className="flex-1 px-3 py-2 text-sm outline-none"
                  placeholder="Enter UPI ID"
                />
                <button className="bg-black text-white px-6 py-3 text-sm">
                  PAY
                </button>
              </div>

              <p className="text-xs text-gray-500">
                You will receive a request on your UPI App
              </p>
            </div>
          )}

          {/* COD UI */}
          {active === "cod" && (
            <div className="text-center space-y-4">
              <p className="text-sm">COD charges applied</p>
              <button className="bg-black text-white w-full py-3 rounded-lg">
                Confirm
              </button>
              <div className="flex items-center gap-2 justify-center text-xs">
                <span className="flex-1 h-px bg-gray-300"></span>OR
                <span className="flex-1 h-px bg-gray-300"></span>
              </div>
              <button className="border px-6 w-full py-3 rounded-lg">
                Pay Online & Save ₹129
              </button>
            </div>
          )}

          {/* CARD UI */}
          {active === "card" && (
            <div className="space-y-4">
              <div className="bg-green-50 py-2 text-center text-sm font-semibold text-green-700">
                No Delivery Charges
              </div>
              <p className="font-semibold text-lg">Add New Card</p>

              <input
                className="border rounded-lg w-full px-3 py-3"
                placeholder="Full Name"
              />
              <input
                className="border rounded-lg w-full px-3 py-3"
                placeholder="XXXX XXXX XXXX XXXX"
              />

              <div className="grid grid-cols-3 gap-3">
                <input
                  className="border rounded-lg px-3 py-3"
                  placeholder="MM"
                />
                <input
                  className="border rounded-lg px-3 py-3"
                  placeholder="YY"
                />
                <input
                  className="border rounded-lg px-3 py-3"
                  placeholder="CVV"
                />
              </div>
              <button className="bg-black text-white w-full py-3 rounded-lg ">
                Continue
              </button>
            </div>
          )}

          {/* WALLET UI */}

          {active === "wallet" && (
            <div className="space-y-5">
              <div className="bg-green-50 py-1 text-center text-sm font-semibold text-green-700">
                No Delivery Charges
              </div>

              <p className="font-semibold text-lg">Wallets</p>

              {[
                { name: "PhonePe", img: Phone_pe },
                { name: "MobiKwik", img: Mobikwi },
                { name: "AmazonPay", img: amazon },
                { name: "OlaMoney", img: OlaMoney },
                { name: "AirtelMoney", img: Airtel },
                { name: "JioMoney", img: Jio },
              ].map((w) => (
                <div
                  key={w.name}
                  className="flex items-center justify-between border p-2 rounded-lg cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center">
                      <img
                        src={w.img}
                        alt={w.name}
                        className="w-8 h-8 object-contain"
                      />
                    </div>

                    <p className="text-sm font-semibold">{w.name}</p>
                  </div>

                  <ChevronRight size={18} />
                </div>
              ))}
            </div>
          )}

          {/* ⭐ NET BANKING UI (Placed AFTER Wallet as requested) */}
          {active === "netbanking" && <NetBankingSection />}

          {/* ⭐ EPAY UI */}
          {active === "epay" && (
            <div className="space-y-5">
              <div className="bg-green-50 py-2 text-center text-sm font-semibold text-green-700">
                No Delivery Charges
              </div>

              <p className="font-semibold text-lg">Pay with EPAY</p>

              <div className="flex flex-col items-center gap-4">
                <div className="w-40 h-40 bg-gray-200 animate-pulse rounded-lg"></div>

                <button className="bg-black text-white px-6 py-3 rounded-lg w-full">
                  Proceed with EPAY
                </button>

                <p className="text-xs text-gray-500 text-center">
                  Secure & Fast EPAY checkout. You will be redirected safely.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* RIGHT SUMMARY */}
        <div className="border rounded-lg p-6 space-y-4">
          <p className="font-bold text-lg">
            PRICE DETAILS ({cartItems?.length || 1} Items)
          </p>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Total MRP</span>
              <span>₹{totalMRP}</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="text-green-600">
                {" "}
                <span className="line-through text-gray-700">49</span> Free
              </span>
            </div>

            {active === "cod" ? (
              <div className="flex justify-between">
                <span>COD Charges</span>
                <span className="text-red-600">+₹100</span>
              </div>
            ) : (
              <div className="flex justify-between">
                <span>Handling Charges</span>
                <span className="text-green-600">₹0</span>
              </div>
            )}

            <div className="border-t pt-3 flex justify-between font-semibold">
              <span>Total Amount</span>
              <span>₹{active === "cod" ? totalMRP + 100 : totalMRP - 29}</span>
            </div>
          </div>

          <div className="bg-green-50 text-green-700 text-xs p-3 rounded-md text-center">
            {active === "cod"
              ? "Pay Online & Save ₹129"
              : "Congrats! You saved ₹29"}
          </div>

          <div className="pt-2">
            <p className="font-semibold text-sm">Deliver To:</p>
            <p className="text-xs">
              Aditya Kumar <br />
              Ghaziabad, Uttar Pradesh <br />
              Contact: 9667380553
            </p>
          </div>

          <div className="flex justify-between items-center text-xs py-4 border-t border-b">
            <div className="flex flex-col items-center">
              <img src={India_map} className="w-10" />
              <span>Made in India</span>
            </div>

            <div className="flex flex-col items-center">
              <img src={Original} className="w-16" />
              <span className="text-center">
                100% <br /> Original
              </span>
            </div>

            <div className="flex flex-col items-center">
              <img src={Secure} className="w-10" />
              <span className="text-center">
                Secure <br /> Payments
              </span>
            </div>
          </div>

          <div className="flex gap-3 pt-5 w-10">
            <img src={Phone_pe} />
            <img src={Paytm} />
            <img src={Google_pay} />
            <img src={UPI} />
            <img src={visa} />
            <img src={MasterCard} />
            <img src={amazon} />
          </div>
        </div>
      </div>
    </div>
  );
}
