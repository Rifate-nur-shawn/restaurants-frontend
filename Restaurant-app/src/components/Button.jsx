import React from "react";

const Button = ({ name, className }) => {
  return (
    <button
      className={`btn btn-primary bg-blue-500 p-2 rounded-lg mb-4 ${className}`}
    >
      {name}
    </button>
  );
};

export default Button;
