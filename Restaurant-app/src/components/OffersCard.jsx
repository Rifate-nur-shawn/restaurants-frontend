import React from "react";
import { offers } from "../constant/OffersCard";    

const OffersCard = () => {
  const limitedOffers = offers.slice(0, 9); // Show only 8 cards

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 max-w-7xl mx-auto">
      {limitedOffers.map((offer) => (
        <div
          key={offer.id}
          className="bg-white shadow-lg rounded-lg overflow-hidden w-full h-auto relative"
        >
          <img
            src={offer.image}
            alt={offer.title}
            className="w-[500px] h-128 object-cover"
          />
          <div className="p-4 mb-4 mt-1 text-center">
            <button className="text-xl font-bold ">{offer.title}</button>
          </div>
        </div>
      ))}
    </div>
  );
};


export default OffersCard;
