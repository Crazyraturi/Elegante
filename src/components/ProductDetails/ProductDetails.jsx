import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Heart, ShoppingCart } from "lucide-react";

// Keep your existing asset imports
import FreeShipping from "../../assets/FreeShipping.svg";
import codPincode from "../../assets/codPincode.svg";
import rewardPoints from "../../assets/pdp-stripes_loyalty.jpg";
import snapmint from "../../assets/snap_logo_green.svg";
import offer_pop from "../../assets/offer_pop.svg";
import RecentlyViewed from "./RecentlyViewed";
import SimilarProducts from "./SimilarProducts";
import FeaturesSection from "./FeaturesSection";

export default function ProductPage() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // UI States
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [pincode, setPincode] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://beyoung-backend.onrender.com/api/product/${id}`
        );
        const json = await res.json();

        if (json.success && json.data) {
          const productData = json.data;
          setProduct(productData);

          // Set defaults based on the first variant found
          if (productData.variants && productData.variants.length > 0) {
            setSelectedColor(productData.variants[0].color);
            // Set default size if available in first variant
            if (productData.variants[0].sizes?.length > 0) {
              setSelectedSize(productData.variants[0].sizes[0].size);
            }
          }
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // --- LOGIC TO HANDLE DATA STRUCTURE ---

  if (loading)
    return (
      <div className="h-screen flex justify-center items-center">
        Loading...
      </div>
    );
  if (!product)
    return (
      <div className="h-screen flex justify-center items-center">
        Product not found
      </div>
    );

  // 1. Process Images: Combine preview + gallery, remove nulls
  const rawGallery = product.images?.gallery || [];
  const validGalleryImages = rawGallery
    .map((item) => item.file) // Extract the url string
    .filter((url) => url !== null); // Remove null entries (like Back View in your json)

  // Create final image list (Preview image first, then gallery)
  const imageList = [product.images?.preview, ...validGalleryImages].filter(
    Boolean
  );

  // 2. Find the Active Variant based on selected Color
  const activeVariant =
    product.variants.find((v) => v.color === selectedColor) ||
    product.variants[0];

  // 3. Get Price and Sizes from the Active Variant
  const priceData = activeVariant?.price || {};
  const availableSizes = activeVariant?.sizes || [];

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="text-sm text-gray-500">
          HOME / {product.mainCategory?.toUpperCase()} /{" "}
          {product.subCategory?.toUpperCase()} / {product.title?.toUpperCase()}
        </div>
        </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* --- LEFT: IMAGE GALLERY --- */}
          <div className="flex gap-4">
            {/* Thumbnails */}
            <div className="flex flex-col gap-2">
              {imageList.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`w-20 h-24 cursor-pointer border ${
                    selectedImageIndex === idx
                      ? "border-black"
                      : "border-gray-200"
                  }`}
                >
                  <img
                    src={img}
                    alt={`View ${idx}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 h-[500px] relative bg-gray-100">
              <button className="absolute top-4 right-4 bg-white rounded-full p-2 shadow z-10">
                <Heart className="w-5 h-5" />
              </button>
              <img
                src={imageList[selectedImageIndex]}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* --- RIGHT: PRODUCT DETAILS --- */}
          <div>
            <h1 className="text-2xl font-semibold mb-2">{product.title}</h1>
            <p className="text-gray-500 text-sm mb-4">{product.subCategory}</p>

            {/* Price Section (Dynamic based on Variant) */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold">
                ₹ {priceData.discounted}
              </span>
              <span className="text-[18px] text-[#A7A7A7] line-through">
                ₹ {priceData.original}
              </span>
              <span className="bg-[#FEE53D] text-[#49431A] text-xs px-2 py-1 rounded font-bold">
                {priceData.offPercent}% OFF
              </span>
            </div>

            {/* Static Offer Section */}
            <div className="mt-6 mb-6 p-2 border-2 rounded-xl border-gray-200 bg-[#ECF2FD]">
              <div className="mb-2 pl-2 pr-2 flex items-center justify-between">
                <div className="flex items-baseline-start gap-1">
                  <img
                    src={offer_pop}
                    className="h-[25px] w-[25px]"
                    alt="offer"
                  />
                  <div className="flex flex-col items-end">
                    <span className="font-semibold text-sm">
                      Get at ₹ {priceData.discounted - 100}
                    </span>
                  </div>
                </div>
                <span className="text-sm font-bold text-green-600">
                  FLAT 10% OFF
                </span>
              </div>
            </div>

            {/* Color Selection */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium">
                  Color:{" "}
                  <span className="text-gray-600 font-bold">
                    {selectedColor}
                  </span>
                </label>
              </div>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant._id}
                    onClick={() => {
                      setSelectedColor(variant.color);
                      // Optional: Reset size when color changes
                      setSelectedSize("");
                    }}
                    className={`w-10 h-10 rounded-full border-2 focus:outline-none ${
                      selectedColor === variant.color
                        ? "border-black ring-2 ring-offset-1 ring-gray-300"
                        : "border-gray-300"
                    }`}
                    style={{ backgroundColor: variant.color.toLowerCase() }}
                    title={variant.color}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <label className="text-sm font-medium mb-2 block">Size:</label>
              <div className="flex flex-wrap gap-2">
                {availableSizes.length > 0 ? (
                  availableSizes.map((sizeObj) => (
                    <button
                      key={sizeObj._id || sizeObj.size}
                      onClick={() => setSelectedSize(sizeObj.size)}
                      disabled={sizeObj.stock === 0}
                      className={`px-6 py-2 border rounded cursor-pointer transition-all ${
                        selectedSize === sizeObj.size
                          ? "border-black bg-black text-white"
                          : "border-gray-300 hover:border-black"
                      } ${
                        sizeObj.stock === 0
                          ? "opacity-50 cursor-not-allowed bg-gray-100"
                          : ""
                      }`}
                    >
                      {sizeObj.size}
                    </button>
                  ))
                ) : (
                  <span className="text-red-500 text-sm">
                    No sizes available for this color
                  </span>
                )}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-2 mb-6">
              <button className="flex-1 bg-[#212121] text-white py-3 font-semibold rounded-lg hover:bg-black transition">
                <ShoppingCart className="inline w-5 h-5 mr-2" />
                ADD TO CART
              </button>
              <button className="flex-1 bg-[#ffdd00] text-[#212121] py-3 font-semibold rounded-lg hover:bg-[#e6c700] transition">
                BUY NOW
              </button>
            </div>

            {/* Specifications Section - FIX APPLIED HERE */}
            <div className="border-t pt-5 mt-6">
              <h3 className="font-semibold mb-3 text-lg">Specifications</h3>

              {/* FIX: Using Array.isArray(product.specifications) for a robust check */}
              {Array.isArray(product.specifications) &&
              product.specifications.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
                  {product.specifications.map((spec, index) => (
                    <div
                      key={index}
                      className="flex justify-between border-b pb-2"
                    >
                      <span className="font-medium">{spec.key}</span>
                      <span>{spec.value}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">No specifications available</p>
              )}
            </div>

            {/* Delivery Check Section */}
            <div className="mt-6 p-4 border rounded-lg bg-gray-50">
              <div className="font-medium mb-2">Check Delivery</div>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter Pincode"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  className="border p-2 rounded w-full"
                />
                <button className="bg-black text-white px-4 rounded">
                  Check
                </button>
              </div>
              <div className="flex items-center gap-2 mt-3 text-sm text-gray-600">
                <img src={FreeShipping} className="h-6 w-6" alt="" />
                <span>Free Shipping Available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Other Sections */}
        <FeaturesSection />
        <RecentlyViewed />
        <SimilarProducts />
      </div>
    </div>
  );
}