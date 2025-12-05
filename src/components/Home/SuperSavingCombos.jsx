import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  const combos = [
    {
      title: "BOXERS",
      image:
        "https://res.cloudinary.com/dj9tpadhk/image/upload/v1764924644/image1_beuckl.png",
    },
    {
      title: "MELANGE POLOS",
      image:
        "https://res.cloudinary.com/dj9tpadhk/image/upload/v1764924689/image2_rpgbcg.png",
    },
    {
      title: "SATIN SHIRTS",
      image:
        "https://res.cloudinary.com/dj9tpadhk/image/upload/v1764924725/image3_qcbxpp.png",
    },
    {
      title: "SATIN SHIRTS",
      image:
        "https://res.cloudinary.com/dj9tpadhk/image/upload/v1764924726/image4_yz46ts.png",
    },
    {
      title: "REGULAR-FIT JEANS",
      image:
        "https://res.cloudinary.com/dj9tpadhk/image/upload/v1764924727/image5_qmo2cg.png",
    },
    {
      title: "REGULAR-FIT JEANS",
      image:
        "https://res.cloudinary.com/dj9tpadhk/image/upload/v1764924727/image6_otonuy.png",
    },
    {
      title: "REGULAR-FIT JEANS",
      image:
        "https://res.cloudinary.com/dj9tpadhk/image/upload/v1764924727/image7_pg2v0r.png",
    },
  ];

  const scroll = (direction) => {
    const container = document.getElementById("combo-container");
    const scrollAmount = 320;
    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
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
          <p className="text-gray-600 text-lg">
            Top 10 combos you can't resist
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 rounded-full p-3 shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>

          {/* Cards Container */}
          <div
            id="combo-container"
            className="flex overflow-x-auto scrollbar-hide scroll-smooth px-12"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {combos.map((combo, index) => (
              <ComboCard key={index} {...combo} />
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 rounded-full p-3 shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default SuperSavingCombos;
