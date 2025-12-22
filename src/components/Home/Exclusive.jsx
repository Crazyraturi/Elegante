import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Exclusive() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://res.cloudinary.com/dj9tpadhk/image/upload/v1764923642/trendingTrousers_zgkmuj.png",
    "https://res.cloudinary.com/dj9tpadhk/image/upload/v1764923691/Replay_ymylh3.png",
    "https://res.cloudinary.com/dj9tpadhk/image/upload/v1764923720/shirtreimagined_lhppsy.jpg",
    "https://res.cloudinary.com/dj9tpadhk/image/upload/v1764923741/mancargo10x_tkltnx.jpg",
    "https://res.cloudinary.com/dj9tpadhk/image/upload/v1764923781/iBack_to_college_jihldw.png",
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const visibleImages = () => {
    const result = [];
    for (let i = 0; i < 4; i++) {
      result.push(images[(currentIndex + i) % images.length]);
    }
    return result;
  };

  return (
    <div className=" bg-white max-w-7xl m-auto">
      {/* Header */}
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Elegante Exclusive
        </h1>
        <p className="text-gray-600 text-lg">
          Trendy Global Styles For Extraordinary You
        </p>
      </div>

      {/* Carousel */}
      <div className="relative px-4 md:px-12 mb-8">
        <div
          className=" flex overflow-x-auto gap-4 
          md:grid md:grid-cols-4 md:overflow-visible
          scrollbar-hide"
        >
          {visibleImages().map((img, idx) => (
            <div
              key={idx}
              className="relative aspect-3/4 overflow-hidden rounded-lg shrink-0 w-96 p-5 md:w-auto"
            >
              <img
                src={img}
                alt={`Fashion ${idx + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 rounded-full p-3 shadow-lg transition-all z-10"
          aria-label="Previous"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 rounded-full p-3 shadow-lg transition-all z-10"
          aria-label="Next"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>
      </div>

      {/* Scrolling Banner */}
      <div className="bg-yellow-400 py-4 overflow-hidden">
        <div className="animate-scroll whitespace-nowrap">
          <span className="inline-block text-2xl md:text-3xl font-bold text-gray-900 px-8">
            Making <span className="font-outline">Global Fashion</span>{" "}
            Accessible
          </span>
          <span className="inline-block text-2xl md:text-3xl font-bold text-gray-900 px-8">
            Making <span className="font-outline">Global Fashion</span>{" "}
            Accessible
          </span>
          <span className="inline-block text-2xl md:text-3xl font-bold text-gray-900 px-8">
            Making <span className="font-outline">Global Fashion</span>{" "}
            Accessible
          </span>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-scroll {
          display: inline-block;
          animation: scroll 10s linear infinite;
        }

        .font-outline {
          -webkit-text-stroke: 2px #000;
          -webkit-text-fill-color: transparent;
          text-stroke: 2px #000;
          color: transparent;
        }
      `}</style>
    </div>
  );
}
