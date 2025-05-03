const HeroBanner = ({ headingText, subHeadingText }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="relative flex justify-center flex-direction- items-center w-full  bg-opacity-50">
        <section className="w-full h-[60vh] flex brightness-50">
          <img
            src="/src/assets/premium_photo-1670984935550-5ce2e220977a.jpeg"
            alt="Restaurant"
            className="w-full h-full object-cover"
          />
        </section>
        <p className="absolute flex justify-center  text-center font-mono text-4xl text-yellow-500 px-8 py-2">
          {headingText}
        </p>
        <p className="absolute flex justify-center w-[140vh] text-center text-white font-mono  px-8 py-5 mt-27">
          {subHeadingText}
        </p>
      </div>
    </div>
  );
};

export default HeroBanner;
