import React, { useState } from "react";
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
} from "lucide-react";
import empty_order from "../assets/Empty-cuate.svg"
import wishlist from "../assets/Online wishes list-cuate.svg"
import contact_svg from "../assets/brand communication-cuate.svg"
import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";

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
      code: " ELEGANTE50",
      description: "Save ₹50 on this order!",
      condition: "₹50 off on orders above ₹999",
    },
  ];

  const recentlyViewed = [
    {
      id: 1,
      name: "Pack Of 4 - Chill Vibe Boxers",
      category: "Boxers",
      price: "₹998",
      oldPrice: "₹1798",
      discount: "55% off",
      image:
        "https://res.cloudinary.com/dj9tpadhk/image/upload/v1764573435/beyoung_products/blftomf1y3lrcyep9ctb.jpg",
    },
    {
      id: 2,
      name: "Pecan Brown Elbow Patch Sweatshirt",
      category: "Sweatshirts",
      price: "₹1199",
      oldPrice: "₹2999",
      discount: "60% off",
      image:
        "https://res.cloudinary.com/dj9tpadhk/image/upload/v1764569169/beyoung_products/upwoewbgxlstodj6goeq.jpg",
    },
    {
      id: 3,
      name: "Beige Turtle Neck Sweatshirt",
      category: "Sweatshirts",
      price: "₹1499",
      oldPrice: "₹3799",
      discount: "68% off",
      image:
        "https://res.cloudinary.com/dj9tpadhk/image/upload/v1764509580/beyoung_products/wgwo727yp8ul6qkh5pdf.jpg",
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

  const handleDeleteAddress = (id) => {
    setAddresses(addresses.filter((addr) => addr.id !== id));
  };

  const handleLogout = () => {
    logout(); // 🔑 Call the imported logout functionm
  };

  const handleProfileSave = () => {
    // 🚨 Add API call here to persist changes
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
        return (
          <div className="bg-white rounded-lg p-8 flex flex-col items-center justify-center min-h-[570px]">
            <div className="w-64 h-64 mb-6 relative">
              <img src={empty_order} alt="" />
            </div>
            <h2 className="text-2xl font-semibold mb-3">No Order Placed Yet</h2>
            <p className="text-gray-600 text-center mb-6 max-w-md">
              You have not placed an order yet! please add items to your cart
              and checkout when you are ready
            </p>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-12 rounded-full transition-colors">
              Explore products
            </button>
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
            <div className="flex flex-col items-center justify-center mb-8">
              <div className="w-48 h-48 mb-6">
                <img src={wishlist} alt="wishlist_items" />
              </div>
              <p className="text-gray-700 text-center italic mb-8">
                "Add your must-have clothes to your favorites and never miss a
                stylish beat."
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-600 mb-4">
                RECENTLY VIEWED
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {recentlyViewed.map((item) => (
                  <div
                    key={item.id}
                    className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-48 object-cover bg-gray-200"
                    />
                    <div className="p-3">
                      <h4 className="font-medium text-sm mb-1 truncate">
                        {item.name}
                      </h4>
                      <p className="text-xs text-gray-500 mb-2">
                        {item.category}
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="font-bold">{item.price}</span>
                        <span className="text-gray-400 line-through text-sm">
                          {item.oldPrice}
                        </span>
                        <span className="text-green-600 text-xs">
                          ({item.discount})
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-full transition-colors">
                Continue Shopping
              </button>
            </div>
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
                  <div className="bg-yellow-400 text-black font-bold px-3 py-8 rounded  transform -rotate-90 origin-center whitespace-nowrap text-sm">
                     ELEGANTE
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
               <img src={contact_svg} alt="contact_svg_img" />
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
                  <span className="text-gray-700">support@beyoung.in</span>
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

                {/* 🔑 Edit/Save Button */}
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

                  // 🔑 Determine the action based on the menu item
                  const handleClick = () => {
                    if (item.id === "logout") {
                      handleLogout(); // Call the logout function
                    } else {
                      setActiveSection(item.id); // Change the dashboard section
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
