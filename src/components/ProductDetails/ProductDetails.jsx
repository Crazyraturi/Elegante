import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../../../src/context/CartContext";
import { WishlistContext } from "@/context/WishlistContext";
import { useAuth } from "@/context/AuthContext";
import { toast } from "sonner";
import {
  Heart,
  ShoppingCart,
  Wallet,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import RecentlyViewed from "../Home/RecentlyViewed";
import FeaturesSection from "../ProductDetails/FeaturesSection";
import Loader from "../common/Loader";

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

function ComboSelector({ product, addToCart, navigate }) {
  const comboCountMatch = product.title.match(/Pick Any (\d+)/i);
  const comboCount = comboCountMatch ? parseInt(comboCountMatch[1], 10) : 4;
  const initialSelections = Array.from({ length: comboCount }, (_, i) => ({
    color: "",
    size: "",
    productId: product._id,
  }));

  const [selections, setSelections] = useState(initialSelections);
  const allColors = product.variants.map((v) => v.color);

  const uniqueSizes = [
    ...new Set(product.variants.flatMap((v) => v.sizes.map((s) => s.size))),
  ].sort((a, b) => {
    const order = ["S", "M", "L", "XL", "XXL", "XXXL"];
    const indexA = order.indexOf(a.toUpperCase());
    const indexB = order.indexOf(b.toUpperCase());
    if (indexA !== -1 && indexB !== -1) return indexA - indexB;
    return a.localeCompare(b);
  });

  const handleChange = (index, field, value) => {
    setSelections((prev) =>
      prev.map((item, i) => (i === index ? { ...item, [field]: value } : item))
    );
  };

  const isComboValid = selections.every((sel) => sel.color && sel.size);

  const handleAddToCartCombo = (shouldRedirect = false) => {
    if (!isComboValid) {
      toast.error("Please select a Color and Size for all items in the combo.");
      return;
    }

    const priceData = product.variants[0]?.price || {};
    const totalDiscountedPrice = priceData.discounted;
    const totalOriginalPrice = priceData.original;
    const pricePerItem = totalDiscountedPrice / comboCount;
    const originalPricePerItem = totalOriginalPrice / comboCount;
    const comboItems = selections.map((selection, index) => {
      const variantImage = product.images.preview;
      const uniqueId = `${selection.productId}-${selection.color}-${selection.size}-${index}`;

      return {
        id: uniqueId,
        productId: selection.productId,
        title: `${product.title} - Item ${index + 1} (${selection.color}, ${
          selection.size
        })`,
        price: pricePerItem,
        originalPrice: originalPricePerItem,
        image: variantImage,
        color: selection.color,
        size: selection.size,
        isComboItem: true,
        parentComboId: product._id,
      };
    });

    comboItems.forEach((item) => addToCart(item));

    if (shouldRedirect) {
      navigate("/cart");
    } else {
      toast.success("Combo added to cart");
    }
  };

  const itemNumbers = Array.from({ length: comboCount }, (_, i) => i + 1);

  return (
    <div className="p-4 border-2 rounded-xl border-dashed border-gray-300 bg-gray-50 mb-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">
          Select Your {comboCount} Items
        </h2>
        <button className="text-blue-600 hover:text-blue-700 flex items-center gap-1 text-sm">
          Size Guide
          <span className="text-lg">›</span>
        </button>
      </div>

      <div className="space-y-4 mb-6">
        {itemNumbers.map((num, index) => (
          <div
            key={index}
            className="grid grid-cols-2 gap-4 border-b pb-4 last:border-b-0 last:pb-0"
          >
            <h3 className="col-span-2 text-md font-medium text-gray-700">
              Item {num}
            </h3>
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">
                Color
              </label>
              <div className="relative">
                <select
                  value={selections[index].color}
                  onChange={(e) => handleChange(index, "color", e.target.value)}
                  className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg appearance-none cursor-pointer text-sm"
                >
                  <option value="">Select Color</option>
                  {allColors.map((color) => (
                    <option key={color} value={color}>
                      {color}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">
                Size
              </label>
              <div className="relative">
                <select
                  value={selections[index].size}
                  onChange={(e) => handleChange(index, "size", e.target.value)}
                  className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg appearance-none cursor-pointer text-sm"
                >
                  <option value="">Select Size</option>
                  {uniqueSizes.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => handleAddToCartCombo(false)}
          disabled={!isComboValid}
          className={`flex-1 text-white py-3 font-semibold rounded-lg transition ${
            !isComboValid
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#212121] hover:bg-black"
          }`}
        >
          <ShoppingCart className="inline w-5 h-5 mr-2" />
          {`ADD ${comboCount} ITEMS`}
        </button>

        <button
          onClick={() => handleAddToCartCombo(true)}
          disabled={!isComboValid}
          className={`flex-1 text-[#212121] py-3 font-semibold rounded-lg transition ${
            !isComboValid
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#ffdd00] hover:bg-[#e6c700]"
          }`}
        >
          BUY NOW
        </button>
      </div>
    </div>
  );
}

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const { addToWishlist, removeFromWishlist, isInWishlist } =
    useContext(WishlistContext);

  const { isAuthenticated } = useAuth();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [pincode, setPincode] = useState("");
  const [openSection, setOpenSection] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const toggle = (key) => {
    setOpenSection(openSection === key ? null : key);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://beyoung-backend.onrender.com/api/v1/product/${id}`
        );
        const json = await res.json();

        if (json.success && json.data) {
          const productData = json.data;
          setProduct(productData);

          if (
            productData.mainCategory !== "Combos" &&
            productData.variants?.length > 0
          ) {
            const defaultVariant = productData.variants[0];
            setSelectedColor(defaultVariant.color);
            setSelectedSize(""); // Force size selection
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

  if (loading)
    return (
      <div className="h-screen flex justify-center items-center">
        <Loader />
      </div>
    );

  if (!product)
    return (
      <div className="h-screen flex justify-center items-center">
        Product not found
      </div>
    );

  const isComboProduct = product.mainCategory === "Combos";
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

  const isSizeSelected = selectedSize !== "";
  const isSelectedSizeInStock =
    availableSizes.find((s) => s.size === selectedSize)?.stock > 0;
  const isAvailable = isSizeSelected && isSelectedSizeInStock;

  const selectedVariantId =
    availableSizes.find((s) => s.size === selectedSize)?._id?.$oid ||
    `${id}-${selectedColor}-${selectedSize}`;

  const isWished = product ? isInWishlist(product._id) : false;

  const wishlistProductData = {
    id: product._id,
    name: product.title || product.name,
    price: priceData.discounted || 0,
    originalPrice: priceData.original || 0,
    offPercent: priceData.offPercent || 0,
    category: product.subCategory,
    image: product.images.preview,
    slug: product.slug || product._id,
  };

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
    setPhoneNumber("");
  };

  const handleWishlistClick = () => {
    if (isAuthenticated) {
      if (isWished) {
        removeFromWishlist(product._id);
        toast.info("Removed from Wishlist");
      } else {
        addToWishlist(product);
        toast.success("Added to Wishlist");
      }
    } else {
      setShowLoginModal(true);
      toast.warning("Login First to add to wishlist");
    }
  };

  const handleAddToCart = (shouldRedirect = false) => {
    if (!selectedColor) {
      toast.error("Please select a color.");
      return;
    }
    if (!selectedSize) {
      toast.error("Please select a size.");
      return;
    }
    if (!isSelectedSizeInStock) {
      toast.error("The selected size is out of stock.");
      return;
    }

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

    if (shouldRedirect) {
      navigate("/cart");
    } else {
      setShowPopup(true);
      toast.success("Product added to cart");
      setTimeout(() => setShowPopup(false), 3000);
    }
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
              <button
                onClick={handleWishlistClick}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow hover:shadow-lg transition-all z-10"
              >
                <Heart
                  className={`w-5 h-5 transition-colors ${
                    isWished ? "text-red-500 fill-red-500" : "text-gray-700"
                  }`}
                />
              </button>
              <img
                src={imageList[selectedImageIndex]}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
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

            <div className="mt-6 mb-6 p-2 border-2 rounded-xl border-gray-200 bg-[#ECF2FD]">
              <div className="mb-2 pl-2 pr-2 flex items-center justify-between">
                <div className="flex items-baseline-start gap-1">
                  <img
                    src="https://res.cloudinary.com/dj9tpadhk/image/upload/v1764929180/offer_pop_oigfkq.svg"
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

            <div className="mt-6 mb-2 p-3 rounded-xl flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/dj9tpadhk/image/upload/v1764930452/PDI_lnw33r.svg"
                className="w-full h-auto object-contain"
              />
            </div>

            {isComboProduct ? (
              <ComboSelector
                product={product}
                addToCart={addToCart}
                navigate={navigate}
              />
            ) : (
              <>
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
                          setSelectedSize("");
                          setSelectedImageIndex(0);
                        }}
                        className={`w-10 h-10 rounded-full border-2 ${
                          selectedColor === variant.color
                            ? "border-black"
                            : "border-gray-300"
                        }`}
                        style={{ backgroundColor: variant.color.toLowerCase() }}
                      ></button>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <label className="text-sm font-medium mb-2 block">
                    Size:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {availableSizes.map((sizeObj) => (
                      <button
                        key={sizeObj._id?.$oid || sizeObj.size}
                        onClick={() => setSelectedSize(sizeObj.size)}
                        disabled={sizeObj.stock <= 0}
                        className={`px-6 py-2 border rounded transition-all ${
                          selectedSize === sizeObj.size
                            ? "border-black bg-black text-white"
                            : "border-gray-300"
                        } ${
                          sizeObj.stock <= 0
                            ? "opacity-50 cursor-not-allowed line-through"
                            : ""
                        }`}
                      >
                        {sizeObj.size}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 mb-6">
                  <button
                    onClick={() => handleAddToCart(false)}
                    className={`flex-1 text-white py-3 font-semibold rounded-lg transition ${
                      !isAvailable
                        ? "bg-gray-400"
                        : "bg-[#212121] hover:bg-black"
                    }`}
                  >
                    <ShoppingCart className="inline w-5 h-5 mr-2" />
                    {isAvailable ? "ADD TO CART" : "SELECT SIZE"}
                  </button>

                  <button
                    onClick={() => handleAddToCart(true)}
                    className="flex-1 bg-[#ffdd00] text-[#212121] py-3 font-semibold rounded-lg hover:bg-[#e6c700] transition"
                  >
                    BUY NOW
                  </button>
                </div>
              </>
            )}

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
                    src="https://res.cloudinary.com/dj9tpadhk/image/upload/v1764928987/FreeShipping_keskkg.svg"
                    className="h-8 w-8"
                    alt="Free Shipping"
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

            <div className="mt-5">
              <img
                src="https://res.cloudinary.com/dj9tpadhk/image/upload/v1764930503/Reward_k4wnz0.jpg"
                alt="Reward"
              />
            </div>

            <div className="mt-10">
              <h2 className="text-xl font-bold mb-4">Product Details</h2>
              {/* Sections for Spec, Desc, Policy, Market, Reviews */}
              {["spec", "desc", "policy", "market", "reviews"].map(
                (section) => (
                  <div key={section} className="border-b py-4">
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => toggle(section)}
                    >
                      <h3 className="text-lg capitalize">
                        {section === "spec"
                          ? "Specifications"
                          : section === "desc"
                          ? "Description"
                          : section === "policy"
                          ? "Returns & Refund"
                          : section === "market"
                          ? "Marketed By"
                          : "Ratings & Reviews"}
                      </h3>
                      {openSection === section ? (
                        <ChevronUp />
                      ) : (
                        <ChevronDown />
                      )}
                    </div>
                    {openSection === section && (
                      <div className="border-t pt-5 mt-4 text-sm text-gray-600">
                        {section === "spec" &&
                          "Product specifications details..."}
                        {section === "desc" && product.description}
                        {section === "policy" && "Return policy details..."}
                        {section === "market" && "Manufacturer details..."}
                        {section === "reviews" && "Rating: 4.8 | 336 ratings"}
                      </div>
                    )}
                  </div>
                )
              )}
            </div>
            <div className="h-40 lg:h-96"></div>
          </div>
        </div>
        <div className="w-full border-t border-gray-300 my-4"></div>
        <FeaturesSection />
        <div className="w-full border-t font-bold border-gray-300 my-2"></div>
        <RecentlyViewed />
      </div>
    </div>
  );
}
