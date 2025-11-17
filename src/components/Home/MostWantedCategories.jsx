import React from 'react';
import mw1 from  "../../assets/Shirts.png"
import mw2 from  "../../assets/Trousers.png"
import mw3 from  "../../assets/Winterwear.png"
import mw4 from  "../../assets/Cargos.png"
import mw5 from  "../../assets/Polo.png"
import mw6 from  "../../assets/Jeans.png"
import mw7 from  "../../assets/Joggers.png"
import mw8 from  "../../assets/Oversize.png"
import mw9 from  "../../assets/imPrinted_Tees.png"
import mw10 from  "../../assets/Plain_Tees.png"

const MostWantedCategories = () => {
  const categories = [
    {
      id: 1,
      name: 'SHIRTS',
      image: mw1,
    },
    {
      id: 2,
      name: 'TROUSERS',
      image: mw2,
    },
    {
      id: 3,
      name: 'WINTERWEAR',
      image: mw3,
    },
    {
      id: 4,
      name: 'CARGOS',
      image: mw4,
    },
    {
      id: 5,
      name: 'POLOS',
      image: mw5,
    },
    {
      id: 6,
      name: 'JEANS',
      image: mw6,
    },
    {
      id: 7,
      name: 'JOGGERS',
      image: mw7,
    },
    {
      id: 8,
      name: 'OVERSIZED T-SHIRTS',
      image: mw8,
    },
    {
      id: 9,
      name: 'PRINTED T-SHIRTS',
      image: mw9,
    },
    {
      id: 10,
      name: 'PLAIN T-SHIRTS',
      image: mw10,
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
            <div
              key={category.id}
              className="relative group cursor-pointer overflow-hidden  aspect-square"
            >
              {/* Image */}
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-contain   transition-transform duration-300 group-hover:scale-110"
              />
              
          
           
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MostWantedCategories;