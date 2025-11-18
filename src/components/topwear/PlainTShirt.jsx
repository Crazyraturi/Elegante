import React, { useState, useEffect } from "react";
import {
  Search,
  ShoppingCart,
  Heart,
  User,
  Menu,
  X,
  ChevronDown,
  Filter,
  Star,
  ArrowUpDown,
} from "lucide-react";

// --- Mock Data ---
const PRODUCTS = [
  {
    id: 1,
    name: "Matte Black Plain T-shirt",
    price: 499,
    originalPrice: 999,
    color: "Black",
    size: "M",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&q=80&w=500",
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Mustard Yellow Plain T-shirt",
    price: 399,
    originalPrice: 799,
    color: "Yellow",
    size: "L",
    rating: 4.2,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=500",
    badge: "Hot",
  },
  {
    id: 3,
    name: "Classic White Plain T-shirt",
    price: 449,
    originalPrice: 899,
    color: "White",
    size: "S",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&q=80&w=500",
    badge: "",
  },
  {
    id: 4,
    name: "Navy Blue Plain T-shirt",
    price: 599,
    originalPrice: 1199,
    color: "Blue",
    size: "XL",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=500",
    badge: "New",
  },
  {
    id: 5,
    name: "Olive Green Plain T-shirt",
    price: 499,
    originalPrice: 999,
    color: "Green",
    size: "M",
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1503341455253-b2e72333dbdb?auto=format&fit=crop&q=80&w=500",
    badge: "",
  },
  {
    id: 6,
    name: "Maroon Plain T-shirt",
    price: 349,
    originalPrice: 699,
    color: "Red",
    size: "L",
    rating: 4.0,
    image:
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=500",
    badge: "Sale",
  },
  {
    id: 7,
    name: "Slate Grey Plain T-shirt",
    price: 549,
    originalPrice: 1099,
    color: "Grey",
    size: "M",
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1618354691438-25bc04584c23?auto=format&fit=crop&q=80&w=500",
    badge: "",
  },
  {
    id: 8,
    name: "Sky Blue Plain T-shirt",
    price: 429,
    originalPrice: 859,
    color: "Blue",
    size: "S",
    rating: 4.1,
    image:
      "https://images.unsplash.com/photo-1578932750294-f5075e85f44a?auto=format&fit=crop&q=80&w=500",
    badge: "",
  },
];

const FILTERS = {
  colors: ["Black", "White", "Yellow", "Blue", "Green", "Red", "Grey"],
  sizes: ["S", "M", "L", "XL", "XXL"],
};

const App = () => {
  const [products, setProducts] = useState(PRODUCTS);
  const [filteredProducts, setFilteredProducts] = useState(PRODUCTS);
  const [selectedFilters, setSelectedFilters] = useState({
    color: [],
    size: [],
  });
  const [sortBy, setSortBy] = useState("popular");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  // --- Filter & Sort Logic ---
  useEffect(() => {
    let result = [...products];

    // Apply Color Filter
    if (selectedFilters.color.length > 0) {
      result = result.filter((p) => selectedFilters.color.includes(p.color));
    }

    // Apply Size Filter
    if (selectedFilters.size.length > 0) {
      result = result.filter((p) => selectedFilters.size.includes(p.size));
    }

    // Apply Sorting
    if (sortBy === "priceLow") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "priceHigh") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "popular") {
      result.sort((a, b) => b.rating - a.rating); // Simple rating sort for demo
    }

    setFilteredProducts(result);
  }, [selectedFilters, sortBy, products]);

  const toggleFilter = (type, value) => {
    setSelectedFilters((prev) => {
      const current = prev[type];
      const updated = current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value];
      return { ...prev, [type]: updated };
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* --- Page Content --- */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Breadcrumbs & Header */}
        <div className="mb-6">
          <p className="text-xs text-gray-500 mb-2">
            Home / Men Clothing /{" "}
            <span className="text-black font-semibold">Plain T-Shirts</span>
          </p>
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            Plain T-Shirts For Men{" "}
            <span className="text-gray-400 text-lg font-normal">
              ({filteredProducts.length} Products)
            </span>
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* --- Sidebar Filters (Desktop) --- */}
          <aside className="hidden lg:block w-64 shrink-0 space-y-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-lg">FILTERS</h2>
              <span
                className="text-xs text-yellow-600 cursor-pointer"
                onClick={() => setSelectedFilters({ color: [], size: [] })}
              >
                CLEAR ALL
              </span>
            </div>

            {/* Color Filter */}
            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-semibold mb-3 text-sm uppercase tracking-wider">
                Color
              </h3>
              <div className="space-y-2">
                {FILTERS.colors.map((color) => (
                  <label
                    key={color}
                    className="flex items-center space-x-3 cursor-pointer group"
                  >
                    <div
                      className={`w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center ${
                        selectedFilters.color.includes(color)
                          ? "bg-black border-black"
                          : "group-hover:border-black"
                      }`}
                    >
                      {selectedFilters.color.includes(color) && (
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      )}
                    </div>
                    <input
                      type="checkbox"
                      className="hidden"
                      checked={selectedFilters.color.includes(color)}
                      onChange={() => toggleFilter("color", color)}
                    />
                    <span className="text-sm text-gray-600 group-hover:text-black">
                      {color}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Size Filter */}
            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-semibold mb-3 text-sm uppercase tracking-wider">
                Size
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {FILTERS.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => toggleFilter("size", size)}
                    className={`py-2 text-sm border rounded ${
                      selectedFilters.size.includes(size)
                        ? "border-black bg-black text-white"
                        : "border-gray-200 hover:border-black"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* --- Mobile Filter Drawer Overlay --- */}
          {isMobileFilterOpen && (
            <div className="fixed inset-0 z-50 bg-black bg-opacity-50 lg:hidden flex justify-end">
              <div className="w-4/5 bg-white h-full p-6 shadow-xl overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold">Filters</h2>
                  <button onClick={() => setIsMobileFilterOpen(false)}>
                    <X />
                  </button>
                </div>
                {/* Mobile Color Filter */}
                <div className="mb-6">
                  <h3 className="font-bold mb-2">Color</h3>
                  <div className="flex flex-wrap gap-2">
                    {FILTERS.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => toggleFilter("color", color)}
                        className={`px-3 py-1 border rounded-full text-sm ${
                          selectedFilters.color.includes(color)
                            ? "bg-yellow-400 border-yellow-400 text-black font-bold"
                            : "border-gray-300"
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="w-full bg-black text-white py-3 font-bold uppercase tracking-widest mt-8"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          )}

          {/* --- Main Product Grid Area --- */}
          <div className="flex-1">
            {/* Sorting Toolbar */}
            <div className="flex justify-between items-center mb-6 border border-gray-200 p-3 rounded-sm bg-white">
              <button
                className="lg:hidden flex items-center gap-2 text-sm font-bold uppercase"
                onClick={() => setIsMobileFilterOpen(true)}
              >
                <Filter className="w-4 h-4" /> Filter
              </button>

              <div className="hidden lg:block text-sm text-gray-500">
                Showing {filteredProducts.length} of {PRODUCTS.length} products
              </div>

              <div className="flex items-center gap-2 ml-auto">
                <span className="text-sm text-gray-500 hidden sm:inline">
                  Sort By:
                </span>
                <div className="relative group">
                  <button className="flex items-center gap-1 text-sm font-bold cursor-pointer">
                    {sortBy === "popular"
                      ? "Popularity"
                      : sortBy === "priceLow"
                      ? "Price: Low to High"
                      : "Price: High to Low"}{" "}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {/* Dropdown */}
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-100 shadow-lg rounded-md hidden group-hover:block z-10">
                    <button
                      onClick={() => setSortBy("popular")}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50"
                    >
                      Popularity
                    </button>
                    <button
                      onClick={() => setSortBy("priceLow")}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50"
                    >
                      Price: Low to High
                    </button>
                    <button
                      onClick={() => setSortBy("priceHigh")}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50"
                    >
                      Price: High to Low
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  setCartCount={setCartCount}
                />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <h3 className="text-xl font-bold text-gray-400">
                  No products found matching your filters.
                </h3>
                <button
                  onClick={() => setSelectedFilters({ color: [], size: [] })}
                  className="mt-4 text-yellow-600 underline"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

// --- Product Card Component ---
const ProductCard = ({ product, setCartCount }) => {
  const [isHovered, setIsHovered] = useState(false);

  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <div
      className="group relative flex flex-col bg-white border border-transparent hover:shadow-lg hover:border-gray-200 transition-all duration-300 rounded-md overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-3/4 overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-2 left-2 bg-yellow-400 text-xs font-bold px-2 py-1 text-black uppercase tracking-wider shadow-sm">
            {product.badge}
          </div>
        )}

        {/* Wishlist Icon */}
        <button className="absolute top-2 right-2 p-2 bg-white/80 rounded-full text-gray-500 hover:text-red-500 hover:bg-white transition-colors">
          <Heart className="w-4 h-4" />
        </button>

        {/* Size Overlay (Desktop) */}
        <div
          className={`absolute bottom-0 left-0 right-0 bg-white/95 p-3 transform transition-transform duration-300 ${
            isHovered ? "translate-y-0" : "translate-y-full"
          } hidden lg:block`}
        >
          <p className="text-xs font-bold text-center mb-2 text-gray-500">
            SELECT SIZE
          </p>
          <div className="flex justify-center gap-2">
            {["S", "M", "L", "XL"].map((s) => (
              <button
                key={s}
                className="w-8 h-8 border border-gray-300 hover:border-black text-xs flex items-center justify-center rounded-sm transition-colors hover:bg-gray-50"
              >
                {s}
              </button>
            ))}
          </div>
          <button
            className="w-full mt-3 bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-xs py-2 uppercase tracking-wider transition-colors"
            onClick={() => setCartCount((c) => c + 1)}
          >
            Add To Cart
          </button>
        </div>
      </div>

      {/* Details */}
      <div className="p-3 flex flex-col flex-1">
        <h3 className="text-sm text-gray-700 font-medium mb-1 truncate">
          {product.name}
        </h3>
        <div className="flex items-center gap-1 mb-2">
          <span className="text-xs text-gray-500 bg-gray-100 px-1 py-0.5 rounded flex items-center gap-1">
            {product.rating}{" "}
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
          </span>
          <span className="text-xs text-gray-400">(2.5k)</span>
        </div>

        <div className="mt-auto flex items-baseline gap-2">
          <span className="text-lg font-bold text-black">₹{product.price}</span>
          <span className="text-xs text-gray-400 line-through">
            ₹{product.originalPrice}
          </span>
          <span className="text-xs font-bold text-green-600">
            ({discount}% OFF)
          </span>
        </div>
      </div>

      {/* Mobile Add Button */}
      <div className="lg:hidden px-3 pb-3">
        <button
          className="w-full border border-gray-300 py-1.5 text-xs font-bold uppercase rounded-sm"
          onClick={() => setCartCount((c) => c + 1)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default App;
