import React, { useEffect, useState, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { Heart, X } from "lucide-react";
import Loader from "../common/Loader";
// 🚨 NEW IMPORTS
import { WishlistContext } from "@/context/WishlistContext";
import { useAuth } from "@/context/AuthContext";
import { toast } from "sonner";

const NewArrival = () => {
  const [activeTab, setActiveTab] = useState("viewAll");
  const [showPopup, setShowPopup] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(12);
  const observerTarget = useRef(null);

  // 🚨 CONTEXT CONSUMPTION
  const { addToWishlist, wishlistItems,removeFromWishlist } = useContext(WishlistContext);
  const { isAuthenticated } = useAuth();

  const shuffleArray = (array) => {
    let shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          "https://beyoung-backend.onrender.com/api/v1/product"
        );
        const data = await res.json();
        const rawProducts = data.data || data.products || [];
        const randomProducts = shuffleArray(rawProducts);
        setProducts(randomProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((item) => {
    const subCat = item.subCategory ? item.subCategory.toLowerCase() : "";
    const specType = item.specificType ? item.specificType.toLowerCase() : "";

    switch (activeTab) {
      case "viewAll":
        return true;

      case "polo":
        return specType.includes("polo");

      case "t-shirt":
        return subCat.includes("t-shirt") && !specType.includes("polo");

      case "shirt":
        return subCat.includes("shirt") && !subCat.includes("t-shirt");

      case "trousers":
        return subCat.includes("trouser");

      default:
        return subCat.includes(activeTab.toLowerCase());
    }
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

  // 🚨 MODIFIED: Logic to use Auth and Wishlist contexts
  const handleHeartClick = (productData,isWished) => {
    if (!isAuthenticated){
      setShowPopup(true);
      toast.warning("Login First to add to wishlist")
      return;
    } 

    if (isWished) {
      removeFromWishlist(productData.id);
      toast.info("removed from Wishlist");
    } else {
      addToWishlist(productData);
      toast.success("Added to Wishlist")
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setPhoneNumber("");
  };

 
  const tabButton = (tabValue, label) => (
    <button
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
        activeTab === tabValue
          ? "bg-black text-white shadow-md"
          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
      }`}
      onClick={() => setActiveTab(tabValue)}>
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
          <Loader className="item-center" />
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

              // 🚨 NEW: Calculate isWished status
              const isWished = wishlistItems.some(
                (item) => item.id === product._id
              );

              // 🚨 NEW: Construct streamlined product object for context
              const wishlistProductData = {
                id: product._id,
                name: product.title || product.name,
                price: price,
                category: product.subCategory,
                image: mainImage,
                slug: product.slug,
              };

              return (
                <Link
                  to={`/product/${product._id}`}
                  key={product._id}
                  className="bg-white rounded-lg overflow-hidden block group">
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
                        // 🚨 MODIFIED: Pass the product data to the handler
                        handleHeartClick(wishlistProductData , isWished);
                      }}
                      className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-sm hover:bg-white transition-all z-10"
                      aria-label={
                        isWished ? "Remove from Wishlist" : "Add to Wishlist"
                      }>
                      {/* 🚨 MODIFIED: Dynamic styling for the heart icon */}
                      <Heart
                        className={`w-4 h-4 transition-colors ${
                          isWished
                            ? "text-red-500 fill-red-500"
                            : "text-gray-700 hover:text-red-500 hover:fill-red-500/20"
                        }`}
                      />
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
              className="h-20 flex justify-center items-center w-full mt-4">
              <Loader className="w-6 h-6  text-gray-400" />
            </div>
          )}
        </div>
      )}

       
     
      
    </section>
  );
};

export default NewArrival;
