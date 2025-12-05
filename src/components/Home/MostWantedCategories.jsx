import React from "react";
import { Link } from "react-router-dom";

const MostWantedCategories = () => {
  const categories = [
    {
      id: 1,
      name: "SHIRTS",
      image:
        "https://res.cloudinary.com/dj9tpadhk/image/upload/v1764924251/Shirts_i4eefg.png",
      route: "/products?specificType=Plain%20Shirts",
    },
    {
      id: 2,
      name: "TROUSERS",
      image:
        "https://res.cloudinary.com/dj9tpadhk/image/upload/v1764924306/Trousers_u17bux.png",
      route: "/products?subCategory=Trousers",
    },
    {
      id: 3,
      name: "WINTERWEAR",
      image:
        "https://res.cloudinary.com/dj9tpadhk/image/upload/v1764924333/Winterwear_gask4h.png",
      route: "/products?category=Winterwear",
    },
    {
      id: 4,
      name: "CARGOS",
      image:
        "https://res.cloudinary.com/dj9tpadhk/image/upload/v1764924356/Cargos_kq9nqm.png",
      route: "/products?subCategory=Cargo%20Pants",
    },
    {
      id: 5,
      name: "POLOS",
      image:
        "https://res.cloudinary.com/dj9tpadhk/image/upload/v1764924377/Polo_jfkjix.png",
      route: "/products?specificType=Polo%20T-shirts",
    },
    {
      id: 6,
      name: "JEANS",
      image:
        "https://res.cloudinary.com/dj9tpadhk/image/upload/v1764924398/Jeans_niajhe.png",
      route: "/products?subCategory=Jeans",
    },
    {
      id: 7,
      name: "JOGGERS",
      image:
        "https://res.cloudinary.com/dj9tpadhk/image/upload/v1764924422/Joggers_vusobi.png",
      route: "/products?subCategory=Cargo%20Joggers",
    },
    {
      id: 8,
      name: "OVERSIZED T-SHIRTS",
      image:
        "https://res.cloudinary.com/dj9tpadhk/image/upload/v1764924447/Oversize_pg9qyc.png",
      route: "/products?specificType=Oversized%20T-shirts",
    },
    {
      id: 9,
      name: "PRINTED T-SHIRTS",
      image:
        "https://res.cloudinary.com/dj9tpadhk/image/upload/v1764924481/imPrinted_Tees_j3lfpx.png",
      route: "/products?specificType=Printed%20T-shirts",
    },
    {
      id: 10,
      name: "PLAIN T-SHIRTS",
      image:
        "https://res.cloudinary.com/dj9tpadhk/image/upload/v1764924512/Plain_Tees_ihnaek.png",
      route: "/products?specificType=Plain%20T-shirts",
    },
  ];

  return (
    <div className="w-full px-4 py-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
            MOST-WANTED CATEGORIES
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Loved by all, selling out fast
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {categories.map((category) => (
            <Link
              to={`${category.route}`}
              key={category.id}
              className="relative group cursor-pointer overflow-hidden  aspect-square"
            >
              {/* Image */}
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MostWantedCategories;
