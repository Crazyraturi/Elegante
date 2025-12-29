import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";

const ProductCard = ({ product }) => {
  // Use the global context
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  // Check if THIS specific product is in the global list
  const isWishlisted = isInWishlist(product._id);

  // --- IMAGE LOGIC (Kept exactly as you had it) ---
  const images = product.images || {};
  const findImageByView = (view) =>
    images.gallery?.find((item) => item.view === view)?.file;

  let mainImage =
    images.preview || images.main || findImageByView("Front View");
  let hoverImage = findImageByView("Hover View");

  if (!mainImage) {
    mainImage = images.gallery?.find((item) => item.file)?.file;
  }
  if (!hoverImage) {
    hoverImage = images.gallery?.find(
      (item) => item.file && item.file !== mainImage
    )?.file;
  }
  if (!hoverImage) {
    hoverImage = mainImage;
  }

  const fallbackUrl = "https://via.placeholder.com/300x400?text=No+Image+Found";
  mainImage = mainImage || fallbackUrl;
  hoverImage = hoverImage || mainImage;

  const firstVariant = product.variants?.[0];
  const priceInfo = firstVariant?.price || {};
  const price = priceInfo.discounted || 0;
  const originalPrice = priceInfo.original || 0;
  const offPercent = priceInfo.offPercent || 0;
  // ------------------------------------------------

  // Handle the Click
  const handleHeartClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (isWishlisted) {
      removeFromWishlist(product._id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <Link
      to={`/product/${product._id}`}
      key={product._id}
      className="bg-white rounded-lg overflow-hidden block group"
    >
      <div className="relative w-full overflow-hidden rounded-xl aspect-3/4">
        {/* Wishlist Button - Now synced globally */}
        <button
          onClick={handleHeartClick}
          className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-sm hover:bg-white transition-all z-10"
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              isWishlisted
                ? "text-red-500 fill-red-500" // Filled Red if synced
                : "text-gray-700 hover:text-red-500 hover:fill-red-500/20"
            }`}
          />
        </button>

        <img
          src={mainImage}
          alt={product.title || product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
        />
        {hoverImage && hoverImage !== mainImage && (
          <img
            src={hoverImage}
            alt={product.title || product.name}
            loading="lazy"
            className="w-full h-full object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
        )}
      </div>
      <div className="pt-4 px-1">
        <h3 className="text-gray-900 font-semibold text-base mb-1 line-clamp-1">
          {product.title || product.name}
        </h3>
        <p className="text-gray-500 text-xs mb-2 capitalize">
          {product.subCategory}
        </p>
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

export default ProductCard;
