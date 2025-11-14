import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import c1 from "../../assets/Combos.png";
import c2 from "../../assets/Flannel_Shirts.png";
import c3 from "../../assets/Korean_Pants.png";
import c4 from "../../assets/Mens_Pyjama_Banner.png";
import c5 from "../../assets/Oxford.png";
import c6 from "../../assets/Winter.png";

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

  // Placeholder images - replace with your actual image imports
  const slides = [
    { image: c1, alt: "Combos" },
    { image: c2, alt: "Flannel Shirts" },
    { image: c3, alt: "Korean Pants" },
    { image: c4, alt: "Mens Pyjama" },
    { image: c5, alt: "Oxford" },
    { image: c6, alt: "Winter" },
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