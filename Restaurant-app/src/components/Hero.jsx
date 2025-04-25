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
          
          {/* Special Offers Section */}
          <div className="flex flex-col md:flex-row h-[78vh] max-w-7xl mx-auto  px-2 pt-16">
            {/* Left side: Text */}
            <div className="md:w-1/2 flex flex-col justify-center p-10 md:pr-2">
              <h1 className="text-3xl font-bold text-gray-800 mb-3">Special Offers</h1>
              <p className="text-gray-600 mb-4 max-w-md">
                Discover the best deals at Khana's! Exclusive discounts and
                limited-time offers on your favorite meals.
              </p>
              <button className="border-b-emerald-600 bg-green-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-green-600 transition w-fit">
                View Offers
              </button>
            </div>
            
            {/* Right side: Images and buttons side by side */}
            <div className="md:w-1/2 flex items-center justify-center gap-5 p-0 h-full">
              <div className="flex flex-col items-center h-full w-[68%]">
                <img 
                  src="/src/assets/g1.jpg" 
                  alt="Special offer" 
                  className="w-full h-4/5 object-cover rounded-t-lg " 
                />
                <button className="bg-white-500 text-black font-semibold py-4 px-6 rounded-b-lg shadow-md transition w-full -mt-1">
                Ramadan Deal
                </button>
              </div>
              <div className="flex flex-col items-center h-full w-[68%]">
                <img 
                  src="/src/assets/g1.jpg" 
                  alt="Special offer" 
                  className="w-full h-4/5 object-cover rounded-t-lg " 
                />
                <button className="bg-white-500 font-semibold py-4  rounded-b-lg shadow-md transition w-full -mt-1">
                Corporate Ramadan Deal
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
