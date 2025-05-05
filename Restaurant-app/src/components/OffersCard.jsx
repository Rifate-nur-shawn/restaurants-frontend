import React from "react";
import { offers } from "../constant/OffersCard";

const OffersCard = () => {
  return (
    <div className="w-full md:w-2/3 lg:w-1/3 xl:w-1/4 shadow-lg rounded-lg overflow-hidden border border-gray-300 mx-auto my-4">
      <div className="h-48 sm:h-56 md:h-64 hover:scale-105 duration-300">
        <img
          src="/src/assets/offers.jpg"
          alt={offers}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-3 sm:p-4">
        <button className="font-bold py-1 sm:py-2 px-3 sm:px-4 rounded-full transition duration-300 ease-in-out w-full text-sm sm:text-base">
          Pohela Boishakh 2025
        </button>
      </div>
    </div>
  );
};

export default OffersCard;
