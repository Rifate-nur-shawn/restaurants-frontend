import React from "react";
import GalleryCard from "../components/GalleryCard";

const Gallery = () => {
  return (
    <div className="min-h-screen">
      <div className=" relative flex justify-center flex-direction- items-center w-full  bg-opacity-50">
        <section className="w-full h-[60vh] flex brightness-50">
          <img
            src="/src/assets/premium_photo-1670984935550-5ce2e220977a.jpeg"
            alt="Restaurant"
            className="w-full h-full object-cover"
          />
        </section>
        <p className="absolute flex justify-center  text-center font-mono text-4xl text-yellow-500 px-8 py-2">
          KHANA'S MENU
        </p>
        <p className="absolute flex justify-center w-[140vh] text-center text-white font-mono  px-8 py-5 mt-27">
          Our thoughtfully crafted menu is a treasure trove of unique and
          delightful dishes, meticulously prepared to delight your senses and
          redefine your dining experience.
        </p>
      </div>
      <div className="">
        <GalleryCard />
      </div>
    </div>
  );
};

export default Gallery;
