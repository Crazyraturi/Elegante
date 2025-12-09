import { useEffect, useState, useMemo, useCallback, useContext } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import axios from "axios";
import { X } from "lucide-react";
import BreadcrumbNav from "./BreadcrumbNav";
import TopButtons from "./TopButtons";
import FilterSidebar from "./FilterSidebar";
import CategoryDescription from "./CategoryDescription";
import ProductCard from "./ProductCard";
import SortDropdown from "./SortDropdown";
import { CATEGORY_DATA as TOPWEAR_DATA } from "./Tshirtdata.js";
import { BOTTOMWEAR_DATA } from "./Bottomwear.js";
import { Combos_DATA } from "./Combos.js";
import { WinterWear_DATA } from "./WinterWear.js";
import { NewArrival_DATA } from "./NewArrival.js";
import { WishlistContext } from "@/context/WishlistContext";
import { useAuth } from "@/context/AuthContext";
import Loader from "../common/Loader";
import { toast } from "sonner";

const API_BASE_URL = "https://beyoung-backend.onrender.com/api/v1/product";

const getNestedValue = (obj, path) => {
  const keys = path.split(".");
  let current = obj;

  if (path.startsWith("variants.")) {
    const variantKey = keys.slice(1).join(".");
    if (Array.isArray(obj.variants)) {
      return obj.variants
        .map((v) => {
          if (variantKey === "sizes.size" && Array.isArray(v.sizes)) {
            return v.sizes.map((s) => s.size);
          }
          return keys.slice(1).reduce((o, k) => (o || {})[k], v);
        })
        .flat();
    }
  }

  for (let key of keys) {
    if (current === null || current === undefined) return undefined;
    current = current[key];
  }
  return current;
};

export default function ProductListingPage() {
  const [searchParams] = useSearchParams();

  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToWishlist, wishlistItems, removeFromWishlist } =
    useContext(WishlistContext);
  const { isAuthenticated } = useAuth();
  const [sortOption, setSortOption] = useState("Recommended");
  const [showPopup, setShowPopup] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({});

  const handleHeartClick = (productData, isWished) => {
    if (!isAuthenticated) {
      setShowPopup(true);
      toast.warning("Login First to add to wishlist");
      return;
    }
    if (isWished) {
      removeFromWishlist(productData.id);
      toast.info("Removed from Wishlist");
    } else {
      addToWishlist(productData);
      toast.success("Added to Wishlist!");
    }
  };

  const handleSortChange = (newSort) => setSortOption(newSort);

  const handleClosePopup = () => {
    setShowPopup(false);
    setPhoneNumber("");
  };

  const handleLogin = () => {
    console.log("Login with phone:", phoneNumber);
    handleClosePopup();
  };

  const specificType = searchParams.get("specificType");
  const subCategoryQuery = searchParams.get("subCategory");
  const categoryQuery = searchParams.get("category");
  const productTypeQuery = searchParams.get("productType");

  const internalDataSlug = useMemo(() => {
    if (specificType) return specificType.toLowerCase().replace(/ /g, "-");
    if (subCategoryQuery)
      return subCategoryQuery.toLowerCase().replace(/ /g, "-");
    if (categoryQuery) return categoryQuery.toLowerCase().replace(/ /g, "-");
    return "t-shirts";
  }, [specificType, subCategoryQuery, categoryQuery]); // 2. --- MERGE TOPWEAR AND BOTTOMWEAR DATA ---

  const pageContent = useMemo(() => {
    const ALL_CATEGORY_DATA = {
      ...TOPWEAR_DATA,
      ...BOTTOMWEAR_DATA,
      ...Combos_DATA,
      ...WinterWear_DATA,
      ...NewArrival_DATA,
    };

    const normalizedSlug = internalDataSlug.replace(/-/g, "_"); // Check for "New Arrivals" specifically, which comes as `category=new arrivals`

    if (normalizedSlug === "new_arrivals") {
      return ALL_CATEGORY_DATA["new_arrival"];
    } // Check for "Winterwear" specifically, which comes as `category=winterwear` or `specificType=winter_wear` (from TopButtons)

    if (normalizedSlug === "winter_wear" || normalizedSlug === "winterwear") {
      return ALL_CATEGORY_DATA["winter_wear"];
    } // 🚨 FIX 1: Map the general 'women' slug (from category=Women in URL) to the specific view-all content key.

    if (internalDataSlug === "women") {
      return ALL_CATEGORY_DATA["women-clothing-view-all"];
    } // Use the normalized slug for all other lookups (e.g., 'plain_t-shirts' or 'women-topwear')

    return (
      ALL_CATEGORY_DATA[normalizedSlug] || ALL_CATEGORY_DATA[internalDataSlug]
    );
  }, [internalDataSlug]); // ---------------------------------------------
  const isContentNotFound = !pageContent;

  const finalPriceTableData = pageContent?.price_table_data || {};

  useEffect(() => {
    setSelectedFilters({});
  }, [internalDataSlug]); // 🚨 FIX: Wrap fetchFilteredProducts in useCallback and list dependencies

  const fetchFilteredProducts = useCallback(async () => {
    setLoading(true);
    setError(null);

    if (isContentNotFound) {
      setLoading(false);
      setError(`Content data not found for category slug: ${internalDataSlug}`);
      setProducts([]);
      return;
    }

    const filterParams = new URLSearchParams();

    if (
      internalDataSlug.startsWith("women-") ||
      categoryQuery?.toLowerCase() === "women"
    ) {
      filterParams.append("gender", "Women");
      filterParams.append("subCategory", "Shop For Women"); // 🚨 FIX 2: Re-add restrictive specificType filter for *specific* Women's pages // to segregate topwear and bottomwear products.

      if (internalDataSlug.includes("topwear")) {
        filterParams.append("specificType", "Topwear");
      } else if (internalDataSlug.includes("bottomwear")) {
        filterParams.append("specificType", "Bottomwear");
      } // NOTE: If the slug is just "women" (from categoryQuery), we only apply the gender and subCategory filters, // correctly achieving the *unrestricted* "View All" product list.
    } else if (specificType) {
      if (specificType.toLowerCase() === "new_arrival") {
        const fifteenDaysAgo = new Date(
          Date.now() - 15 * 24 * 60 * 60 * 1000
        ).toISOString();
        filterParams.append("createdAt_gte", fifteenDaysAgo);
        filterParams.append("mainCategory", "New Arrivals");
        if (productTypeQuery) {
          filterParams.append("subCategory", productTypeQuery);
        }
      } else {
        let actualSubCategoryValue;
        const normalizedSpecificType = specificType.toLowerCase();

        if (
          normalizedSpecificType.includes("t-shirts") ||
          normalizedSpecificType.includes("polo")
        ) {
          actualSubCategoryValue = "T-shirts";
        } else if (
          normalizedSpecificType.includes("shirt") ||
          normalizedSpecificType.includes("shacket")
        ) {
          actualSubCategoryValue = "Shirts";
        } else {
          actualSubCategoryValue = "T-shirts";
        }

        filterParams.append("subCategory", actualSubCategoryValue);
        filterParams.append("specificType", specificType);
      }
    } // 3. Logic for subCategory queries (Bottomwear specific items)
    else if (subCategoryQuery) {
      filterParams.append("subCategory", subCategoryQuery);
    } // 4. Logic for broad category queries (like category=Bottomwear, category=Combos, category=New Arrivals)
    else if (categoryQuery) {
      const normalizedCategory = categoryQuery.toLowerCase();

      if (normalizedCategory === "bottomwear") {
        filterParams.append("mainCategory", "Bottomwear");
      } else if (
        normalizedCategory === "combos" || // 🚨 ADDED LOGIC: Handle "New Arrivals" and "Winterwear" category queries
        normalizedCategory === "new arrivals" ||
        normalizedCategory === "winterwear"
      ) {
        // FIX: Use 'mainCategory' instead of 'category' to align with the product data structure
        filterParams.append("mainCategory", categoryQuery); // 🚨 NEW LOGIC: Apply 15-day filter for main New Arrivals category link // Temporarily set to 30 days to bypass the time zone error

        const thirtyDaysAgo = new Date(
          Date.now() - 30 * 24 * 60 * 60 * 1000
        ).toISOString();
        filterParams.append("createdAt_gte", thirtyDaysAgo); // The restrictive 'subCategory' filter for Winterwear has been removed.
      } else {
        // Default to Topwear or similar if category is unknown
        filterParams.append("subCategory", "T-shirts");
      }
    } // 5. Fallback
    else {
      filterParams.append("subCategory", "T-shirts");
    } // Append other search params, making sure not to duplicate main filters already set

    for (const [key, value] of searchParams.entries()) {
      // Exclude main category filters already determined above
      if (
        key !== "subCategory" &&
        key !== "specificType" &&
        key !== "category" &&
        key !== "gender" &&
        key !== "mainCategory" &&
        key !== "productType"
      ) {
        filterParams.append(key, value);
      }
    } // ------------------------------------------------------------------ // Sorting Logic (Unchanged)
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
      setError("Failed to fetch products.");
      setProducts([]);
    } finally {
      setLoading(false);
    } // Dependencies for useCallback: every variable used inside the function must be listed here.
  }, [
    isContentNotFound,
    internalDataSlug,
    categoryQuery,
    specificType,
    productTypeQuery,
    sortOption,
    searchParams,
  ]);

  useEffect(() => {
    setSelectedFilters({});
  }, [internalDataSlug]); // 🚨 FIX: The useEffect now depends on the stable fetchFilteredProducts function

  useEffect(() => {
    fetchFilteredProducts();
  }, [fetchFilteredProducts]);

  const handleFilterChange = (filterId, value) => {
    setSelectedFilters((prev) => {
      const current = prev[filterId] || [];
      if (current.includes(value)) {
        const updated = current.filter((item) => item !== value);
        if (updated.length === 0) {
          const { [filterId]: _, ...rest } = prev;
          return rest;
        }
        return { ...prev, [filterId]: updated };
      } else {
        return { ...prev, [filterId]: [...current, value] };
      }
    });
  };

  const filteredProducts = useMemo(() => {
    if (Object.keys(selectedFilters).length === 0) return products;

    return products.filter((product) => {
      return Object.entries(selectedFilters).every(
        ([filterKey, selectedValues]) => {
          if (!selectedValues.length) return true;

          const productValue = getNestedValue(product, filterKey);

          if (Array.isArray(productValue)) {
            return productValue.some((val) =>
              selectedValues.some(
                (sel) => sel.toLowerCase() === String(val).toLowerCase()
              )
            );
          }

          return selectedValues.some(
            (sel) => sel.toLowerCase() === String(productValue).toLowerCase()
          );
        }
      );
    });
  }, [products, selectedFilters]);

  const filterCounts = useMemo(() => {
    if (!pageContent?.filters) return {};
    const counts = {};

    pageContent.filters.forEach((group) => {
      group.options.forEach((option) => {
        counts[`${group.id}-${option}`] = 0;
      });
    });

    const datasetToCount = products;

    datasetToCount.forEach((product) => {
      pageContent.filters.forEach((group) => {
        const productValue = getNestedValue(product, group.id);

        if (Array.isArray(productValue)) {
          productValue.forEach((val) => {
            const matchedOption = group.options.find(
              (opt) => opt.toLowerCase() === String(val).toLowerCase()
            );
            if (matchedOption) {
              counts[`${group.id}-${matchedOption}`]++;
            }
          });
        } else if (productValue) {
          const matchedOption = group.options.find(
            (opt) => opt.toLowerCase() === String(productValue).toLowerCase()
          );
          if (matchedOption) {
            counts[`${group.id}-${matchedOption}`]++;
          }
        }
      });
    });
    return counts;
  }, [products, pageContent]);

  if (loading) {
    return (
      <div className="p-8 text-center text-xl font-medium">
        <Loader />
      </div>
    );
  }

  if (error || isContentNotFound) {
    return (
      <div className="p-8 text-center text-red-600 font-bold border border-red-300 bg-red-50 rounded-lg">
        🚨 {error || "Content not found."}
      </div>
    );
  }

  const pageTitle = pageContent.title;
  const shortDescription = pageContent.description_short; // Inferred category needs to be dynamic for breadcrumb
  const inferredMainCategory = internalDataSlug.startsWith("women-")
    ? "WOMEN"
    : "MEN";
  const inferredSubCategory = pageContent.title;

  return (
    <div className="bg-white min-h-screen">
      <BreadcrumbNav
        mainCategory={inferredMainCategory}
        subCategory={inferredSubCategory}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <hr className="my-2" />
        <TopButtons buttons={pageContent.buttons} />
        <div className="flex gap-6 relative">
          <div className="w-1/4 min-w-60 hidden lg:block sticky top-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <FilterSidebar
              uniqueFilters={pageContent.filters}
              selectedFilters={selectedFilters}
              handleFilterChange={handleFilterChange}
              filterCounts={filterCounts}
            />
          </div>
          <div className="lg:w-3/4 w-full">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2 uppercase">{pageTitle}</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {shortDescription}
              </p>
            </div>
            <div className="flex justify-between items-center py-4 border-t border-b border-gray-200 mb-6">
              <p className="text-gray-600 text-sm">
                Showing {filteredProducts.length} Products
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
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => {
                  const priceInfo = product.variants?.[0]?.price || {};
                  const finalPrice =
                    product.price?.final || priceInfo.discounted || 0;

                  const mainImage =
                    product.images?.preview ||
                    product.image?.[0]?.url ||
                    "https://via.placeholder.com/300x400?text=No+Image";
                  const isWished = wishlistItems.some(
                    (item) => item.id === product._id
                  );
                  const wishlistProductData = {
                    id: product._id,
                    name: product.title || product.name,
                    price: finalPrice,
                    category: product.subCategory,
                    image: mainImage,
                    slug: product.slug,
                  };
                  return (
                    <ProductCard
                      key={product._id}
                      product={product}
                      handleHeartClick={() =>
                        handleHeartClick(wishlistProductData, isWished)
                      }
                      isWished={isWished}
                    />
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-10 text-gray-500 border rounded-lg bg-gray-50">
                No products found for the current selection.
              </div>
            )}
          </div>
        </div>
        <CategoryDescription
          longDescription={pageContent.description_long}
          faqs={pageContent.faq}
          priceTableData={finalPriceTableData}
        />
      </div>
    </div>
  );
}
