import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const ProductCard = ({ product, handleHeartClick }) => {
  let mainImage = product.images?.preview;

  if (!mainImage) {
    mainImage = product.mainImage || product.image || product.images?.main;
  }

  const gallery = product.images?.gallery || [];

  const frontViewObj = gallery.find(
    (item) => item.view === "Front View" && item.file
  );
  const hoverViewObj = gallery.find(
    (item) => item.view === "Hover View" && item.file
  );

  if (!mainImage && frontViewObj?.file) {
    mainImage = frontViewObj.file;
  }

  if (!mainImage && gallery.length > 0) {
    const firstValidFile = gallery.find((item) => item.file)?.file;
    if (firstValidFile) mainImage = firstValidFile;
  }

  let hoverImage = hoverViewObj?.file || mainImage;

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
