import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import re1 from "../../assets/ayan_review.png";
import re2 from "../../assets/hemant_review.png";
import re3 from "../../assets/katen_review.png";
import re4 from "../../assets/arman_review.png";
import re5 from "../../assets/mohit_review.png";
import re6 from "../../assets/rohit_review.png";
import re7 from "../../assets/manoj_review.png";
import re8 from "../../assets/harsul_review.png";
import re9 from "../../assets/ayan_review.png";
import logo1 from "../../assets/ist_logo.png";
import logo2 from "../../assets/inc42_logo.png";
import logo3 from "../../assets/bwdisrupt_logo.png";
import logo4 from "../../assets/theeconomics_logo.png";
import logo5 from "../../assets/timesofindia_logo.png";
import logo6 from "../../assets/fasionnetwork_logo.png";

const Testemonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      image: re1,
    },
    {
      image: re2,
    },
    {
      image: re3,
    },
    {
      image: re4,
    },
    {
      image: re5,
    },
    {
      image: re6,
    },
    {
      image: re7,
    },
    {
      image: re8,
    },
    {
      image: re9,
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const getVisibleReviews = () => {
    const visible = [];
    for (let i = 0; i < 4; i++) {
      visible.push(reviews[(currentIndex + i) % reviews.length]);
    }
    return visible;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-white">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
           Elegante APPROVED
        </h2>
        <p className="text-gray-600">Real reviews from real people</p>
      </div>

      {/* Carousel */}
      <div className="relative">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
          aria-label="Previous review"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Reviews Container */}
        <div className="overflow-hidden mx-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {getVisibleReviews().map((review, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden"
              >
                {/* Product Image */}
                <div className=" bg-gray-100">
                  <img
                    src={review.image}
                    alt={review.reviewer || "Product review"}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
          aria-label="Next review"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Featured Banner */}
      <div className="mt-12 bg-linear-to-r from-yellow-300 via-yellow-400 to-yellow-300 rounded-lg overflow-hidden">
        <div className="flex items-center justify-between px-8 py-4">
          <div className="flex items-center gap-2">
            <span className="bg-black text-white px-4 py-1 rounded font-bold">
              FEATURED
            </span>
          </div>
          <div className="flex items-center gap-8 overflow-x-auto">
            <span className="w-[8vw]">
              <img src={logo1} alt="" />
            </span>
            <span className="w-[5vw]">
              <img src={logo2} alt="" />
            </span>
            <span className="w-[5vw]">
              <img src={logo3} alt="" />
            </span>
            <span className="w-[8vw]">
              <img src={logo4} alt="" />
            </span>
            <span className="w-[8vw]">
              <img src={logo5} alt="" />
            </span>
            <span className="w-[8vw]">
              <img src={logo6} alt="" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testemonials;
