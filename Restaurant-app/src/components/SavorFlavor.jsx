

const SavorFlavor = () => {
    return (
        <div className="w-full h-[60vh] flex flex-col md:flex-row rounded-lg overflow-hidden my-0 mx-auto">
        {/* Left side: Image - in mobile, this appears second (below the text) */}
        <div className="md:w-1/2 w-full h-64 md:h-full order-2 md:order-1 hover:scale-110 duration-300">
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
    );
};

export default SavorFlavor;