const SpecialOfferCard = () => {
    return (
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-4 py-10 gap-10 mb-10px mt-11">
        {/* Left side: Text */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-3">
            Special Offers
          </h1>
          <p className="text-gray-600 mb-6 max-w-md">
            Discover the best deals at Khana's! Exclusive discounts and
            limited-time offers on your favorite meals.
          </p>
          <button className="bg-green-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-green-600 transition w-fit">
            View Offers
          </button>
        </div>
  
        {/* Right side: Cards */}
        <div className="md:w-1/1 flex flex-wrap gap-6 ">
          {/* Card 1 */}
          <div className="w-full md:w-[48%] flex flex-col items-center bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src="/src/assets/g1.jpg"
              alt="Ramadan Deal"
              className="w-full h-80 object-cover"
            />
            <div className="py-4 text-center font-semibold text-gray-800 w-full text-lg">
              Ramadan Deal
            </div>
          </div>
  
          {/* Card 2 */}
          <div className="w-full md:w-[48%] flex flex-col items-center bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src="/src/assets/g1.jpg"
              alt="Corporate Ramadan Deal"
              className="w-full h-80 object-cover"
            />
            <div className="py-4 text-center font-semibold text-gray-800 w-full text-lg">
              Corporate Ramadan Deal
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default SpecialOfferCard;
  