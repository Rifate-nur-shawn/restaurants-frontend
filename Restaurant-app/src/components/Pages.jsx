import React from "react";
import FoodCard from "./FoodCard";

const Pages = () => {
  return (
    <div className="p-12  ">
      <h1 className="text-center text-lg font-bold mb-6 capitalize">
        Our latest Product
      </h1>
      <div className="grid grid-cols-3 gap-4">
        <FoodCard />
        <FoodCard />
        <FoodCard />
      </div>
    </div>
  );
};

export default Pages;
