import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Heart, X, Loader2 } from "lucide-react";

const NewArrival = () => {
  const [activeTab, setActiveTab] = useState("viewAll");
  const [showPopup, setShowPopup] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(12);
  const observerTarget = useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          "https://beyoung-backend.onrender.com/api/v1/product"
        );
        const data = await res.json();
        setProducts(data.data || data.products || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts =
    activeTab === "viewAll"
      ? products
      : products.filter((item) => {
          const category = item.subCategory
            ? item.subCategory.toLowerCase()
            : "";
          return category.includes(activeTab.toLowerCase());
        });

  useEffect(() => {
    setVisibleCount(12);
  }, [activeTab]);

  const displayedProducts = filteredProducts.slice(0, visibleCount);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => prev + 8);
        }
      },
      { threshold: 1.0 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [observerTarget, filteredProducts]);

  const handleHeartClick = () => setShowPopup(true);

  const handleClosePopup = () => {
    setShowPopup(false);
    setPhoneNumber("");
  };

  const handleLogin = () => {
    console.log("Login with phone:", phoneNumber);
    handleClosePopup();
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

      <div className="flex justify-center items-center gap-3 flex-wrap mb-10">
        {tabButton("viewAll", "View All")}
        {tabButton("t-shirt", "T-shirts")}
        {tabButton("shirt", "Shirts")}
        {tabButton("trousers", "Trousers")}
        {tabButton("polo", "Polo")}
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <Loader2 className="w-10 h-10 animate-spin text-gray-400" />
        </div>
      ) : (
        <div className="max-w-7xl mx-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayedProducts.map((product) => {
              const gallery = product.images?.gallery || [];
              const previewImage = product.images?.preview;

              const frontViewObj = gallery.find(
                (item) => item.view === "Front View"
              );
              const hoverViewObj = gallery.find(
                (item) => item.view === "Hover View"
              );

              let mainImage = previewImage;
              if (!mainImage && frontViewObj?.file) {
                mainImage = frontViewObj.file;
              }
              if (!mainImage && gallery.length > 0) {
                const firstFile = gallery.find((item) => item.file)?.file;
                if (firstFile) mainImage = firstFile;
              }
              if (!mainImage)
                mainImage = "https://via.placeholder.com/300x400?text=No+Image";

              let hoverImage = hoverViewObj?.file;
              if (!hoverImage) hoverImage = mainImage;

              const firstVariant = product.variants?.[0];
              const priceInfo = firstVariant?.price || {};

              const price = priceInfo.discounted || 0;
              const originalPrice = priceInfo.original || 0;
              const offPercent = priceInfo.offPercent || 0;

              return (
                <Link
                  // 🚨 FIX APPLIED HERE: Change the path to the correct, working route
                  to={`/product/${product._id}`}
                  key={product._id}
                  className="bg-white rounded-lg overflow-hidden block group"
                >
                  <div className="relative w-full overflow-hidden rounded-xl aspect-3/4">
                    <img
                      src={mainImage}
                      alt={product.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                    />

                    <img
                      src={hoverImage}
                      alt={product.title}
                      loading="lazy"
                      className="w-full h-full object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />

                    <button
                      onClick={(e) => {
                        e.preventDefault();
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
                      <span className="text-md font-bold text-gray-900">
                        ₹{price}
                      </span>

                      {originalPrice > price && (
                        <span className="text-gray-400 line-through text-xs">
                          ₹{originalPrice}
                        </span>
                      )}

                      {offPercent > 0 && (
                        <span className="text-green-600 text-xs font-bold">
                          ({offPercent}% OFF)
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {displayedProducts.length < filteredProducts.length && (
            <div
              ref={observerTarget}
              className="h-20 flex justify-center items-center w-full mt-4"
            >
              <Loader2 className="w-6 h-6 animate-spin text-gray-400" />
            </div>
          )}
        </div>
      )}

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
              className="absolute top-3 right-3 z-10 bg-white/80 rounded-full p-1 hover:bg-gray-100"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
            <div className="p-8 text-center">
              <h2 className="text-xl font-bold mb-4">Login to continue</h2>
              <p className="mb-4 text-gray-600 text-sm">
                Please enter your phone number to add items to your wishlist.
              </p>
              <input
                className="w-full border p-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                type="tel"
              />
              <button
                onClick={handleLogin}
                className="w-full bg-yellow-400 py-2 rounded font-bold hover:bg-yellow-500 transition-colors"
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
