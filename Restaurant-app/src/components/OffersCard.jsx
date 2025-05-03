import React from "react";

const OffersCard = () => {
  return (
    <div className="w-1/4 h-1/2 shadow-lg rounded-lg overflow-hidden border border-gray-300 mx-auto my-4 ">
      <div className="h-1/2 hover:scale-105 duration-300">
        <img
          src="/src/assets/offers.jpg"
          alt="Pohela Boishakh Offer"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-4 ">
        <button className=" font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out w-full">
          Pohela Boishakh 2025
        </button>
      </div>
    </div>
  );
};

export default OffersCard;
