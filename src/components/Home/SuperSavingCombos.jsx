import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import s1 from "../../assets/image1.png";
import s2 from "../../assets/image2.png";
import s3 from "../../assets/image3.png";
import s4 from "../../assets/image4.png";
import s5 from "../../assets/image5.png";
import s6 from "../../assets/image6.png";
import s7 from "../../assets/image7.png";


const ComboCard = ({ title, image }) => (
  <div className="shrink-0 w-72 mx-3">
   
    <div className={`h-96 w-96  flex items-center justify-center p-2`}>
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-contain transform  rounded-lg group-hover:scale-105 transition-transform duration-300"
        />
      </div>
   
  </div>
);

const SuperSavingCombos = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  const combos = [
    {
      title: 'BOXERS',
      
      image: s1,
     
    },
    {
      title: 'MELANGE POLOS',
     
      image: s2,
    
    },
     {
      title: 'SATIN SHIRTS',
    
      image: s3,
    
    },
    {
      title: 'SATIN SHIRTS',
    
      image: s4,
    
    },
    {
      title: 'REGULAR-FIT JEANS',
     
       image: s5,
     
    },
        {
      title: 'REGULAR-FIT JEANS',
      
       image: s6,
     
    },
        {
      title: 'REGULAR-FIT JEANS',
     
       image: s7,
      
    }
    ,
    {
      title: 'REGULAR-FIT JEANS',
     
       image: s5,
     
    }
  ];

  const scroll = (direction) => {
    const container = document.getElementById('combo-container');
    const scrollAmount = 320;
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-[80%] bg-linear-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-3xl font-bold text-gray-900 mb-3 tracking-tight">
            SUPER SAVING COMBOS
          </h1>
          <p className="text-gray-600 text-lg">Top 10 combos you can't resist</p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 rounded-full p-3 shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>

          {/* Cards Container */}
          <div
            id="combo-container"
            className="flex overflow-x-auto scrollbar-hide scroll-smooth px-12"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {combos.map((combo, index) => (
              <ComboCard key={index} {...combo} />
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 rounded-full p-3 shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </div>

       
      </div>

      <style >{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default SuperSavingCombos;