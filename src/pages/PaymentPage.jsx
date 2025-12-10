import React, { useEffect, useState, useContext } from "react";
import {
  Lock,
  CreditCard,
  Wallet,
  Banknote,
  ChevronRight,
  ShieldCheck,
  Users,
  RotateCcw,
  Truck,
  ChevronDown,
  CheckCircle,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
// ⭐ 1. Correct Import: Ensure CartContext is imported correctly.
import { CartContext } from "../context/CartContext";

export default function PaymentPage() {
  const [active, setActive] = useState("upi");
  // ⭐ 2. DESTRUCTURE clearCart from CartContext
  const { cartItems, clearCart } = useContext(CartContext);
  const [showMoreBanks, setShowMoreBanks] = useState(false);

  // ⭐ UPDATED STATE AND HOOKS
  const [showSuccessNotification, setShowSuccessNotification] = useState(false);
  const navigate = useNavigate();

  const totalMRP =
    cartItems?.reduce(
      (sum, item) => sum + (item.price * item.quantity || item.price || 0),
      0
    ) || 0;

  // ⭐ 3. UPDATED FUNCTION: Saves Order and CLEARS CART
  const handleCODConfirm = () => {
    // 1. Create Order Data
    const newOrder = {
      id: "ORD" + Date.now(),
      date: new Date().toLocaleDateString(),
      items: cartItems || [],
      total: totalMRP + 100, // Total + COD charge
      paymentMethod: "Cash On Delivery",
      status: "Confirmed",
      deliveryDate: new Date(
        Date.now() + 5 * 24 * 60 * 60 * 1000
      ).toLocaleDateString(),
    };

    // 2. Get Old Orders and Save New Order
    const existingOrders = JSON.parse(
      localStorage.getItem("beyoung_orders") || "[]"
    );

    localStorage.setItem(
      "beyoung_orders",
      JSON.stringify([newOrder, ...existingOrders])
    );

    // ⭐ 3. CLEAR CART: This is the crucial step to remove items from the cart.
    if (clearCart) {
      clearCart();
    }

    // 4. Show Notification
    setShowSuccessNotification(true);

    // 5. Auto-Redirect after 3 seconds
    setTimeout(() => {
      setShowSuccessNotification(false); // Hide the notification
      navigate("/my-account"); // Redirect to My Orders page
    }, 3000);
  };

  // Removed handleClosePopup as we are using auto-redirect

  function NetBankingSection() {
    const topBanks = [
      {
        name: "SBI",
        logo: "https://res.cloudinary.com/dj9tpadhk/image/upload/v1764932853/SBI_abmj1a.svg",
      },
      {
        name: "Kotak",
        logo: "https://res.cloudinary.com/dj9tpadhk/image/upload/v1764932847/Kotak_kvow16.png",
      },
      {
        name: "IndusLand",
        logo: "https://res.cloudinary.com/dj9tpadhk/image/upload/v1764932862/Indusland_ytlgbp.png",
      },
      {
        name: "ICICI",
        logo: "https://res.cloudinary.com/dj9tpadhk/image/upload/v1764932941/ICICI_l6un3q.png",
      },
      {
        name: "HDFC",
        logo: "https://res.cloudinary.com/dj9tpadhk/image/upload/v1764932879/HDFC_e4ltth.png",
      },
      {
        name: "AXIS",
        logo: "https://res.cloudinary.com/dj9tpadhk/image/upload/v1764932872/Axis_ensi9o.png",
      },
    ];

    const moreBanks = [
      {
        name: "PNB",
        logo: "https://res.cloudinary.com/dj9tpadhk/image/upload/v1764933010/PNB_nbhpmh.png",
      },
      {
        name: "Yes Bank",
        logo: "https://res.cloudinary.com/dj9tpadhk/image/upload/v1764933025/Yes_Bank_afby6f.png",
      },
      {
        name: "IDFC",
        logo: "https://res.cloudinary.com/dj9tpadhk/image/upload/v1764933033/IDFC_m2izkl.png",
      },
      {
        name: "Bank of India",
        logo: "https://res.cloudinary.com/dj9tpadhk/image/upload/v1764933055/BOI_thkggn.png",
      },
    ];

    return (
      <div className="space-y-5">
        <div className="bg-green-50 py-2 text-center text-sm font-semibold text-green-700">
          No Delivery Charges
        </div>
        <p className="font-semibold text-lg">Net Banking</p>
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
        <button
          onClick={() => setShowMoreBanks(!showMoreBanks)}
          className="w-full border p-4 rounded-lg text-sm font-semibold flex justify-between items-center"
        >
          Select Different Bank
          {showMoreBanks ? <ChevronDown /> : <ChevronRight />}
        </button>
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

  const finalAmount = active === "cod" ? totalMRP + 100 : totalMRP - 29;

  return (
    <div className="bg-white min-h-screen px-4 py-6 lg:px-10 relative">
      {/* ⭐ NEW FLOATING SUCCESS NOTIFICATION (Toast Style) */}
      <div
        className={`fixed bottom-4 right-4 p-4 rounded-lg shadow-xl transition-all duration-500 transform z-50 
          ${
            showSuccessNotification
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          } 
          bg-green-600 text-white flex items-center gap-3`}
      >
        <CheckCircle className="w-6 h-6" />
        <div>
          <p className="font-bold text-lg">Order Confirmed!</p>
          <p className="text-sm">
            Your COD order has been placed successfully and cart cleared.
          </p>
        </div>
        <button
          onClick={() => navigate("/myaccount")}
          className="ml-4 bg-white text-green-600 font-semibold px-3 py-1 rounded hover:bg-gray-100 whitespace-nowrap"
        >
          Go to Orders
        </button>
      </div>

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
              <img
                src="https://res.cloudinary.com/dj9tpadhk/image/upload/v1764932713/upiLogo_jbjdeq.svg"
                alt="upiLogo"
                className="text-green-600"
              />
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
                <img src="https://res.cloudinary.com/dj9tpadhk/image/upload/v1764932372/Phone_pe_eopj3j.svg" />
                <img src="https://res.cloudinary.com/dj9tpadhk/image/upload/v1764932381/Paytm_xbc6eb.svg" />
                <img src="https://res.cloudinary.com/dj9tpadhk/image/upload/v1764932398/Google_pay_rf3zwp.svg" />
                <img src="https://res.cloudinary.com/dj9tpadhk/image/upload/v1764932389/UPI_sdfnqf.png" />
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

          {/* COD UI - CONNECTED TO handleCODConfirm */}
          {active === "cod" && (
            <div className="text-center space-y-4">
              <p className="text-sm">COD charges applied</p>

              {/* Button now calls the handleCODConfirm function */}
              <button
                onClick={handleCODConfirm}
                className="bg-black text-white w-full py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Confirm Order
              </button>

              <div className="flex items-center gap-2 justify-center text-xs">
                <span className="flex-1 h-px bg-gray-300"></span>OR
                <span className="flex-1 h-px bg-gray-300"></span>
              </div>
              <button
                onClick={() => setActive("upi")}
                className="border px-6 w-full py-3 rounded-lg hover:bg-gray-50"
              >
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
                {
                  name: "PhonePe",
                  img: "https://res.cloudinary.com/dj9tpadhk/image/upload/v1764932372/Phone_pe_eopj3j.svg",
                },
                {
                  name: "MobiKwik",
                  img: "https://res.cloudinary.com/dj9tpadhk/image/upload/v1764933045/Mobikwi_buw0wb.png",
                },
                {
                  name: "AmazonPay",
                  img: "https://res.cloudinary.com/dj9tpadhk/image/upload/v1764932412/amazon_lnlq2h.svg",
                },
                {
                  name: "OlaMoney",
                  img: "https://res.cloudinary.com/dj9tpadhk/image/upload/v1764933074/OlaMoney_qzorko.png",
                },
                {
                  name: "AirtelMoney",
                  img: "https://res.cloudinary.com/dj9tpadhk/image/upload/v1764933083/Airtel_g3cf69.png",
                },
                {
                  name: "JioMoney",
                  img: "https://res.cloudinary.com/dj9tpadhk/image/upload/v1764933066/Jio_ohjosr.png",
                },
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

          {/* NET BANKING UI */}
          {active === "netbanking" && <NetBankingSection />}

          {/* EPAY UI */}
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
              <span>₹{finalAmount}</span>
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
              <img
                src="https://res.cloudinary.com/dj9tpadhk/image/upload/v1764932690/India_map_vsfjqe.png"
                className="w-10"
              />
              <span>Made in India</span>
            </div>

            <div className="flex flex-col items-center">
              <img
                src="https://res.cloudinary.com/dj9tpadhk/image/upload/v1764932707/Original_zzcjse.png"
                className="w-16"
              />
              <span className="text-center">
                100% <br /> Original
              </span>
            </div>

            <div className="flex flex-col items-center">
              <img
                src="https://res.cloudinary.com/dj9tpadhk/image/upload/v1764932700/Secure_yb5fqy.jpg"
                className="w-10"
              />
              <span className="text-center">
                Secure <br /> Payments
              </span>
            </div>
          </div>

          <div className="flex gap-3 pt-5 w-10">
            <img src="https://res.cloudinary.com/dj9tpadhk/image/upload/v1764932372/Phone_pe_eopj3j.svg" />
            <img src="https://res.cloudinary.com/dj9tpadhk/image/upload/v1764932381/Paytm_xbc6eb.svg" />
            <img src="https://res.cloudinary.com/dj9tpadhk/image/upload/v1764932398/Google_pay_rf3zwp.svg" />
            <img src="https://res.cloudinary.com/dj9tpadhk/image/upload/v1764932389/UPI_sdfnqf.png" />
            <img src="https://res.cloudinary.com/dj9tpadhk/image/upload/v1764932404/visa_akcdid.svg" />
            <img src="https://res.cloudinary.com/dj9tpadhk/image/upload/v1764932417/MasterCard_d2s3vg.png" />
            <img src="https://res.cloudinary.com/dj9tpadhk/image/upload/v1764932412/amazon_lnlq2h.svg" />
          </div>
        </div>
      </div>
    </div>
  );
}
