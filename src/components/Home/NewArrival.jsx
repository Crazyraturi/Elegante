import React, { useEffect, useState } from "react";
import { Heart, X } from "lucide-react";

const NewArrival = () => {
  const [activeTab, setActiveTab] = useState("viewAll");
  const [showPopup, setShowPopup] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const [products, setProducts] = useState([]); // backend products

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          "https://beyoung-backend.onrender.com/api/v1/product/products"
        );
        const data = await res.json();
        setProducts(data.data);   // Adjust this according to response shape
      } catch (error) {
        console.log("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

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

  const tabButton = (tabValue, label) => (
  <button
    className={`px-4 py-2 rounded-full text-sm font-medium ${
      activeTab === tabValue
        ? "bg-black text-white"
        : "bg-gray-200 text-gray-700"
    }`}
    onClick={() => setActiveTab(tabValue)}
  >
    {label}
  </button>
);


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
