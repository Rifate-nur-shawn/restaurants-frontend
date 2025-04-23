import React from "react";

const Hero = () => {
  return (
    <div className="w-full pt-16 ">
      {" "}
      {/* Added pt-16 to account for navbar height */}
      <section id="hero" className="flex items-center justify-center">
        <div className="w-full">
          <section className="relative w-full h-[80vh] overflow-hidden shadow-lg">
            <video
              autoPlay
              muted
              loop
              className="absolute w-full h-full object-cover brightness-75"
            >
              <source src="/src/assets/video/Khana's.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Dark overlay to make text more visible */}
            <div className="absolute inset-"></div>

            {/* Overlay text positioned in the middle of the video */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h1 className="text-5xl md:text-6xl font-bold text-yellow-500 px-6 py-4 rounded-lg">
                Welcome to Khana's
              </h1>
              <h1 className="text-xl md:text-2xl text-white mt-4">
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
