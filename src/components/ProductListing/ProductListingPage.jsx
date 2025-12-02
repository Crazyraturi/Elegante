import { useEffect, useState, useMemo } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import axios from "axios";
import { Loader2, X } from "lucide-react";
import BreadcrumbNav from "./BreadcrumbNav";
import TopButtons from "./TopButtons";
import FilterSidebar from "./FilterSidebar";
import CategoryDescription from "./CategoryDescription";
import ProductCard from "./ProductCard";
import SortDropdown from "./SortDropdown";

import { CATEGORY_DATA } from "./Tshirtdata.js";

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
  const [sortOption, setSortOption] = useState("Recommended");
  const [showPopup, setShowPopup] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({});

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

  const specificType = searchParams.get("specificType");
  const subCategoryQuery = searchParams.get("subCategory");
  const categoryQuery = searchParams.get("category");

  const internalDataSlug = useMemo(() => {
    if (specificType) return specificType.toLowerCase().replace(/ /g, "-");
    if (subCategoryQuery)
      return subCategoryQuery.toLowerCase().replace(/ /g, "-");
    if (categoryQuery) return categoryQuery.toLowerCase().replace(/ /g, "-");
    return "t-shirts";
  }, [specificType, subCategoryQuery, categoryQuery]);

  const pageContent = useMemo(() => {
    return CATEGORY_DATA[internalDataSlug];
  }, [internalDataSlug]);

  const isContentNotFound = !pageContent;
  const finalPriceTableData = pageContent?.price_table_data || [];

  useEffect(() => {
    setSelectedFilters({});
  }, [internalDataSlug]);

  const fetchFilteredProducts = async () => {
    setLoading(true);
    setError(null);

    if (isContentNotFound) {
      setLoading(false);
      setError(`Content data not found for category slug: ${internalDataSlug}`);
      setProducts([]);
      return;
    }

    const filterParams = new URLSearchParams();
    let actualSubCategoryValue = subCategoryQuery || "T-shirts";

    if (specificType) {
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
      } else if (
        normalizedSpecificType.includes("joggers") ||
        normalizedSpecificType.includes("pants") ||
        normalizedSpecificType.includes("trousers") ||
        normalizedSpecificType.includes("shorts")
      ) {
        actualSubCategoryValue = "Bottomwear";
      } else {
        actualSubCategoryValue = "T-shirts";
      }
    }

    filterParams.append("subCategory", actualSubCategoryValue);

    if (specificType) {
      filterParams.append("specificType", specificType);
    }

    for (const [key, value] of searchParams.entries()) {
      if (key !== "subCategory" && key !== "specificType") {
        filterParams.append(key, value);
      }
    }

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
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname, internalDataSlug]);

  useEffect(() => {
    fetchFilteredProducts();
  }, [searchParams, sortOption, internalDataSlug]);

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
        <Loader2 className="w-8 h-8 mx-auto animate-spin text-gray-500 mb-4" />
        Loading products...
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
  const shortDescription = pageContent.description_short;
  const inferredMainCategory = "TOPWEAR";
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
                {filteredProducts.map((product) => (
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
        <CategoryDescription
          longDescription={pageContent.description_long}
          faqs={pageContent.faq}
          priceTableData={finalPriceTableData}
        />
      </div>

      {showPopup && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4"
          onClick={handleClosePopup}
        ></div>
      )}
    </div>
  );
}
