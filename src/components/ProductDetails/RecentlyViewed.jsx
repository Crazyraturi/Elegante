const recentProducts = [
  {
    name: "Olive Green Round Patch Sweatshirt",
    price: "₹999",
    oldPrice: "₹2,499",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300",
  },
];

const RecentlyViewed = () => {
  return (
    <>
      {/* Recently Viewed */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-4">RECENTLY VIEWED</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {recentProducts.map((product, idx) => (
            <div key={idx} className="overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-3">
                <div className="text-sm mb-2">{product.name}</div>
                <div className="flex items-center gap-2">
                  <span className="font-bold">{product.price}</span>
                  <span className="text-sm text-gray-500 line-through">
                    {product.oldPrice}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RecentlyViewed;
