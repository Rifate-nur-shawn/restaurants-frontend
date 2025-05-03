import React from "react";
import Button from "./Button";

const FoodCard = ({ menu }) => {
  return (
    <div className="w-full sm:max-w-[300px] mx-auto ">
      <div className="flex flex-col rounded-xl overflow-hidden bg-white shadow-xl h-auto sm:h-[500px]">
        <div className="flex flex-col h-full">
          <div className="w-full h-[200px] sm:h-[260px] overflow-hidden hover:scale-105 duration-300">
            <img
              src={menu.img}
              alt="Mushroom Melbourne Burger"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="px-3 sm:px-5 pt-2 sm:pt-3 flex flex-col flex-1">
            <h2 className="text-lg sm:text-xl font-bold mb-1 sm:mb-1.7 text-gray-800">
              {menu.name}
            </h2>

            <p className="text-xs sm:text-sm text-gray-600 leading-tight sm:leading-normal">
              {menu.description}
            </p>

            <div className="flex justify-around p-2 sm:p-2.5 bg-gray-50 rounded-lg mt-4 sm:mt-9">
              <div className="text-center border-r pr-2 sm:pr-4">
                <p className="text-[10px] sm:text-xs uppercase font-semibold text-gray-500 mb-0.5 sm:mb-1">
                  Medium
                </p>
                <h1 className="text-xl sm:text-2xl font-bold text-green-600 m-0">
                  {menu.mediumPrice}
                </h1>
              </div>

              <div className="text-center pl-2 sm:pl-4">
                <p className="text-[10px] sm:text-xs uppercase font-semibold text-gray-500 mb-0.5 sm:mb-1">
                  Regular
                </p>
                <h1 className="text-xl sm:text-2xl font-bold text-green-600 m-0">
                  {menu.regularPrice}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
