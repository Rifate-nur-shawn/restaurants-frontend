import Button from "./Button";
import SavorFlavor from "./SavorFlavor";
import SpecialOfferCard from "./SpecialOfferCard";

const Hero = () => {
  return (
    <div className=" w-full pt-16">
      <section id="hero" className="flex items-center justify-center">
        <div className="w-full">
          <section className="relative w-full h-[56vh] mx-auto overflow-hidden shadow-lg mt-0">
            <video
              muted
              loop
              autoPlay
              className="absolute w-full h-full object-cover brightness-46 "
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
          <div>
            <SpecialOfferCard />
          </div>

          {/* Savor the Flavors Card - Image Left, Content Right */}
          <div>
            <SavorFlavor />
          </div>

          <div className="w-full h-auto md:h-[60vh] flex flex-col md:flex-row rounded-lg overflow-hidden mt-8 md:mt-0 mx-auto">
            {/* Mobile: Text appears first, image second */}
            <div className="md:w-1/2 flex flex-col justify-center p-6 md:p-30 order-1">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 md:mb-4">
                Tantalizing journey of taste
              </h3>

              <p className="text-gray-600 mb-4 md:mb-6 text-base md:text-lg">
                Experience the Ease of Ordering Our Flavorful Creations,
                Delivered Right to Your Doorstep
              </p>
              <button className="bg-yellow-500 text-white font-semibold py-2 md:py-3 px-4 md:px-6 rounded-lg shadow-md hover:bg-yellow-600 transition w-fit">
                View Menu
              </button>
            </div>
            {/* Mobile: Image appears below text */}
            <div className="md:w-1/2 w-full h-64 md:h-full order-2 hover:scale-110 duration-300">
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
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 md:mb-4">
                Khana's Near You
              </h3>
              <p className="text-gray-600 mb-4 md:mb-6">
                Nestled in prime spots, ready to welcome you with open arms and
                satisfy your cravings.
              </p>
              <button className="bg-yellow-500 text-white font-semibold py-2 md:py-3 px-4 md:px-6 rounded-lg shadow-md hover:bg-yellow-600 transition w-fit">
                All Locations
              </button>
            </div>

            {/* Right side: Sliding images */}
            <div className="md:w-2/3 relative overflow-hidden">
              <div
                id="locationSlider"
                className="flex space-x-4 overflow-x-auto md:overflow-x-hidden pb-4 relative"
                style={{
                  scrollBehavior: "smooth",
                  transition: "transform 0.5s ease",
                }}
              >
                {/* Individual location cards (3 visible at a time) */}
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div
                    key={item}
                    className="flex-shrink-0 w-3/4 sm:w-1/2 md:w-1/3 h-auto px-2"
                  >
                    <div className="rounded-lg overflow-hidden shadow-md hover:scale-110 duration-300">
                      <img
                        src="/src/assets/b1.jpg"
                        alt="Locations"
                        className="w-full h-[180px] md:h-[250px] object-cover"
                      />
                      <button className="w-full bg-white py-2 md:py-3 px-2 text-center text-gray-800 font-medium hover:bg-gray-100 transition">
                        {item === 1
                          ? "Rampura"
                          : item === 2
                          ? "Gulshan"
                          : item === 3
                          ? "Dhanmondi"
                          : item === 4
                          ? "Uttara"
                          : item === 5
                          ? "Banani"
                          : "Mirpur"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation arrows with loop functionality */}
              <button
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md z-10 hover:bg-white"
                onClick={() => {
                  const slider = document.getElementById("locationSlider");
                  slider.scrollBy({
                    left: -slider.clientWidth / 3,
                    behavior: "smooth",
                  });
                }}
              >
                ←
              </button>
              <button
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md z-10 hover:bg-green-500"
                onClick={() => {
                  const slider = document.getElementById("locationSlider");
                  slider.scrollBy({
                    left: slider.clientWidth / 3,
                    behavior: "smooth",
                  });
                }}
              >
                →
              </button>
            </div>
          </div>

          {/* Foodie Favorites Section */}
          <div className="w-auto py-2 px-4 m-20 md:px-12 bg-white">
            <div className="max-w-7xl text-center mx-auto mb-7">
              {/* Section header */}
              <div className="text-center  mb-3 "></div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">
                Foodie Favourites!
              </h3>
              <p className="text-gray-600 text-lg">
                Get to know our top picks and hidden gems!
              </p>
            </div>

            {/* Slider container */}
            <div className="relative">
              {/* Slider */}
              <div
                id="foodieSlider"
                className="flex space-x-4 overflow-x-hidden pb-6 relative"
                style={{
                  scrollBehavior: "smooth",
                  transition: "transform 0.5s ease",
                }}
              >
                {/* Cards - 8 items with 4 visible at a time */}
                {[
                  "Choco Cold Coffee",
                  "Cheese Burger",
                  "Spicy Wings",
                  "Strawberry Shake",
                  "Chicken Sandwich",
                  "Beef Burger",
                  "Loaded Fries",
                  "Ice Cream Sundae",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-full sm:w-1/2 md:w-1/4 px-3"
                  >
                    <div className="bg-white rounded-lg  overflow-hidden">
                      {/* Top part - Text and button */}
                      <div className="p-4 bg-gray-50">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">
                          {item}
                        </h4>
                        <button className="bg-yellow-500 text-white text-sm font-medium py-1 px-3 rounded hover:bg-yellow-600 transition">
                          View Details
                        </button>
                      </div>

                      {/* Bottom part - Image */}
                      <div className="relative">
                        <img
                          src="/src/assets/bg.jpg"
                          alt={item}
                          className="w-full h-48 object-cover"
                        />
                        <button className="w-full bg-white border-1 py-2 text-center text-gray-800 font-medium hover:bg-green-500 transition">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation arrows */}
              <button
                className="absolute border-2 left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md z-10 hover:bg-white"
                onClick={() => {
                  const slider = document.getElementById("foodieSlider");
                  slider.scrollBy({
                    left: -slider.clientWidth,
                    behavior: "smooth",
                  });
                }}
              >
                ←
              </button>
              <button
                className="absolute border-2 right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full  z-10 hover:bg-green-500"
                onClick={() => {
                  const slider = document.getElementById("foodieSlider");
                  slider.scrollBy({
                    left: slider.clientWidth,
                    behavior: "smooth",
                  });
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
