import React, { useState, useEffect } from "react";

const CarouselSlide = ({ slide }) => (
  <div className="relative w-full  md:h-[600px]  overflow-hidden">
    <img
      src={slide.image}
      alt={slide.alt || "Carousel slide"}
      className="w-full h-full object-contain md:object-cover"
    />
    <div className="absolute inset-0 bg-opacity-20" />
  </div>
);

export default function FlannelCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Desktop Slides
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

  // Mobile Slides
  const mobileSlides = [
    {
      image:
        "https://res.cloudinary.com/dq3rbg7x3/image/upload/v1765526998/mv2_yogwdh.png",
      alt: "Mobile Slide 1",
    },
    {
      image:
        "https://res.cloudinary.com/dq3rbg7x3/image/upload/v1765526998/mv6_xaigt8.png",
      alt: "Mobile Slide 2",
    },
    {
      image:
        "https://res.cloudinary.com/dq3rbg7x3/image/upload/v1765526998/mv5_clg6y2.png",
      alt: "Mobile Slide 3",
    },
    {
      image:
        "https://res.cloudinary.com/dq3rbg7x3/image/upload/v1765526998/mv1_kccepc.png",
      alt: "Mobile Slide 4",
    },
    {
      image:
        "https://res.cloudinary.com/dq3rbg7x3/image/upload/v1765526998/mv3_aizllp.png",
      alt: "Mobile Slide 5",
    },
    {
      image:
        "https://res.cloudinary.com/dq3rbg7x3/image/upload/v1765526998/mv7_uxeozp.png",
      alt: "Mobile Slide 6",
    },
  ];

  const selectedSlides = isMobile ? mobileSlides : slides;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % selectedSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + selectedSlides.length) % selectedSlides.length,
    );
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [selectedSlides.length]);

  return (
    <div className="w-full bg-gray-50">
      <div className="relative">
        <CarouselSlide slide={selectedSlides[currentSlide]} />

        <div className="absolute bottom-1 left-0 right-0 flex justify-center gap-3 px-4">
          {selectedSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-1 h-1 rounded-full transition-all ${
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
