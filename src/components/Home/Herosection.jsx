import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Search, ShoppingCart } from 'lucide-react';

const CarouselSlide = ({ slide }) => (
  <div className="relative w-full h-[600px] overflow-hidden">
    <img 
      src={slide.image} 
      alt={slide.title}
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black bg-opacity-20" />
    
    <div className="absolute inset-0 flex items-center">
      <div className="container mx-auto px-8 flex justify-between items-center">
        <div className="text-white max-w-xl">
          <h1 className="text-6xl font-bold mb-4 leading-tight">
            {slide.title}
          </h1>
          <p className="text-2xl mb-2">{slide.subtitle}</p>
          <p className="text-xl">{slide.description}</p>
        </div>
        
        <div className="text-white text-right">
          <p className="text-2xl mb-2">{slide.priceLabel}</p>
          <p className="text-5xl font-bold mb-8">{slide.price}</p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-xl px-12 py-4 rounded transition-colors">
            {slide.buttonText}
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default function FlannelCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "FLANNEL SHIRTS",
      subtitle: "Timeless yet Trendy.",
      description: "Pre-Fall Styles.",
      priceLabel: "STARTING AT JUST",
      price: "₹899",
      buttonText: "SHOP NOW",
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=1600&h=900&fit=crop"
    },
    {
      title: "WINTER COLLECTION",
      subtitle: "Stay Warm in Style.",
      description: "New Season Arrivals.",
      priceLabel: "STARTING AT JUST",
      price: "₹1299",
      buttonText: "SHOP NOW",
      image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=1600&h=900&fit=crop"
    },
    {
      title: "CASUAL WEAR",
      subtitle: "Comfort Meets Fashion.",
      description: "Everyday Essentials.",
      priceLabel: "STARTING AT JUST",
      price: "₹699",
      buttonText: "SHOP NOW",
      image: "https://images.unsplash.com/photo-1618886614638-80e3c103d31a?w=1600&h=900&fit=crop"
    }
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
        
        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-full transition-all"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-full transition-all"
        >
          <ChevronRight size={24} />
        </button>
        
        {/* Dots Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index 
                  ? 'bg-white w-8' 
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}