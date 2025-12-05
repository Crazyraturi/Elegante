import React, { useState, useEffect } from "react";

const CarouselSlide = ({ slide }) => (
  <div className="relative w-full h-[600px] overflow-hidden">
    <img
      src={slide.image}
      alt={slide.alt || "Carousel slide"}
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0  bg-opacity-20" />
  </div>
);

export default function FlannelCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image:
        "https://res.cloudinary.com/dj9tpadhk/image/upload/v1764923932/Combos_fgsauz.png",
      alt: "Combos",
    },
    {
      image:
        "https://res.cloudinary.com/dj9tpadhk/image/upload/v1764923963/Flannel_Shirts_tjishq.png",
      alt: "Flannel Shirts",
    },
    {
      image:
        "https://res.cloudinary.com/dj9tpadhk/image/upload/v1764924076/Korean_Pants_wr14gp.png",
      alt: "Korean Pants",
    },
    {
      image:
        "https://res.cloudinary.com/dj9tpadhk/image/upload/v1764924101/Mens_Pyjama_Banner_wtetog.png",
      alt: "Mens Pyjama",
    },
    {
      image:
        "https://res.cloudinary.com/dj9tpadhk/image/upload/v1764924130/Oxford_qjw0wc.png",
      alt: "Oxford",
    },
    {
      image:
        "https://res.cloudinary.com/dj9tpadhk/image/upload/v1764924157/Winter_grahqe.png",
      alt: "Winter",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-gray-50">
      {/* Carousel */}
      <div className="relative">
        <CarouselSlide slide={slides[currentSlide]} />

        {/* Dots Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index
                  ? "bg-white w-8"
                  : "bg-white bg-opacity-50 hover:bg-opacity-75"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
