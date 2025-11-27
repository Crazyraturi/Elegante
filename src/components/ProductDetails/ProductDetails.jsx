import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../../../src/context/CartContext";
import {
  Heart,
  ShoppingCart,
  Wallet,
  ChevronDown,
  ChevronUp,
  CheckCircle, // Added for the success pop-up icon
} from "lucide-react";

// --- Asset Imports (Assumed Paths) ---
import FreeShipping from "../../assets/FreeShipping.svg";
import offer_pop from "../../assets/offer_pop.svg";
import PDI from "../../assets/PDI.svg";
import Reward from "../../assets/Reward.jpg";
import RecentlyViewed from "../Home/RecentlyViewed";
import FeaturesSection from "../ProductDetails/FeaturesSection";

const StarIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="0"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, cartItems } = useContext(CartContext); // Added cartItems for potential badge context

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [pincode, setPincode] = useState("");
  const [openSection, setOpenSection] = useState(null);
  const [showPopup, setShowPopup] = useState(false); // NEW: State for the success pop-up

  const toggle = (key) => {
    setOpenSection(openSection === key ? null : key);
  };

  // --- Product Fetching Logic ---
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

          if (productData.variants?.length > 0) {
            const defaultVariant = productData.variants[0];
            setSelectedColor(defaultVariant.color);

            if (defaultVariant.sizes?.length > 0) {
              setSelectedSize(defaultVariant.sizes[0].size);
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

  // --- Helper variables for rendering ---
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

  const rawGallery = product.images?.gallery || [];
  const validGalleryImages = rawGallery
    .map((item) => item.file)
    .filter((url) => url !== null);

  const imageList = [product.images?.preview, ...validGalleryImages].filter(
    Boolean
  );

  const activeVariant =
    product.variants.find((v) => v.color === selectedColor) ||
    product.variants[0];

  const priceData = activeVariant?.price || {};
  const availableSizes = activeVariant?.sizes || [];

  // Check if a size is selected and available
  const isSizeSelected = selectedSize !== "";
  const isSelectedSizeInStock =
    availableSizes.find((s) => s.size === selectedSize)?.stock > 0;
  const isAvailable = isSizeSelected && isSelectedSizeInStock;

  // Find the unique ID for the specific variant/size combination (Optional, but good practice)
  const selectedVariantId =
    availableSizes.find((s) => s.size === selectedSize)?._id?.$oid ||
    `${id}-${selectedColor}-${selectedSize}`;

  // --- ADD TO CART HANDLER FUNCTION ---
  const handleAddToCart = () => {
    // 1. Validation check
    if (!selectedColor) {
      alert("Please select a color.");
      return;
    }
    if (!selectedSize) {
      alert("Please select a size.");
      return;
    }
    if (!isAvailable) {
      alert("The selected size is out of stock.");
      return;
    }

    // 2. Add to Cart action
    addToCart({
      id: selectedVariantId,
      productId: product._id,
      title: product.title,
      price: priceData.discounted,
      originalPrice: priceData.original,
      image: imageList[selectedImageIndex] || product.images.preview,
      color: selectedColor,
      size: selectedSize,
    });

    // 3. Show Pop-up and hide it after 3 seconds
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="text-sm text-gray-500">
          HOME / {product.mainCategory?.toUpperCase()} /{" "}
          {product.subCategory?.toUpperCase()} / {product.title?.toUpperCase()}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* LEFT IMAGES */}
          <div className="flex gap-4 lg:sticky lg:top-30 lg:self-start">
            <div className="flex flex-col gap-2">
              {imageList.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`w-20 h-34 cursor-pointer border ${
                    selectedImageIndex === idx
                      ? "border-black"
                      : "border-gray-200"
                  }`}
                >
                  <img src={img} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>

            <div className="flex-1 h-[650px] relative bg-gray-100">
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

          {/* RIGHT SIDE */}
          <div>
            {/* Rating */}
            <div className="bg-white p-2 sm:p-4">
              <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-2">
                <div className="inline-flex items-center border border-gray-300 rounded-full py-1.5 px-3 bg-white shadow-sm">
                  <span className="text-xl font-bold text-gray-800">4.7</span>
                  <StarIcon className="w-5 h-5 mx-1 text-yellow-500 fill-yellow-500" />
                  <span className="text-base text-gray-500 ml-1">288</span>
                </div>

                <div className="text-2xl font-normal tracking-wide">
                  <span className="text-gray-500">everyday</span>
                  <span className="text-yellow-600 font-bold">basics</span>
                </div>
              </div>
            </div>

            <h1 className="text-2xl font-semibold mb-2">{product.title}</h1>
            <p className="text-gray-500 text-sm mb-4">{product.subCategory}</p>

            {/* Price */}
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

            {/* Offer */}
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

            {/* Payment */}
            <div className="mt-6 mb-2 p-3 rounded-xl flex items-center justify-center">
              <img src={PDI} className="w-full h-auto object-contain" />
            </div>

            {/* Colors */}
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
                    key={variant._id.$oid}
                    onClick={() => {
                      setSelectedColor(variant.color);
                      setSelectedSize(
                        variant.sizes?.length > 0 ? variant.sizes[0].size : ""
                      );
                      setSelectedImageIndex(0);
                    }}
                    className={`w-10 h-10 rounded-full border-2 ${
                      selectedColor === variant.color
                        ? "border-black ring-2 ring-offset-1 ring-gray-300"
                        : "border-gray-300"
                    }`}
                    style={{ backgroundColor: variant.color.toLowerCase() }}
                  ></button>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="mb-6">
              <label className="text-sm font-medium mb-2 block">Size:</label>
              <div className="flex flex-wrap gap-2">
                {availableSizes.length > 0 ? (
                  availableSizes.map((sizeObj) => (
                    <button
                      key={sizeObj._id?.$oid || sizeObj.size}
                      onClick={() => setSelectedSize(sizeObj.size)}
                      disabled={sizeObj.stock <= 0}
                      className={`px-6 py-2 border rounded transition-all ${
                        selectedSize === sizeObj.size
                          ? "border-black bg-black text-white"
                          : "border-gray-300 hover:border-black"
                      } ${
                        sizeObj.stock <= 0
                          ? "opacity-50 cursor-not-allowed bg-gray-100 line-through"
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
              <button
                onClick={handleAddToCart}
                disabled={!isAvailable}
                className={`flex-1 text-white py-3 font-semibold rounded-lg transition ${
                  !isAvailable
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#212121] hover:bg-black"
                }`}
              >
                <ShoppingCart className="inline w-5 h-5 mr-2" />
                {isAvailable ? "ADD TO CART" : "SELECT SIZE"}
              </button>

              <button className="flex-1 bg-[#ffdd00] text-[#212121] py-3 font-semibold rounded-lg hover:bg-[#e6c700] transition">
                BUY NOW
              </button>
            </div>

            {/* Delivery */}
            <div className="mt-6 p-4 rounded-lg bg-gray-50">
              <div className="font-medium mb-2">Check Delivery Date</div>
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

              <div className="flex items-center gap-6 mt-3 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <img
                    src={FreeShipping}
                    className="h-8 w-8"
                    alt="Free Shipping Icon"
                  />
                  <span>Free Shipping Available</span>
                </div>

                <div className="flex items-center gap-2">
                  <Wallet size={18} />
                  <span className="font-semibold">
                    Cash on Delivery Available
                  </span>
                </div>
              </div>
            </div>

            {/* Reward */}
            <div className="mt-5">
              <img src={Reward} alt="Reward Image" />
            </div>

            {/* PRODUCT DETAILS Sections (omitted for brevity) */}
            {/* ... (Sections 1-5 here) ... */}
            <div className="mt-10">
              <h2 className="text-xl font-bold mb-4">Product Details</h2>

              {/* SECTION 1: Specifications */}
              <div className="border-b py-4">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggle("spec")}
                >
                  <h3 className=" text-lg">Specifications</h3>
                  {openSection === "spec" ? <ChevronUp /> : <ChevronDown />}
                </div>

                {openSection === "spec" && (
                  <div className="border-t pt-5 mt-4">
                    {Array.isArray(product.specifications) &&
                    product.specifications.filter(Boolean).length > 0 ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-500">
                        {product.specifications
                          .filter(Boolean)
                          .map((spec, index) => (
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
                      <p className="text-gray-500">
                        No specifications available
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* SECTION 2: Description */}
              <div className="border-b py-4">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggle("desc")}
                >
                  <h3 className=" text-lg">Description</h3>
                  {openSection === "desc" ? <ChevronUp /> : <ChevronDown />}
                </div>

                {openSection === "desc" && (
                  <div className="border-t pt-5 mt-4 text-sm text-gray-500 leading-relaxed">
                    {product.description}
                  </div>
                )}
              </div>

              {/* SECTION 3: Returns, Exchange, & Refund Policy */}
              <div className="border-b py-4">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggle("policy")}
                >
                  <h3 className=" text-lg">
                    Returns, Exchange, & Refund Policy
                  </h3>
                  {openSection === "policy" ? <ChevronUp /> : <ChevronDown />}
                </div>

                {openSection === "policy" && (
                  <div className="border-t pt-5 mt-4 text-sm text-gray-700 leading-relaxed space-y-2">
                    <ul className="list-disc ml-5 space-y-2">
                      <li>7 days easy returns and exchange.</li>
                      <li>
                        Hassle-free return & exchange policy for 7 days from the
                        date of delivery.
                      </li>
                      <li>Free shipping on all orders.</li>
                      <li>
                        Choose prepaid instead of COD to avoid INR 100 handling
                        fee.
                      </li>
                      <li>
                        Refunds for prepaid orders go back to original payment.
                        COD refunds go to Beyoung Wallet.
                      </li>
                      <li>
                        Record an unpacking video — required for damage/missing
                        claims.
                      </li>
                      <li>
                        Exchange allowed only once per product, subject to
                        stock.
                      </li>
                      <li>
                        Order changes allowed before dispatch via
                        WhatsApp/email.
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              {/* SECTION 4: Marketed By */}
              <div className="border-b py-4">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggle("market")}
                >
                  <h3 className=" text-lg">Marketed By</h3>
                  {openSection === "market" ? <ChevronUp /> : <ChevronDown />}
                </div>

                {openSection === "market" && (
                  <div className="border-t pt-5 mt-4 text-sm text-gray-700">
                    <p className="mb-2">
                      <strong>Country of Origin:</strong> India
                    </p>
                    <p className="mb-2">
                      <strong>Manufactured & Sold By:</strong> <br />
                      Beyoung Folks Pvt. Ltd. <br />
                      Eklingpura Chouraha, Ahmedabad Main Road (NH 8 – Near
                      Mahadev Hotel) <br />
                      Udaipur, 313002
                    </p>
                    <p>
                      <strong>Email:</strong> support@beyoung.in
                    </p>
                  </div>
                )}
              </div>

              {/* SECTION 5: Ratings & Reviews */}
              <div className="border-b py-4" id="ratings-reviews-anchor">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggle("reviews")}
                >
                  <h3 className=" text-lg">Ratings & Reviews</h3>
                  {openSection === "reviews" ? <ChevronUp /> : <ChevronDown />}
                </div>

                {openSection === "reviews" && (
                  <div className="border-t pt-5 mt-4 text-sm text-gray-700">
                    <p className="text-xl font-semibold">⭐ 4.8</p>
                    <p>336 ratings • 84 reviews</p>
                  </div>
                )}
              </div>
            </div>

            <div className="h-40 lg:h-96"></div>
          </div>
        </div>
        <div className="w-full border-t border-gray-300 my-4"></div>
        <FeaturesSection />

        <div className="w-full border-t font-bold border-gray-300 my-2"></div>

        <RecentlyViewed />
      </div>

      {/* --- NEW: Product Added Pop-up --- */}
      <div
        className={`fixed bottom-4 right-4 p-4 rounded-lg shadow-xl transition-all duration-300 transform z-9999 
          ${
            showPopup
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          } 
          bg-green-600 text-white flex items-center gap-3`}
      >
        <CheckCircle className="w-6 h-6" />
        <div>
          <p className="font-bold text-lg">Product Added!</p>
          <p className="text-sm">
            {product.title} has been added to your cart.
          </p>
        </div>
        <button
          onClick={() => navigate("/cart")}
          className="ml-4 bg-white text-green-600 font-semibold px-3 py-1 rounded hover:bg-gray-100"
        >
          View Cart ({cartItems.length})
        </button>
      </div>
    </div>
  );
}
