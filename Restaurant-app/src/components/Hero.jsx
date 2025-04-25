import React, { useEffect } from "react";
import Button from "./Button";

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
          <div className="flex flex-col md:flex-row h-[78vh] max-w-7xl mx-auto px-2 pt-16">
            {/* Left side: Text */}
            <div className="md:w-1/2 flex flex-col justify-center p-10 md:pr-2">
              <h1 className="text-3xl font-bold text-gray-800 mb-3">
                Special Offers
              </h1>
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

          {/* Savor the Flavors Card - Image Left, Content Right */}
          <div className="w-full h-[60vh] flex flex-col md:flex-row rounded-lg overflow-hidden my-0 mx-auto">
            {/* Left side: Image - in mobile, this appears second (below the text) */}
            <div className="md:w-1/2 w-full h-64 md:h-full order-2 md:order-1">
              <img
                src="/src/assets/bg.jpg"
                alt="Savor the Flavors"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Right side: Text and button - in mobile, this appears first (above the image) */}
            <div className="md:w-1/2 flex flex-col justify-center p-6 md:px-10 order-1 md:order-2">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 md:mb-4">
                Savor the Flavors
              </h3>
              <p className="text-gray-600 mb-4 md:mb-6 text-base md:text-lg">
                Our thoughtfully curated menu caters to all palates
              </p>
              <button className="bg-yellow-500 text-white font-semibold py-2 md:py-3 px-4 md:px-6 rounded-lg shadow-md hover:bg-yellow-600 transition w-fit">
                View Menu
              </button>
            </div>
          </div>

                       
          <div className="w-full h-auto md:h-[60vh] flex flex-col md:flex-row rounded-lg overflow-hidden mt-8 md:mt-0 mx-auto">
            {/* Mobile: Text appears first, image second */}
            <div className="md:w-1/2 flex flex-col justify-center p-6 md:p-30 order-1">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 md:mb-4"></h3>
                Tantalizing journey of taste
              
              <p className="text-gray-600 mb-4 md:mb-6 text-base md:text-lg">
                Experience the Ease of Ordering Our Flavorful Creations, Delivered Right to Your Doorstep
              </p>
              <button className="bg-yellow-500 text-white font-semibold py-2 md:py-3 px-4 md:px-6 rounded-lg shadow-md hover:bg-yellow-600 transition w-fit">
                View Menu
              </button>
            </div>
            {/* Mobile: Image appears below text */}
            <div className="md:w-1/2 w-full h-64 md:h-full order-2">
              <img
                src="/src/assets/bg.jpg"
                alt="Savor the Flavors"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Right side: Image - in mobile, this appears second (below the text) */}

            </div>


            {/* Locations Section - Text left, sliding images right */}
                    <div className="w-full flex flex-col md:flex-row py-10 md:py-16 px-4 md:px-10 bg-gray-50">
                    {/* Left side: Text content */}
                    <div className="md:w-1/3 mb-6 md:mb-0 flex flex-col justify-center">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 md:mb-4">Khana's Near You</h3>
                      <p className="text-gray-600 mb-4 md:mb-6">Nestled in prime spots, ready to welcome you with open arms and satisfy your cravings.</p>
                      <button className="bg-yellow-500 text-white font-semibold py-2 md:py-3 px-4 md:px-6 rounded-lg shadow-md hover:bg-yellow-600 transition w-fit">
                      All Locations
                      </button>
                    </div>
                    
                    {/* Right side: Sliding images */}
                    <div className="md:w-2/3 relative overflow-hidden">
                      <div 
                      id="locationSlider" 
                      className="flex space-x-4 overflow-x-auto md:overflow-x-hidden pb-4 relative"
                      style={{ scrollBehavior: 'smooth', transition: 'transform 0.5s ease' }}
                      >
                      {/* Individual location cards (3 visible at a time) */}
                      {[1, 2, 3, 4, 5, 6].map((item) => (
                      <div key={item} className="flex-shrink-0 w-3/4 sm:w-1/2 md:w-1/3 h-auto px-2">
                      <div className="rounded-lg overflow-hidden shadow-md">
                        <img
                        src="/src/assets/b1.jpg"
                        alt="Locations"
                        className="w-full h-[180px] md:h-[250px] object-cover"
                        />
                        <button className="w-full bg-white py-2 md:py-3 px-2 text-center text-gray-800 font-medium hover:bg-gray-100 transition">
                        {item === 1 ? "Rampura" : 
                         item === 2 ? "Gulshan" : 
                         item === 3 ? "Dhanmondi" : 
                         item === 4 ? "Uttara" : 
                         item === 5 ? "Banani" : "Mirpur"}
                        </button>
                      </div>
                      </div>
                      ))}
                      </div>
                      
                      {/* Navigation arrows with loop functionality */}
                    <button 
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md z-10 hover:bg-white"
                    onClick={() => {
                      const slider = document.getElementById('locationSlider');
                      slider.scrollBy({ left: -slider.clientWidth / 3, behavior: 'smooth' });
                    }}
                    >
                    ←
                    </button>
                    <button 
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md z-10 hover:bg-green-500"
                    onClick={() => {
                      const slider = document.getElementById('locationSlider');
                      slider.scrollBy({ left: slider.clientWidth / 3, behavior: 'smooth' });
                    }}
                    >
                    →
                    </button>
                  </div>
                  </div>

                </div>
                </section>
              </div>
              );
};

export default Hero;
