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

// Assuming the correct path to your category data file
import { CATEGORY_DATA } from "../pages/Detailofmegamenudata/Tshirtdata.js";

const API_BASE_URL = "https://beyoung-backend.onrender.com/api/v1/product";

// === A. HELPER COMPONENTS ===================================================

const PriceTableCard = ({ data }) => {
  if (!data || data.length === 0) return null;

  const tableTitle =
    data.length > 0 && data[0].product.includes("Plain")
      ? "Buy Plain Tshirts for Men at Best Price"
      : "Buy Tshirts for Men at Best Price";

  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow-md p-5 mb-6">
      <h3 className="text-xl font-bold mb-4 text-gray-900">{tableTitle}</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-4 py-3 text-left text-sm font-semibold text-gray-700"
              >
                Product
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

// --- BreadcrumbNav Component ---
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

// --- TopButtons Component ---
const TopButtons = ({ buttons }) => {
  if (!buttons || buttons.length === 0) return null;

  const location = useLocation();
  const currentPath = location.pathname + location.search; // Use path + query for better matching

  const enableScrolling = buttons.length > 4;

  const containerClasses = `flex ml-3 gap-3 mb-8 ${
    enableScrolling ? "overflow-x-auto whitespace-nowrap py-2" : "flex-wrap"
  }`;

  return (
    <div
      className={containerClasses}
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      {/* Added style for hiding scrollbar in some browsers */}
      <style>{`.${
        containerClasses.split(" ")[0]
      }.overflow-x-auto::-webkit-scrollbar { display: none; }`}</style>

      {buttons.map((btn) => {
        // Match logic: Check if the button URL exactly matches the current path/query
        const isActive = currentPath.includes(btn.url);

        return (
          <Link
            key={btn.label}
            to={btn.url}
            className={`
              px-6 py-2 text-2xl font-medium rounded-full transition-colors shrink-0
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

// --- FAQSection Component ---
const FAQSection = ({ faqItems }) => {
  if (!faqItems || faqItems.length === 0) return null;
  return (
    <section className="category-faq-section mt-8">
      <h2 className="text-2xl font-bold mb-4">FAQs</h2>
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

// --- FilterSidebar Component ---
const FilterSidebar = ({ uniqueFilters }) => {
  return (
    <aside className="filter-sidebar bg-white p-2 space-y-3 border border-gray-400 rounded-lg shadow-sm">
      <div className="flex items-center space-x-2 text-base font-semibold border-b pb-2 mb-1">
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

// --- CategoryDescription Component ---
const CategoryDescription = ({ longDescription, faqs, priceTableData }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const paragraphs = longDescription ? longDescription.split("</p>") : [];
  const initialContent =
    paragraphs.slice(0, 2).join("</p>") + (paragraphs.length > 2 ? "</p>" : "");

  if (
    !longDescription &&
    (!priceTableData || priceTableData.length === 0) &&
    (!faqs || faqs.length === 0)
  )
    return null;

  return (
    <div className="mt-12 pt-6 border-t border-gray-300">
      <h2 className="text-2xl font-bold mb-4"></h2>
      {/* ⭐️ PriceTableCard on small screens ⭐️ */}
      <div className="lg:hidden w-full mb-6">
        <PriceTableCard data={priceTableData} />
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Side: Long Description / SEO Text (3/4 width on large screens) */}
        <div className="lg:w-3/4 w-full">
          {longDescription && (
            <>
              <div className="text-sm text-gray-700 leading-relaxed overflow-hidden description-area">
                <div
                  dangerouslySetInnerHTML={{
                    __html: showFullDescription
                      ? longDescription
                      : initialContent,
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
            </>
          )}
        </div>

        {/* ⭐️ Price Table Card (Only visible on large screens here) ⭐️ */}
        <div className="lg:w-2/4 min-w-[280px] hidden lg:block ">
          <PriceTableCard data={priceTableData} />
        </div>
      </div>

      <hr className="my-8" />
      <FAQSection faqItems={faqs} />
    </div>
  );
};

// --- Product Card Component (FIXED for all product image URLs) ---
const ProductCard = ({ product, handleHeartClick }) => {
  // --- 1. Primary Image Path Lookups (Check common API fields first) ---

  // 1a. Check for a direct 'preview' link
  let mainImage = product.images?.preview;

  // 1b. Fallback 1: Check for other common image keys on the product root/images object
  if (!mainImage) {
    mainImage = product.mainImage || product.image || product.images?.main;
  }

  // --- 2. Gallery-based Fallbacks (Using the specific gallery logic) ---
  const gallery = product.images?.gallery || [];

  // Find 'Front View' and ensure it has a file link
  const frontViewObj = gallery.find(
    (item) => item.view === "Front View" && item.file
  );
  // Find 'Hover View' and ensure it has a file link
  const hoverViewObj = gallery.find(
    (item) => item.view === "Hover View" && item.file
  );

  // Fallback 2: Use the found 'Front View' file if mainImage is still missing
  if (!mainImage && frontViewObj?.file) {
    mainImage = frontViewObj.file;
  }

  // Fallback 3: Use the first non-null file in the entire gallery
  if (!mainImage && gallery.length > 0) {
    const firstValidFile = gallery.find((item) => item.file)?.file;
    if (firstValidFile) mainImage = firstValidFile;
  }

  // --- 3. Set Hover Image and Final Fallback ---
  // Default hover to the 'Hover View' file, or fall back to mainImage
  let hoverImage = hoverViewObj?.file || mainImage;

  // Final Fallback: If still no image is found, use a placeholder
  if (!mainImage)
    mainImage = "https://via.placeholder.com/300x400?text=No+Image+Found";
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
          loading="lazy"
          className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
        />
        {/* Hover Image */}
        <img
          src={hoverImage}
          alt={product.title || product.name}
          loading="lazy"
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

// --- SortDropdown Component ---
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
        <ChevronDown
          size={16}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500"
        />
      </div>
    </div>
  );
};

// === B. MAIN PRODUCT LISTING PAGE COMPONENT =================================

export default function ProductListingPage() {
  const [searchParams] = useSearchParams();
  const location = useLocation();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortOption, setSortOption] = useState("Recommended");
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
  };

  // Get filter values from URL
  const specificType = searchParams.get("specificType");
  const subCategoryQuery = searchParams.get("subCategory");
  const categoryQuery = searchParams.get("category"); // For major categories like 'Bottomwear'

  // ⭐️ CRITICAL: Determine internalDataSlug dynamically ⭐️
  const internalDataSlug = useMemo(() => {
    // 1. Prioritize specificType for slug
    if (specificType) {
      return specificType.toLowerCase().replace(/ /g, "-");
    }
    // 2. Fallback to subCategory
    if (subCategoryQuery) {
      return subCategoryQuery.toLowerCase().replace(/ /g, "-");
    }
    // 3. Fallback to category (e.g., Topwear/Bottomwear)
    if (categoryQuery) {
      return categoryQuery.toLowerCase().replace(/ /g, "-");
    }
    // 4. Final default (e.g., if navigated to /products with no params)
    return "t-shirts";
  }, [specificType, subCategoryQuery, categoryQuery]);

  // Load the page content based on the determined slug
  const pageContent = useMemo(() => {
    return CATEGORY_DATA[internalDataSlug];
  }, [internalDataSlug]);

  // Handle case where content is not found for the current URL filter
  const isContentNotFound = !pageContent;

  const finalPriceTableData = pageContent?.price_table_data || [];

  // === Fetch function to include dynamic filtering and sorting (FIXED LOGIC) ===
  const fetchFilteredProducts = async () => {
    setLoading(true);
    setError(null);

    // If content is not found, stop loading and return early
    if (isContentNotFound) {
      setLoading(false);
      setError(`Content data not found for category slug: ${internalDataSlug}`);
      setProducts([]);
      return;
    }

    const filterParams = new URLSearchParams();

    // 1. Determine the correct subCategory for the API (CRITICAL FIX)
    let actualSubCategoryValue = subCategoryQuery || "T-shirts";

    // Logic to infer the correct subCategory when only 'specificType' is provided
    if (specificType) {
      const normalizedSpecificType = specificType.toLowerCase();
      
      // MAPPING LOGIC FIX: Ensures Polo T-shirts map to T-shirts 
      // and Shackets map to Shirts, matching the DB
      if (
        normalizedSpecificType.includes("t-shirts") ||
        normalizedSpecificType.includes("polo")
      ) {
        // Based on provided data, Polos live under "T-shirts" in the DB
        actualSubCategoryValue = "T-shirts"; 
      } else if (
        normalizedSpecificType.includes("shirt") ||
        normalizedSpecificType.includes("shacket") // Explicitly check for shacket type
      ) {
        // All Shirts and Shackets live under "Shirts" in the DB
        actualSubCategoryValue = "Shirts";
      } else if (
        normalizedSpecificType.includes("joggers") ||
        normalizedSpecificType.includes("pants") ||
        normalizedSpecificType.includes("trousers") ||
        normalizedSpecificType.includes("shorts")
      ) {
        // Bottomwear items (Defaulting to the most common DB category)
        actualSubCategoryValue = "Bottomwear";
      } else {
        // Default to a sensible value if specificType is vague
        actualSubCategoryValue = "T-shirts";
      }
    }

    // Ensure actualSubCategoryValue is used in the filter
    filterParams.append("subCategory", actualSubCategoryValue);

    // 2. Add specific product type filter
    if (specificType) {
      filterParams.append("specificType", specificType);
    }

    // 3. Add remaining URL params for general filtering (Color, Size, etc.)
    for (const [key, value] of searchParams.entries()) {
      if (key !== "subCategory" && key !== "specificType") {
        filterParams.append(key, value);
      }
    }

    // 4. Add Sorting Parameter
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
    console.log("Final API URL:", finalApiUrl); // Debugging line

    try {
      const response = await axios.get(finalApiUrl);
      setProducts(response.data.data);
    } catch (err) {
      console.error("Error fetching filtered products:", err);
      setError(
        "Failed to fetch products. Check API configuration or URL filters."
      );
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  // ⭐️ Scroll to Top on Page Load and URL Change ⭐️
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname, internalDataSlug]);

  // === useEffect dependency to run fetch logic ===
  useEffect(() => {
    fetchFilteredProducts();
  }, [searchParams, sortOption, internalDataSlug]);

  if (loading) {
    return (
      <div className="p-8 text-center text-xl font-medium">
        <Loader2 className="w-8 h-8 mx-auto animate-spin text-gray-500 mb-4" />
        Loading products...
      </div>
    );
  }

  if (error || isContentNotFound) {
    return (
      <div className="p-8 text-center text-red-600 font-bold border border-red-300 bg-red-50 rounded-lg">
        🚨
        {error ||
          `Content not found for type: "${
            specificType || subCategoryQuery || categoryQuery || "Default"
          }".`}
      </div>
    );
  }

  // Content is guaranteed to be available here due to the check above
  const pageTitle = pageContent.title;
  const shortDescription = pageContent.description_short;

  // Inferred Breadcrumb Categories
  const inferredMainCategory = "TOPWEAR"; // Assuming this page is always under Topwear
  const inferredSubCategory = pageContent.title;

  return (
    <div className="bg-white min-h-screen">
      {/* --- BREADCRUMB NAVIGATION --- */}
      <BreadcrumbNav
        mainCategory={inferredMainCategory}
        subCategory={inferredSubCategory}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <hr className="my-2" />
        {/* --- 1. Top Navigation Buttons --- */}
        <TopButtons buttons={pageContent.buttons} />
        {/* --- 2. Main Content Area --- */}
        <div className="flex gap-6 relative">
          {/* --- LEFT SIDEBAR: DYNAMIC FILTERS --- */}
          <div className="w-1/4 min-w-60 hidden lg:block sticky top-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <FilterSidebar uniqueFilters={pageContent.filters} />
          </div>
          {/* --- RIGHT SIDE: PRODUCT LISTING & DETAILS --- */}
          <div className="lg:w-3/4 w-full">
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
                Showing {products.length} Products
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
            {/* --- Product Grid --- */}
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
        {/* --- BOTTOM SEO CONTENT / FAQs (Includes the price table visibility fix) --- */}
        <CategoryDescription
          longDescription={pageContent.description_long}
          faqs={pageContent.faq}
          priceTableData={finalPriceTableData}
        />
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