const ProductSkeletonCard = () => {
  return (
    <div className="bg-white rounded-lg overflow-hidden">
      {/* Image Skeleton */}
      <div className="aspect-3/4 w-full shimmer rounded-xl"></div>

      {/* Content Skeleton */}
      <div className="pt-4 px-1 space-y-2">
        <div className="h-4 w-3/4 shimmer rounded"></div>
        <div className="h-3 w-1/2 shimmer rounded"></div>

        <div className="flex gap-2 items-center">
          <div className="h-4 w-16 shimmer rounded"></div>
          <div className="h-3 w-10 shimmer rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductSkeletonCard;
