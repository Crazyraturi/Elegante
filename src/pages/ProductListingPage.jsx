import React, { useEffect, useState, useMemo, useCallback } from "react";
import { useSearchParams, Link, useLocation } from "react-router-dom";
import axios from "axios";
import {
  ChevronDown,
  ChevronUp,
  Heart,
  X,
  Loader2,
  SlidersHorizontal,
} from "lucide-react";

// *** FIX APPLIED: Only CATEGORY_DATA is destructured as it is the only export. ***
// The price data will be accessed via CATEGORY_DATA['plain-t-shirts'].price_table_data
import { CATEGORY_DATA } from "../pages/Detailofmegamenudata/Tshirtdata.js";

const API_BASE_URL = "https://beyoung-backend.onrender.com/api/v1/product";

// --- PriceTableCard Component (NEW) ---
// Note: If you want to use the last_updated_date from CATEGORY_DATA,
// pass it as a prop from ProductListingPage and update the const lastUpdated here.
const PriceTableCard = ({ data }) => {
  if (!data || data.length === 0) return null;

  const lastUpdated = "Nov 28, 2025"; // Hardcoded from image

  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow-md p-5 mb-6">
      <h3 className="text-xl font-bold mb-4 text-gray-900">
        Buy Plain Tshirts for Men at Best Price
      </h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-4 py-3 text-left text-sm font-semibold text-gray-700"
              >
                Plain Tshirts for Men
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-right text-sm font-semibold text-gray-700 w-2/4"
              >
                Best Price
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {data.map((item, index) => (
              <tr
                key={index}
                className="hover:bg-yellow-50/50 transition-colors"
              >
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                  <span className="text-blue-600 hover:text-blue-800 cursor-pointer">
                    {item.product}
                  </span>
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-right text-sm font-medium text-gray-900">
                  {item.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
  );
};
// --- End of PriceTableCard Component ---

// --- BreadcrumbNav Component (No changes) ---
const BreadcrumbNav = ({ mainCategory, subCategory }) => (
  <div className="max-w-7xl mx-auto px-4 py-3">
    <div className="text-sm text-gray-500">
      <Link to="/" className="hover:text-black transition">
        HOME
      </Link>
      {/* Main Category */}
      {mainCategory && (
        <>
          <span className="mx-1">/</span>
          <Link
            to={`/${mainCategory.toLowerCase()}`}
            className="hover:text-black transition"
          >
            {mainCategory.toUpperCase()}
          </Link>
        </>
      )}
      {/* Sub Category (Current Page) */}
      {subCategory && (
        <>
          <span className="mx-1">/</span>
          <span className="font-semibold text-gray-700">
            {subCategory.toUpperCase()}
          </span>
        </>
      )}
    </div>
  </div>
);

// --- TopButtons Component (No changes) ---
const TopButtons = ({ buttons }) => {
  if (!buttons || buttons.length === 0) return null;

  const location = useLocation();
  const currentPath = location.pathname;

  const hasSpecificMatch = buttons.some(
    (btn) => btn.label !== "View All" && currentPath === btn.url
  );

  return (
    <div className="flex flex-wrap ml-3 gap-8 mb-8">
      {buttons.map((btn) => {
        let isActive = false;

        if (btn.label === "View All") {
          isActive = !hasSpecificMatch || currentPath === btn.url;
        } else {
          isActive = currentPath === btn.url;
        }

        return (
          <Link
            key={btn.label}
            to={btn.url}
            className={`
              px-8 py-3 text-2xl font-medium rounded-full transition-colors whitespace-nowrap
              ${
                isActive
                  ? "bg-black text-yellow-300 border border-black hover:bg-gray-800"
                  : "bg-white text-black border border-gray-300 hover:border-black"
              }
            `}
          >
            {btn.label}
          </Link>
        );
      })}
    </div>
  );
};

// --- A. FAQSection Component (No changes) ---
const FAQSection = ({ faqItems }) => {
  if (!faqItems || faqItems.length === 0) return null;
  return (
    <section className="category-faq-section mt-8">
      <h2 className="text-2xl font-bold mb-4">Plain T shirts | FAQs</h2>
      <div className="faq-list space-y-2">
        {faqItems.map((item, index) => (
          <details
            className="faq-accordion-item border-b border-gray-200"
            key={index}
          >
            <summary className="faq-question cursor-pointer py-2 flex justify-between items-center font-medium hover:text-black">
              {item.q}
              <ChevronDown size={18} className="text-gray-500" />
            </summary>
            <div className="faq-answer-content pb-3 text-sm text-gray-700 leading-relaxed">
              <p>{item.a}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
};

// --- C. FilterSidebar Component (No changes) ---
const FilterSidebar = ({ uniqueFilters }) => {
  return (
    <aside className="filter-sidebar bg-white p-4 space-y-3 border border-gray-400 rounded-lg shadow-sm">
      <div className="flex items-center space-x-2 text-base font-semibold border-b pb-3 mb-1">
        <SlidersHorizontal size={16} className="text-gray-400" />
        <span>Filter</span>
      </div>
      {uniqueFilters.map((filterGroup) => (
        <details key={filterGroup.id} className="filter-group border-b pb-1">
          <summary className="font-semibold cursor-pointer py-2 flex justify-between items-center">
            {filterGroup.label}
            <ChevronDown size={16} className="text-gray-500" />
          </summary>
          <div className="filter-options-content mt-1 max-h-40 overflow-y-auto space-y-0.5 text-sm">
            {filterGroup.options.map((option) => (
              <div key={option} className="filter-option">
                <label className="flex items-center space-x-2 cursor-pointer hover:text-gray-500">
                  <input
                    type="checkbox"
                    name={filterGroup.id}
                    value={option}
                    readOnly
                    className="rounded text-gray-600"
                  />
                  <span>{option}</span>
                </label>
              </div>
            ))}
          </div>
        </details>
      ))}
      <button
        onClick={() => console.log("Filtering disabled for now.")}
        className="w-full py-2 mt-4 text-sm font-semibold text-white bg-gray-400 rounded hover:bg-black transition hidden"
      >
        Clear All Filters
      </button>
    </aside>
  );
};

// --- D. CategoryDescription Component (MODIFIED for structure) ---
const CategoryDescription = ({
  longDescription,
  faqs,
  priceTableData, // <-- Added prop
}) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  if (!longDescription) return null;
  const paragraphs = longDescription.split("</p>");
  const initialContent =
    paragraphs.slice(0, 2).join("</p>") + (paragraphs.length > 2 ? "</p>" : "");

  return (
    <div className="mt-12 pt-6 border-t border-gray-300">
      <h2 className="text-2xl font-bold mb-4">Detailed Information</h2>

      <div className="flex gap-6">
        {/* Left Side: Long Description / SEO Text (3/4 width on large screens) */}
        <div className="lg:w-3/4 w-full">
          <div className="text-sm text-gray-700 leading-relaxed overflow-hidden description-area">
            <div
              dangerouslySetInnerHTML={{
                __html: showFullDescription ? longDescription : initialContent,
              }}
              className="description-content space-y-4"
            />
          </div>
          {paragraphs.length > 2 && (
            <button
              onClick={() => setShowFullDescription(!showFullDescription)}
              className="mt-4 text-blue-600 font-semibold hover:text-blue-800 transition text-sm"
            >
              {showFullDescription ? "See Less" : "Read More"}
            </button>
          )}
        </div>

        {/* Right Side: Price Table Card (1/4 width, visible on large screens) */}
        <div className="lg:w-2/4 min-w-[280px] hidden lg:block">
          <PriceTableCard data={priceTableData} />
        </div>
      </div>

      <hr className="my-8" />
      <FAQSection faqItems={faqs} />
    </div>
  );
};

// --- E. Product Card Component (No changes) ---
const ProductCard = ({ product, handleHeartClick }) => {
  const gallery = product.images?.gallery || [];
  const previewImage = product.images?.preview;

  const frontViewObj = gallery.find((item) => item.view === "Front View");
  const hoverViewObj = gallery.find((item) => item.view === "Hover View");

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
      to={`/product-details/${product._id}`}
      key={product._id}
      className="bg-white rounded-lg overflow-hidden block group"
    >
      <div className="relative w-full overflow-hidden rounded-xl aspect-3/4">
        {/* Main Image */}
        <img
          src={mainImage}
          alt={product.title || product.name}
          className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
        />
        {/* Hover Image */}
        <img
          src={hoverImage}
          alt={product.title || product.name}
          className="w-full h-full object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
        {/* Wishlist Button */}
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
        {/* Product Title */}
        <h3 className="text-gray-900 font-semibold text-base mb-1 line-clamp-1">
          {product.title || product.name}
        </h3>
        {/* Sub Category */}
        <p className="text-gray-500 text-xs mb-2 capitalize">
          {product.subCategory}
        </p>
        {/* Price Section */}
        <div className="flex items-center gap-2">
          <span className="text-md font-bold text-gray-900">₹{price}</span>
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
};

// --- F. SortDropdown Component (No changes) ---
const SORT_OPTIONS = [
  { label: "Recommended", value: "Recommended" },
  { label: "Newly Launched", value: "Newly Launched" },
  { label: "Trending", value: "Trending" },
  { label: "Price: Low To High", value: "price_asc" },
  { label: "Price: High To Low", value: "price_desc" },
];

const SortDropdown = ({ selectedSort, onSortChange }) => {
  return (
    <div className="flex items-center space-x-2 text-sm">
      <span className="text-gray-600 font-medium hidden">Sort By</span>
      {/* Container for the select input, styled to look like the image's dropdown */}
      <div className="relative">
        <select
          value={selectedSort}
          onChange={(e) => onSortChange(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 pr-8 text-gray-800 appearance-none focus:outline-none focus:ring-1 focus:ring-black cursor-pointer bg-white"
        >
          {SORT_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {/* Dropdown icon placed absolutely inside the container */}
        <ChevronDown
          size={16}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500"
        />
      </div>
    </div>
  );
};

// ===========================================================================
// === 2. MAIN PRODUCT LISTING PAGE COMPONENT (FIXED) ========================
// ===========================================================================

export default function ProductListingPage() {
  const [searchParams] = useSearchParams();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // === Sorting State ===

  const [sortOption, setSortOption] = useState("Recommended"); // Default sort // === Popup State and Handlers from NewArrival ===

  const [showPopup, setShowPopup] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleHeartClick = () => setShowPopup(true);
  const handleSortChange = (newSort) => setSortOption(newSort);

  const handleClosePopup = () => {
    setShowPopup(false);
    setPhoneNumber("");
  };

  const handleLogin = () => {
    console.log("Login with phone:", phoneNumber);
    handleClosePopup();
  }; // ================================================
  const apiCategoryValue = "T-shirts";
  const apiCategoryKey = "subCategory";
  const internalDataSlug = "plain-t-shirts";

  const pageContent = useMemo(() => {
    // Access all category data via the slug
    return CATEGORY_DATA[internalDataSlug];
  }, [internalDataSlug]);

  // *** RETRIEVE price_table_data and last_updated_date from pageContent ***
  const finalPriceTableData = pageContent?.price_table_data || [];

  // === UPDATED: Fetch function to include sorting ===
  const fetchFilteredProducts = async () => {
    setLoading(true);
    setError(null);

    const params = Object.fromEntries(searchParams.entries());
    const filterParams = new URLSearchParams(); // 1. Set the ONLY necessary filter for BASE LOAD

    filterParams.append(apiCategoryKey, apiCategoryValue); // subCategory=T-shirts // 2. Add remaining URL params

    Object.entries(params).forEach(([key, value]) => {
      if (key !== apiCategoryKey) {
        filterParams.append(key, value);
      }
    }); // 3. Add Sorting Parameter

    if (sortOption && sortOption !== "Recommended") {
      if (sortOption === "price_asc") {
        filterParams.append("sort", "price");
        filterParams.append("order", "asc");
      } else if (sortOption === "price_desc") {
        filterParams.append("sort", "price");
        filterParams.append("order", "desc");
      } else if (sortOption === "Newly Launched") {
        filterParams.append("sort", "createdAt");
        filterParams.append("order", "desc");
      } else if (sortOption === "Trending") {
        filterParams.append("sort", "popularity");
        filterParams.append("order", "desc");
      }
    }

    const queryString = filterParams.toString();
    const finalApiUrl = `${API_BASE_URL}?${queryString}`;

    try {
      const response = await axios.get(finalApiUrl);
      setProducts(response.data.data);
    } catch (err) {
      console.error("Error fetching filtered products:", err);
      setError("Failed to fetch products. Check API configuration.");
      setProducts([]);
    } finally {
      setLoading(false);
    }
  }; // ⭐️ FIX: Scroll to Top on Page Load and URL Change ⭐️

  const location = useLocation();
  useEffect(() => {
    // This ensures the page always starts at the top when the URL changes (e.g., navigating to another filter/category)
    window.scrollTo(0, 0);
  }, [location.pathname]); // Depend on pathname, so it runs on navigation // === UPDATED useEffect dependency to include sortOption ===

  useEffect(() => {
    fetchFilteredProducts();
  }, [searchParams, sortOption]);

  if (loading) {
    return (
      <div className="p-8 text-center text-xl font-medium">
        <Loader2 className="w-8 h-8 mx-auto animate-spin text-gray-500 mb-4" />
        Loading products...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 text-center text-red-600 font-bold border border-red-300 bg-red-50 rounded-lg">
        🚨 {error}
      </div>
    );
  }

  const pageTitle = pageContent ? pageContent.title : "All Products";
  const shortDescription = pageContent ? pageContent.description_short : ""; // --- Inferred Breadcrumb Data (Using "TOPWEAR" as requested) ---

  const inferredMainCategory = "TOPWEAR";
  const inferredSubCategory = pageContent?.title || apiCategoryValue;

  return (
    <div className="bg-white min-h-screen">
      {/* --- BREADCRUMB NAVIGATION (HOME / TOPWEAR / T-SHIRTS) --- */}
      <BreadcrumbNav
        mainCategory={inferredMainCategory}
        subCategory={inferredSubCategory}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <hr className="my-2" />
        {/* --- 1. Top Navigation Buttons (LOADED DYNAMICALLY from pageContent) --- */}
        {pageContent && <TopButtons buttons={pageContent.buttons} />}
        {/* --- 2. Main Content Area (Relative positioning for sticky sidebar) --- */}
        <div className="flex gap-6 relative">
          {/* --- LEFT SIDEBAR: DYNAMIC FILTERS (Sticky, 1/4 width) --- */}
          {pageContent && (
            <div className="w-1/4 min-w-60 hidden lg:block sticky top-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
              <FilterSidebar uniqueFilters={pageContent.filters} />
            </div>
          )}
          {/* --- RIGHT SIDE: PRODUCT LISTING & DETAILS (3/4 width) --- */}
          <div className={pageContent ? "lg:w-3/4 w-full" : "w-full"}>
            {/* --- Title, Description --- */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2 uppercase">{pageTitle}</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {shortDescription}
              </p>
            </div>
            {/* --- Sort and Count Header --- */}
            <div className="flex justify-between items-center py-4 border-t border-b border-gray-200 mb-6">
              <p className="text-gray-600 text-sm">
                {/* Found **{products.length}** items matching your selection. */}
              </p>
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium text-gray-600">
                  Sort By
                </span>
                <SortDropdown
                  selectedSort={sortOption}
                  onSortChange={handleSortChange}
                />
              </div>
            </div>
            {/* --- Product Grid (3 Columns on Large Screens) --- */}
            {products.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 **lg:grid-cols-3** gap-6">
                {products.map((product) => (
                  <ProductCard
                    key={product._id}
                    product={product}
                    handleHeartClick={handleHeartClick}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-10 text-gray-500 border rounded-lg bg-gray-50">
                🤷‍♂️ No products found for the current selection.
              </div>
            )}
          </div>
        </div>
        {/* --- BOTTOM SEO CONTENT / FAQs (MODIFIED TO DISPLAY PRICE TABLE) --- */}
        {pageContent && (
          <CategoryDescription
            longDescription={pageContent.description_long}
            faqs={pageContent.faq}
            priceTableData={finalPriceTableData} // <-- Correctly passes the data retrieved from pageContent
          />
        )}
      </div>
      {/* --- Login Popup (Modal) from NewArrival --- */}
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
    </div>
  );
}
