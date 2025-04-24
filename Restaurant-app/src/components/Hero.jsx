import React from "react";

const Hero = () => {
  return (
    <div className="w-full pt-16">
      <section id="hero" className="flex items-center justify-center">
        <div className="w-full">
          <section className="relative w-full h-[88vh] overflow-hidden shadow-lg">
            <video
              muted
              loop
              autoPlay
              className="absolute w-full h-full object-cover brightness-46"
            >
              <source src="/src/assets/video/Khana's.mp4" type="video/mp4" />
            </video>
            {/* Dark overlay for better text visibility */}
            <div className="absolute inset-0"></div>
            {/* text overlay with better responsive handling  */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-yellow-500 px-3 py-2 md:px-6 md:py-4 rounded-lg">
                Welcome to Khana's
              </h1>
              <h1 className="text-sm sm:text-xl md:text-2xl text-white rounded-lg max-w-3xl mx-auto px-2 py-1">
                Burgers | Sandwiches | Chickens | Rice | Shakes | Potatoes |
                Sweet Tooth
              </h1>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Hero;
