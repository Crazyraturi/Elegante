const similarProducts = [
  {
    name: "Dusty Beige Cut and Sew...",
    price: "₹999",
    oldPrice: "₹2,499",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=300",
  },
  {
    name: "Beige Turtle Neck Sweatsh...",
    price: "₹999",
    oldPrice: "₹2,499",
    image: "https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?w=300",
  },
  {
    name: "Lilac Turtle Neck Sweatshirt",
    price: "₹999",
    oldPrice: "₹2,499",
    image: "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=300",
  },
  {
    name: "Baby Pink Turtle Neck Swe...",
    price: "₹999",
    oldPrice: "₹2,499",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=300",
  },
  {
    name: "Grey Turtle Neck Sweatshirt",
    price: "₹999",
    oldPrice: "₹2,499",
    image: "https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?w=300",
  },
  {
    name: "Khaki Zipper Sweatshirt",
    price: "₹999",
    oldPrice: "₹2,499",
    image: "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=300",
  },
  {
    name: "Dove Blue Zipper Sweatshi...",
    price: "₹999",
    oldPrice: "₹2,499",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=300",
  },
  {
    name: "Dark Grey Zipper Sweatshi...",
    price: "₹999",
    oldPrice: "₹2,499",
    image: "https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?w=300",
  },
  {
    name: "Brown Polo Collar Sweatsh...",
    price: "₹999",
    oldPrice: "₹2,499",
    image: "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=300",
  },
  {
    name: "French Wine Polo Collar S...",
    price: "₹999",
    oldPrice: "₹2,499",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=300",
  },
  {
    name: "Off White Elbow Patch Sw...",
    price: "₹999",
    oldPrice: "₹2,499",
    image: "https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?w=300",
  },
  {
    name: "Black Polo Collar Sweatsh...",
    price: "₹999",
    oldPrice: "₹2,499",
    image: "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=300",
  },
  {
    name: "Be Young Forever Men Sw...",
    price: "₹999",
    oldPrice: "₹2,499",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=300",
  },
];

const SimilarProducts = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">SIMILAR PRODUCTS</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {similarProducts.map((product, idx) => (
          <div key={idx} className="overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-3">
              <div className="text-sm mb-2">{product.name}</div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm">{product.price}</span>
                <span className="text-xs text-gray-500 line-through">
                  {product.oldPrice}
                </span>
                <span className="text-xs text-[#04ce00]">(50% off)</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarProducts;
