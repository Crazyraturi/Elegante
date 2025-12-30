import React, { useEffect, useState, useRef, useContext } from "react";
// import { Link } from "react-router-dom";
// import { Heart } from "lucide-react";
// import { toast } from "sonner";

import ProductSkeletonCard from "../common/ProductSkeletonCard";
import Loader from "../common/Loader";
import ProductCard from "../ProductListing/ProductCard";

// import { WishlistContext } from "@/context/WishlistContext";
// import { useAuth } from "@/context/AuthContext";

const NewArrival = () => {
  const [activeTab, setActiveTab] = useState("viewAll");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(12);

  const observerTarget = useRef(null);

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
        setProducts(shuffleArray(rawProducts));
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((item) => {
    const subCat = item.subCategory?.toLowerCase() || "";
    const specType = item.specificType?.toLowerCase() || "";

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

  const displayedProducts = filteredProducts.slice(0, visibleCount);

  useEffect(() => {
    setVisibleCount(12);
  }, [activeTab]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => prev + 8);
        }
      },
      { threshold: 1.0 }
    );

    if (observerTarget.current) observer.observe(observerTarget.current);

    return () => {
      if (observerTarget.current) observer.unobserve(observerTarget.current);
    };
  }, [filteredProducts]);

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
      <div className="mb-8 flex flex-col justify-center items-center gap-2 text-center">
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
        <div className="max-w-7xl mx-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <ProductSkeletonCard key={i} />
            ))}
          </div>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayedProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>

          {displayedProducts.length < filteredProducts.length && (
            <div
              ref={observerTarget}
              className="h-20 flex justify-center items-center w-full mt-4"
            >
              <Loader className="w-6 h-6 text-gray-400" />
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default NewArrival;
