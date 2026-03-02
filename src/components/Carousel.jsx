import React, { useState, useEffect } from "react";

export default function Carousel({ slides, height = "h-[calc(100vh-4rem)]" }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <div className={`relative w-full ${height} overflow-hidden`}>
      {/* Carousel slides */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 ${
            idx === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background image with overlay */}
          <div
            className="absolute inset-0 bg-cover"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundPosition: "center 30%",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/75 to-black/80"></div>

          {/* Content */}
          <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4 sm:px-6 md:px-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 drop-shadow-lg">
              {slide.phrase}
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 drop-shadow-md">
              {slide.subtitle}
            </p>
          </div>
        </div>
      ))}

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex space-x-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-3 rounded-full transition-all duration-300 ${
              idx === current
                ? "bg-white w-8"
                : "bg-white bg-opacity-50 w-3 hover:bg-opacity-75"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
