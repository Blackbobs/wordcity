import React from "react";

const Button = ({ title }) => {
  return (
    <button className="bg-white text-emerald px-3 py-2 rounded-full font-bold cursor-pointer">
      {title}
    </button>
  );
};

export default Button;
