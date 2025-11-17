import React, { useState } from "react";
import { Heart, X } from "lucide-react";

const NewArrival = () => {
  const [activeTab, setActiveTab] = useState("viewAll");
  const [showPopup, setShowPopup] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const tabButton = (id, label) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`border-2 border-gray-300 rounded-full p-2 px-10 m-2 transition
        ${activeTab === id ? "bg-black text-yellow-400" : "bg-white text-black"}
      `}
    >
      {label}
    </button>
  );

  // PRODUCT DATA
  const products = [
    {
      image: "/src/assets/NAFI1.jpg",
      hoverImage: "/src/assets/NAI1.jpg",
      title: "Pecan Brown Elbow Patch Sweats...",
      category: "Sweatshirts",
      price: "1199",
      originalPrice: "2999",
      discount: "60% off",
      type: "shirts",
    },
    {
      image: "/src/assets/NAFI2.jpg",
      hoverImage: "/src/assets/NAI2.jpg",
      title: "Beign Turtle Neck Sweatshirts",
      category: "Sweatshirts",
      price: "1499",
      originalPrice: "3599",
      discount: "58% off",
      type: "tshirt",
    },
    {
      image: "/src/assets/NAFI3.jpg",
      hoverImage: "/src/assets/NAI3.jpg",
      title: "Brown camo Printed Hoodie",
      category: "Hoodies",
      price: "1199",
      originalPrice: "2399",
      discount: "50% off",
      type: "tshirt",
    },
    {
      image: "/src/assets/NAFI4.jpg",
      hoverImage: "/src/assets/NAI4.jpg",
      title: "Blue camo Printed Hoodie",
      category: "Hoodies",
      price: "1199",
      originalPrice: "2399",
      discount: "50% off",
      type: "trousers",
    },
    {
      image: "/src/assets/NAFI5.jpg",
      hoverImage: "/src/assets/NAI5.jpg",
      title: "Dark Grey Button Down Oxford Shirt",
      category: "Oxford Shirt",
      price: "899",
      originalPrice: "1799",
      discount: "50% off",
      type: "shirt",
    },
    {
      image: "/src/assets/NAFI6.jpg",
      hoverImage: "/src/assets/NAI6.jpg",
      title: "Wine Button Down Oxford Shirt",
      category: "Oxford Shirt",
      price: "899",
      originalPrice: "1799",
      discount: "50% off",
      type: "shirt",
    },
    {
      image: "/src/assets/NAFI7.jpg",
      hoverImage: "/src/assets/NAI7.jpg",
      title: "Beige Utility Shirt",
      category: "Utility Shirt",
      price: "1199",
      originalPrice: "2899",
      discount: "59% off",
      type: "shirt",
    },
    {
      image: "/src/assets/NAFI8.jpg",
      hoverImage: "/src/assets/NAI8.jpg",
      title: "Dusty Olive Utility Shirt",
      category: "Utility Shirt",
      price: "1199",
      originalPrice: "2899",
      discount: "59% off",
      type: "shirt",
    },
    {
      image: "/src/assets/NAFI9.jpg",
      hoverImage: "/src/assets/NAI9.jpg",
      title: "Black Printed Varsity Jacket",
      category: "Varsity Jackets",
      price: "2199",
      originalPrice: "3999",
      discount: "45% off",
      type: "jacket",
    },
    {
      image: "/src/assets/NAFI10.jpg",
      hoverImage: "/src/assets/NAI10.jpg",
      title: "Cider Brown Printed Varsity Jacket",
      category: "Varsity Jackets",
      price: "2199",
      originalPrice: "3999",
      discount: "45% off",
      type: "jacket",
    },
    {
      image: "/src/assets/NAFI11.jpg",
      hoverImage: "/src/assets/NAI11.jpg",
      title: "Navy Utility Shirt",
      category: "Utility Shirt",
      price: "1199",
      originalPrice: "2899",
      discount: "59% off",
      type: "shirt",
    },
    {
      image: "/src/assets/NAFI12.jpg",
      hoverImage: "/src/assets/NAI12.jpg",
      title: "Black Waffle Button-Down Cotton Shirt",
      category: "Shirts",
      price: "998",
      originalPrice: "1998",
      discount: "50% off",
      type: "shirt",
    },
  ];

  const filteredProducts =
    activeTab === "viewAll"
      ? products
      : products.filter((item) => item.type === activeTab);

  const handleHeartClick = () => setShowPopup(true);
  const handleClosePopup = () => {
    setShowPopup(false);
    setPhoneNumber("");
  };

  const handleLogin = () => {
    console.log("Login with phone:", phoneNumber);
  };

  return (
    <section className="min-h-[80%] item-center relative">
      <div className="pt-4 gap-3 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-semibold">New Arrival</h1>
        <h3>Get them before everyone else does</h3>
      </div>

      {/* Tabs */}
      <div className="justify-center items-center flex gap-1 flex-wrap font-sm">
        {tabButton("viewAll", "View All")}
        {tabButton("shirts", "Shirts")}
        {tabButton("trousers", "Trousers")}
        {tabButton("tshirt", "T-shirt")}
        {tabButton("polo", "Polo T-shirt")}
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden">
              <div className="relative group w-full h-100">
                {/* Main Image */}
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-100 object-cover transition-opacity duration-300 group-hover:opacity-0"
                />

                {/* Hover Image */}
                <img
                  src={product.hoverImage}
                  alt="hover"
                  className="w-full h-100 object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />

                {/* Heart Button */}
                <button
                  onClick={handleHeartClick}
                  className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors"
                >
                  <Heart className="w-5 h-5 text-gray-700" />
                </button>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="text-gray-900 font-medium text-[14px] mb-1 line-clamp-2">
                  {product.title}
                </h3>
                <p className="text-gray-500 text-sm mb-2">{product.category}</p>

                <div className="flex items-center gap-1">
                  <span className="text-lg font-bold text-gray-900">
                    ₹{product.price}
                  </span>
                  <span className="text-gray-400 line-through text-sm">
                    ₹{product.originalPrice}
                  </span>
                  <span className="text-green-600 text-sm font-semibold">
                    {product.discount}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* POPUP */}
      {showPopup && (
        <div
          className="fixed inset-0 bg-black/80 flex justify-center z-50"
          onClick={handleClosePopup} // CLOSE WHEN CLICK OUTSIDE
        >
          <div
            className="bg-white rounded-lg w-full max-w-md overflow-hidden relative mt-8"
            style={{ height: "55vh" }}
            onClick={(e) => e.stopPropagation()} // PREVENT CLOSE WHEN CLICK INSIDE
          >
            {/* Close Button */}
            <button
              onClick={handleClosePopup}
              className="absolute top-3 right-3 bg-white rounded-full p-1 hover:bg-gray-100 transition-colors z-10"
            >
              <X className="w-4 h-4 text-gray-700" />
            </button>

            <div className="flex flex-col h-full">
              {/* Smaller Image */}
              <div className="w-full">
                <img
                  src="src/assets/popupImage.jpg"
                  alt="Fashion"
                  className="w-full h-45 object-cover"
                />
              </div>

              {/* Smaller Login Section */}
              <div className="p-3 flex flex-col justify-start flex-1 overflow-auto">
                <h3 className="text-lg font-semibold mb-1">Login or Signup</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Get Exciting Offers & Track Order
                </p>

                <div className="mb-3">
                  <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                    <div className="flex items-center gap-1 px-2 py-2 bg-gray-50 border-r border-gray-300">
                      <span className="text-xl">🇮🇳</span>
                      <span className="text-gray-700 text-sm">+91</span>
                    </div>

                    <input
                      type="tel"
                      placeholder="Phone Number *"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="flex-1 px-3 py-2 outline-none text-sm"
                      maxLength="10"
                    />
                  </div>
                </div>

                <button
                  onClick={handleLogin}
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded-lg transition-colors text-sm"
                >
                  Login with OTP
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default NewArrival;
