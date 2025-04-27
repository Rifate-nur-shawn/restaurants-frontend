import React from "react";
import Button from "./Button";

const FoodCard = () => {
  return (
    <div className="w-full sm:max-w-[300px] mx-auto">
      <div className="flex flex-col rounded-xl overflow-hidden bg-white shadow-xl h-auto sm:h-[500px]">
        
        <div className="flex flex-col h-full">
          <div className="w-full h-[200px] sm:h-[260px] overflow-hidden">
            <img 
              src="/src/assets/bg.jpg" 
              alt="Mushroom Melbourne Burger" 
              className="w-full h-full object-cover" 
            />
          </div>
          
          <div className="px-3 sm:px-5 pt-2 sm:pt-3 flex flex-col flex-1">
            <h2 className="text-lg sm:text-xl font-bold mb-1 sm:mb-1.7 text-gray-800">
              Mushroom Melbourne
            </h2>
            
            <p className="text-xs sm:text-sm text-gray-600 leading-tight sm:leading-normal">
              A pretzel brioche bun embracing a beef patty, rich mushroom gravy, 
              chips, and Melbourne cheese.
            </p>
            
            <div className="flex justify-around p-2 sm:p-2.5 bg-gray-50 rounded-lg mt-4 sm:mt-9">
              <div className="text-center border-r pr-2 sm:pr-4">
                <p className="text-[10px] sm:text-xs uppercase font-semibold text-gray-500 mb-0.5 sm:mb-1">Medium</p>
                <h1 className="text-xl sm:text-2xl font-bold text-green-600 m-0">Tk 299</h1>
              </div>
              
              <div className="text-center pl-2 sm:pl-4">
                <p className="text-[10px] sm:text-xs uppercase font-semibold text-gray-500 mb-0.5 sm:mb-1">Regular</p>
                <h1 className="text-xl sm:text-2xl font-bold text-green-600 m-0">Tk 499</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
