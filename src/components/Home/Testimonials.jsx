import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Testemonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      image:
        "https://res.cloudinary.com/dj9tpadhk/image/upload/v1764926313/ayan_review_vqyuvm.png",
    },
    {
      image:
        "https://res.cloudinary.com/dj9tpadhk/image/upload/v1764928085/hemant_review_jyhpb4.png",
    },
    {
      image:
        "https://res.cloudinary.com/dj9tpadhk/image/upload/v1764928154/ketan_review_retnmm.png",
    },
    {
      image:
        "https://res.cloudinary.com/dj9tpadhk/image/upload/v1764928186/arman_review_crpsbk.png",
    },
    {
      image:
        "https://res.cloudinary.com/dj9tpadhk/image/upload/v1764928217/mohit_review_huu23m.png",
    },
    {
      image:
        "https://res.cloudinary.com/dj9tpadhk/image/upload/v1764928259/rohit_review_rb0yk0.png",
    },
    {
      image:
        "https://res.cloudinary.com/dj9tpadhk/image/upload/v1764928300/manoj_review_huhooa.png",
    },
    {
      image:
        "https://res.cloudinary.com/dj9tpadhk/image/upload/v1764928326/harsul_review_fcbjqm.png",
    },
    {
      image:
        "https://res.cloudinary.com/dj9tpadhk/image/upload/v1764926313/ayan_review_vqyuvm.png",
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
              <img
                src="https://res.cloudinary.com/dj9tpadhk/image/upload/v1764928455/ist_logo_jw88uw.png"
                alt=""
              />
            </span>
            <span className="w-[5vw]">
              <img
                src="https://res.cloudinary.com/dj9tpadhk/image/upload/v1764928503/inc42_logo_nevult.png"
                alt=""
              />
            </span>
            <span className="w-[5vw]">
              <img
                src="https://res.cloudinary.com/dj9tpadhk/image/upload/v1764928537/bwdisrupt_logo_yecmkt.png"
                alt=""
              />
            </span>
            <span className="w-[8vw]">
              <img
                src="https://res.cloudinary.com/dj9tpadhk/image/upload/v1764928580/theeconomics_logo_barisk.png"
                alt=""
              />
            </span>
            <span className="w-[8vw]">
              <img
                src="https://res.cloudinary.com/dj9tpadhk/image/upload/v1764928627/timesofindia_logo_pwwhav.png"
                alt=""
              />
            </span>
            <span className="w-[8vw]">
              <img
                src="https://res.cloudinary.com/dj9tpadhk/image/upload/v1764928635/fasionnetwork_logo_lg3tos.png"
                alt=""
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testemonials;
