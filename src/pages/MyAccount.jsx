import React, { useState, useContext, useEffect } from "react";
import {
  ShoppingCart,
  MapPin,
  Heart,
  Wallet,
  Gift,
  Tag,
  Info,
  LogOut,
  Edit2,
  Plus,
  Trash2,
  XCircle,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router-dom";
import { WishlistContext } from "@/context/WishlistContext";
import { useAuth } from "@/context/AuthContext";
import ProductCard from "@/components/ProductListing/ProductCard";

const MyAccount = () => {
  const { logout, user } = useAuth();
  const [activeSection, setActiveSection] = useState("orders");
  const [isEditingProfile, setIsEditingProfile] = useState(false);

  const fullName = (user?.firstName || "") + " " + (user?.lastName || "");

  const [userProfile, setUserProfile] = useState({
    name: fullName || "",
    email: user?.email || "",
    phone: user?.phone || "",
  });

  const { wishlistItems } = useContext(WishlistContext);

  useEffect(() => {
    if (user) {
      setUserProfile({
        name: fullName || "",
        email: user?.email || "",
        phone: user?.phone || "",
      });
    }
  }, [user]);

  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: "Aditya Kumar",
      address: "201009 Uttar Pradesh",
      mobile: "9667024394",
      isDefault: true,
    },
  ]);

  const coupons = [
    {
      code: "BYNG5",
      description: "Save 5% on this order!",
      condition: "5% off on min shopping of ₹1995",
    },
    {
      code: "BYNG10",
      description: "Save 10% on this order!",
      condition: "10% off on min shopping of ₹2499",
    },
    {
      code: " Straticrestedge50",
      description: "Save ₹50 on this order!",
      condition: "₹50 off on orders above ₹999",
    },
  ];

  const menuItems = [
    { id: "orders", icon: ShoppingCart, label: "My Orders" },
    { id: "address", icon: MapPin, label: "My Address" },
    { id: "wishlist", icon: Heart, label: "Wishlist" },
    { id: "wallet", icon: Wallet, label: "Beyoung Wallet" },
    { id: "rewards", icon: Gift, label: "Beyoung Rewards" },
    { id: "coupons", icon: Tag, label: "Coupons" },
    { id: "contact", icon: Info, label: "Contact Us" },
    { id: "logout", icon: LogOut, label: "Logout" },
  ];

  const [showCancelModal, setShowCancelModal] = useState(false);
  const [orderToCancelId, setOrderToCancelId] = useState(null);
  const [cancelReason, setCancelReason] = useState("");
  const [showCancelSuccess, setShowCancelSuccess] = useState(false);
  const [showDeleteSuccess, setShowDeleteSuccess] = useState(false);
  const cancelReasons = [
    "Changed my mind",
    "Ordered wrong size/color",
    "Found cheaper elsewhere",
    "Delivery date is too long",
    "Other reasons",
  ];

  const handleOpenCancelModal = (orderId) => {
    setOrderToCancelId(orderId);
    setCancelReason("");
    setShowCancelModal(true);
  };

  const handlePermanentDelete = (orderId) => {
    if (
      window.confirm(
        "Are you sure you want to permanently delete this order record? This action cannot be undone."
      )
    ) {
      const existingOrders = JSON.parse(
        localStorage.getItem("beyoung_orders") || "[]"
      );

      const updatedOrders = existingOrders.filter(
        (order) => order.id !== orderId
      );

      localStorage.setItem("beyoung_orders", JSON.stringify(updatedOrders));

      setShowDeleteSuccess(true);
      setActiveSection(null);
      setTimeout(() => setActiveSection("orders"), 50);
      setTimeout(() => setShowDeleteSuccess(false), 3000);
    }
  };

  const handleCancelOrder = () => {
    if (!orderToCancelId || !cancelReason) return;
    const existingOrders = JSON.parse(
      localStorage.getItem("beyoung_orders") || "[]"
    );

    const updatedOrders = existingOrders.map((order) =>
      order.id === orderToCancelId
        ? {
            ...order,
            status: "Cancelled",
            cancellationReason: cancelReason,
            cancellationDate: new Date().toLocaleDateString(),
          }
        : order
    );

    localStorage.setItem("beyoung_orders", JSON.stringify(updatedOrders));
    setShowCancelModal(false);
    setShowCancelSuccess(true);
    setActiveSection(null);
    setTimeout(() => setActiveSection("orders"), 50);
    setTimeout(() => setShowCancelSuccess(false), 3000);
  };

  const handleDeleteAddress = (id) => {
    setAddresses(addresses.filter((addr) => addr.id !== id));
  };

  const handleLogout = () => {
    logout();
  };

  const handleProfileSave = () => {
    console.log("Saving profile:", userProfile);
    setIsEditingProfile(false);
  };

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setUserProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const renderContent = () => {
    switch (activeSection) {
      case "orders":
        const storedOrders = JSON.parse(
          localStorage.getItem("beyoung_orders") || "[]"
        );

        return (
          <div className="space-y-6">
            {storedOrders.length === 0 ? (
              <div className="bg-white rounded-lg p-8 flex flex-col items-center justify-center min-h-[570px]">
                <div className="w-64 h-64 mb-6 relative">
                  <img
                    src="https://res.cloudinary.com/dj9tpadhk/image/upload/v1764934070/Empty-cuate_ax4cwi.svg"
                    alt="No Orders"
                  />
                </div>
                <h2 className="text-2xl font-semibold mb-3">
                  No Order Placed Yet
                </h2>
                <p className="text-gray-600 text-center mb-6 max-w-md">
                  You have not placed an order yet! please add items to your
                  cart and checkout when you are ready
                </p>
                <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-12 rounded-full transition-colors">
                  Explore products
                </button>
              </div>
            ) : (
              storedOrders.map((order) => (
                <div
                  key={order.id}
                  className="bg-white rounded-lg p-6 shadow-sm border border-gray-200"
                >
                  <div className="flex justify-between items-start border-b pb-4 mb-4">
                    <div>
                      <p className="font-bold text-lg">Order ID: {order.id}</p>
                      <p className="text-sm text-gray-500">
                        Ordered on: {order.date}
                      </p>
                    </div>
                    <div className="text-right">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-1 ${
                          order.status === "Confirmed"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {order.status}
                      </span>
                      <p className="font-bold text-xl">Total: ₹{order.total}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {order.items.map((item, index) => (
                      <div key={index} className="flex gap-4 items-start">
                        <div className="w-16 h-20 bg-gray-100 rounded-md overflow-hidden shrink-0">
                          <img
                            src={
                              item.image ||
                              "https://via.placeholder.com/80?text=Product"
                            }
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">
                            {item.name}
                          </h4>
                          <p className="text-sm text-gray-500">
                            Qty: {item.quantity || 1}
                          </p>
                          <p className="font-medium mt-1">₹{item.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 pt-4 border-t flex justify-between items-center text-sm">
                    <div className="text-gray-600">
                      Payment:{" "}
                      <span className="font-medium text-black">
                        {order.paymentMethod}
                      </span>
                    </div>
                    {order.status === "Confirmed" ? (
                      <div className="text-gray-600">
                        Delivery:{" "}
                        <span className="font-medium text-black">
                          {order.deliveryDate}
                        </span>
                      </div>
                    ) : (
                      <div className="text-gray-600">
                        Reason:{" "}
                        <span className="font-medium">
                          {order.cancellationReason}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="mt-4 pt-3 border-t flex justify-start gap-4">
                    {order.status === "Confirmed" && (
                      <button
                        onClick={() => handleOpenCancelModal(order.id)}
                        className="flex items-center gap-2 text-sm font-semibold text-red-600 border border-red-300 px-4 py-2 rounded-lg hover:bg-red-50 transition-colors"
                      >
                        <XCircle size={16} /> Cancel Order
                      </button>
                    )}

                    <button
                      onClick={() => handlePermanentDelete(order.id)}
                      className="flex items-center gap-2 text-sm font-semibold text-gray-600 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <Trash2 size={16} /> Delete Record
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        );

      case "address":
        return (
          <div className="bg-white rounded-lg p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Default Address</h2>
              <button className="flex items-center gap-2 text-sm font-medium hover:text-yellow-600">
                <Plus size={18} />
                Add new address
              </button>
            </div>
            {addresses.map((addr) => (
              <div
                key={addr.id}
                className="border border-gray-300 rounded-lg p-4 mb-4"
              >
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-semibold mb-1">{addr.name}</h3>
                    <p className="text-gray-600 text-sm mb-1">{addr.address}</p>
                    <p className="text-gray-600 text-sm">
                      Mobile: {addr.mobile}
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <button className="text-gray-500 hover:text-yellow-600">
                      <Edit2 size={18} />
                    </button>
                    <button
                      onClick={() => handleDeleteAddress(addr.id)}
                      className="text-gray-500 hover:text-red-600"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case "wishlist":
        return (
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-xl font-semibold mb-6">
              Your Wishlist ({wishlistItems.length})
            </h2>

            {wishlistItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center">
                <img
                  src="https://res.cloudinary.com/dj9tpadhk/image/upload/v1764934077/Online_wishes_list-cuate_n0yxrb.svg"
                  className="w-60 h-60 mb-4"
                  alt="Empty Wishlist"
                />
                <p className="text-gray-700 italic text-center mb-6">
                  Your wishlist is empty! Add your favourite fashion items ♥
                </p>
                <Link
                  to="/"
                  className="bg-yellow-400 px-6 py-3 rounded-full font-semibold"
                >
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {wishlistItems.map((product) => (
                  <ProductCard
                    key={product._id || product.id}
                    product={product}
                  />
                ))}
              </div>
            )}
          </div>
        );

      case "coupons":
        return (
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-xl font-semibold mb-6">Coupons</h2>
            <div className="space-y-4">
              {coupons.map((coupon, idx) => (
                <div
                  key={idx}
                  className="border border-gray-300 rounded-lg p-4 flex items-center gap-4"
                >
                  <div className="bg-yellow-400 text-black font-bold px-3 py-8 rounded  transform -rotate-90 origin-center whitespace-nowrap text-sm">
                    STRATICRESTEDGE
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">{coupon.code}</h3>
                    <p className="text-green-600 font-medium text-sm mb-2">
                      {coupon.description}
                    </p>
                    <p className="text-gray-600 text-xs border-t border-dashed pt-2">
                      {coupon.condition}
                    </p>
                  </div>
                  <button className="border-2 border-gray-300 hover:border-yellow-400 px-6 py-2 rounded font-medium text-sm transition-colors">
                    COPY
                  </button>
                </div>
              ))}
            </div>
          </div>
        );

      case "contact":
        return (
          <div className="bg-white rounded-lg p-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
                <p className="text-gray-600">
                  Your satisfaction matters to us!
                </p>
              </div>
              <div className="w-32 h-32">
                <img
                  src="https://res.cloudinary.com/dj9tpadhk/image/upload/v1764934065/brand_communication-cuate_o3pkkf.svg"
                  alt="contact_svg_img"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold mb-3">
                  Reach Us Out - We're all ears!
                </h3>
                <p className="text-gray-700 mb-4">
                  Do you have a question? Need help with your order? Want to
                  share feedback? Our support team is here for you.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="mb-3">
                  <span className="font-semibold">WhatsApp Support: </span>
                  <a href="#" className="text-blue-600 hover:underline">
                    Click Here
                  </a>
                </div>
                <div>
                  <span className="font-semibold">Email Support: </span>
                  <span className="text-gray-700">
                    support@straticrestedge.in
                  </span>
                </div>
              </div>

              <div>
                <p className="font-semibold mb-1">
                  Working Hours:{" "}
                  <span className="font-normal">
                    9am - 5pm IST Monday to Sunday.
                  </span>
                </p>
                <p className="text-sm text-gray-600 italic">
                  Note: Queries received outside working hours will be addressed
                  on the next working day.
                </p>
              </div>

              <div>
                <p className="text-gray-700">
                  To know about our Returns, Exchange, and Refund Policies,{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    click here
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="bg-white rounded-lg p-8 flex items-center justify-center min-h-[500px]">
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-3">Coming Soon</h2>
              <p className="text-gray-600">This section is under development</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {showCancelModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-2xl">
            <h2 className="text-xl font-bold mb-4">Why are you cancelling?</h2>

            <div className="relative mb-6">
              <select
                value={cancelReason}
                onChange={(e) => setCancelReason(e.target.value)}
                className="w-full border border-gray-300 rounded-lg py-3 px-4 appearance-none pr-10 focus:ring-yellow-400 focus:border-yellow-400 cursor-pointer"
              >
                <option value="" disabled>
                  Select a reason...
                </option>
                {cancelReasons.map((reason) => (
                  <option key={reason} value={reason}>
                    {reason}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowCancelModal(false)}
                className="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-100"
              >
                Go Back
              </button>
              <button
                onClick={handleCancelOrder}
                disabled={!cancelReason}
                className={`px-4 py-2 rounded-lg text-white font-semibold transition-colors ${
                  !cancelReason
                    ? "bg-red-300 cursor-not-allowed"
                    : "bg-red-600 hover:bg-red-700"
                }`}
              >
                Confirm Cancellation
              </button>
            </div>
          </div>
        </div>
      )}

      <div
        className={`fixed bottom-4 right-4 p-4 rounded-lg shadow-xl transition-all duration-500 transform z-50 
          ${
            showCancelSuccess
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          } 
          bg-red-600 text-white flex items-center gap-3`}
      >
        <XCircle className="w-6 h-6" />
        <div>
          <p className="font-bold text-lg">Order Cancelled!</p>
          <p className="text-sm">Your order has been successfully cancelled.</p>
        </div>
      </div>

      <div
        className={`fixed bottom-4 right-4 p-4 rounded-lg shadow-xl transition-all duration-500 transform z-50 
          ${
            showDeleteSuccess
              ? "translate-x-0 opacity-100 bg-gray-700"
              : "translate-x-full opacity-0 bg-gray-700"
          } 
          text-white flex items-center gap-3`}
      >
        <Trash2 className="w-5 h-5 text-red-400" />
        <div>
          <p className="font-bold text-lg">Record Deleted</p>
          <p className="text-sm">
            The order record has been permanently removed.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg p-6 sticky top-24">
              {/* User Profile */}
              <div className="text-center mb-6 pb-6 border-b relative">
                <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-3xl font-bold text-gray-600">
                    {userProfile.name.charAt(0)}
                  </span>
                </div>

                <button
                  onClick={() =>
                    isEditingProfile
                      ? handleProfileSave()
                      : setIsEditingProfile(true)
                  }
                  className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {isEditingProfile ? (
                    <span className="text-sm font-semibold text-blue-600">
                      SAVE
                    </span>
                  ) : (
                    <Edit2 size={18} />
                  )}
                </button>

                {/* 🔑 Display/Edit Fields */}
                {isEditingProfile ? (
                  <div className="space-y-2 text-left px-2 mt-4">
                    <input
                      type="text"
                      name="name"
                      value={userProfile.name}
                      onChange={handleProfileChange}
                      className="w-full text-lg font-semibold border-b border-gray-300 focus:border-yellow-500 outline-none p-1 transition-colors"
                    />
                    <input
                      type="email"
                      name="email"
                      value={userProfile.email}
                      onChange={handleProfileChange}
                      className="w-full text-sm text-gray-600 border-b border-gray-300 focus:border-yellow-500 outline-none p-1 transition-colors"
                    />
                    <input
                      type="tel"
                      name="phone"
                      value={userProfile.phone}
                      onChange={handleProfileChange}
                      className="w-full text-sm text-gray-600 border-b border-gray-300 focus:border-yellow-500 outline-none p-1 transition-colors"
                    />
                  </div>
                ) : (
                  <div>
                    <h3 className="font-semibold text-lg">
                      {userProfile.name}
                    </h3>
                    <p className="text-sm text-gray-600">{userProfile.email}</p>
                    <p className="text-sm text-gray-600">{userProfile.phone}</p>
                  </div>
                )}
              </div>

              {/* Menu Items */}
              <nav className="space-y-1">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;

                  const handleClick = () => {
                    if (item.id === "logout") {
                      handleLogout();
                    } else {
                      setActiveSection(item.id);
                    }
                  };

                  return (
                    <button
                      key={item.id}
                      onClick={handleClick}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors 
                        ${
                          isActive && item.id !== "logout"
                            ? "bg-yellow-400 text-black font-semibold"
                            : "text-gray-700 hover:bg-gray-100"
                        }
                        ${
                          item.id === "logout"
                            ? "text-red-600 hover:bg-red-50"
                            : ""
                        }
                      `}
                    >
                      <Icon size={20} />
                      <span className="flex-1 text-left">{item.label}</span>
                      {/* Hide arrow for Logout button */}
                      {item.id !== "logout" && (
                        <svg
                          className={`w-4 h-4 transition-transform ${
                            isActive ? "rotate-90" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      )}
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Content Area */}
          <div className="md:col-span-3">
            <div className="mb-4">
              <h2 className="text-2xl font-semibold bg-white p-4 rounded-lg">
                {menuItems.find((item) => item.id === activeSection)?.label}
              </h2>
            </div>
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
