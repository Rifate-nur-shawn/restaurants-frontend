import React from "react";
import Button from "./Button";

const FoodCard = () => {
  return (
    <div className="card  card-side bg-gray-700 cursor-pointer transition-all hover:scale-105  duration-200  shadow-sm">
      <figure className="flex justify-center">
        <img
          className=" "
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          alt="Movie"
        />
      </figure>
      <div className="card-body text-white text-center">
        <h2 className="card-title">New movie is released!</h2>
        <p>Click the button to watch on Jetflix app.</p>
        <div className="card-actions justify-end">
          <Button name={"BUY"} />
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
