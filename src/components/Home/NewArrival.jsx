import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { Heart, X, Loader2 } from "lucide-react";

const NewArrival = () => {
  const [activeTab, setActiveTab] = useState("viewAll");
  const [showPopup, setShowPopup] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        // Your API Endpoint
        const res = await fetch(
          "https://beyoung-backend.onrender.com/api/v1/product/products"
        );
        const data = await res.json();

        // Adjust based on whether API returns { data: [...] } or just [...]
        // Based on standard patterns, it's likely data.data or just data
        setProducts(data.data || data.products || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter Logic: Matches your API's "subCategory" (e.g., "T-shirts")
  const filteredProducts =
    activeTab === "viewAll"
      ? products
      : products.filter((item) => {
          // Safely access subCategory and normalize to lowercase for comparison
          const category = item.subCategory
            ? item.subCategory.toLowerCase()
            : "";
          // We use 'includes' so "shirt" tab matches "T-shirts"
          return category.includes(activeTab.toLowerCase());
        });

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
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
        activeTab === tabValue
          ? "bg-black text-white shadow-md"
          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
      }`}
      onClick={() => setActiveTab(tabValue)}
    >
      {label}
    </button>
  );

  return (
    <section className="min-h-[600px] py-10 relative">
      <div className="mb-8 flex flex-col justify-center items-center gap-2">
        <h1 className="text-3xl font-bold tracking-wide text-gray-900">
          New Arrival
        </h1>
        <p className="text-gray-500 text-sm">
          Get them before everyone else does
        </p>
      </div>

      {/* Tabs - Updated values to match likely API subCategories */}
      <div className="flex justify-center items-center gap-3 flex-wrap mb-10">
        {tabButton("viewAll", "View All")}
        {tabButton("t-shirt", "T-shirts")}
        {tabButton("shirt", "Shirts")}
        {tabButton("trousers", "Trousers")}
        {tabButton("polo", "Polo")}
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product, index) => (
            <Link
              to={`/product-details/${product._id}`}
              key={product._id}
              className="bg-white rounded-lg overflow-hidden block"
            >
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
                  <div className="relative w-full overflow-hidden rounded-xl aspect-3/4">
                    {/* Main Image */}
                    <img
                      src={mainImage}
                      alt={product.title}
                      className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                    />

                    {/* Hover Image (Absolute position to sit on top) */}
                    <img
                      src={hoverImage || mainImage}
                      alt={product.title}
                      className="w-full h-full object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleHeartClick();
                      }}
                      className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-sm hover:bg-white transition-all z-10"
                    >
                      <Heart className="w-4 h-4 text-gray-700" />
                    </button>
                  </div>

                  <div className="pt-4 px-1">
                    <h3 className="text-gray-900 font-semibold text-base mb-1 line-clamp-1">
                      {product.title}
                    </h3>
                    <p className="text-gray-500 text-xs mb-2 capitalize">
                      {product.subCategory}
                    </p>

                    <div className="flex items-center gap-2">
                      {/* Discounted Price */}
                      <span className="text-md font-bold text-gray-900">
                        ₹{priceInfo.discounted || "N/A"}
                      </span>

                      {/* Original Price */}
                      {priceInfo.original && (
                        <span className="text-gray-400 line-through text-xs">
                          ₹{priceInfo.original}
                        </span>
                      )}

                      {/* Off Percent */}
                      {priceInfo.offPercent && (
                        <span className="text-green-600 text-xs font-bold">
                          ({priceInfo.offPercent}% OFF)
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Keep your existing Popup code here... */}
      {showPopup && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4"
          onClick={handleClosePopup}
        >
          <div
            className="bg-white rounded-2xl w-full max-w-sm overflow-hidden relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClosePopup}
              className="absolute top-3 right-3 z-10 bg-white/80 rounded-full p-1"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="p-8 text-center">
              <h2 className="text-xl font-bold mb-4">Login to continue</h2>
              <p className="mb-4 text-gray-600">
                Please enter your phone number
              </p>
              <input
                className="w-full border p-2 rounded mb-4"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <button
                onClick={handleLogin}
                className="w-full bg-yellow-400 py-2 rounded font-bold"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default NewArrival;
