import React from "react";
import cardImg from "@/assets/card.png";

const Card = () => {
  return (
    <div className="w-[300px] border border-gray-200 rounded-lg overflow-hidden shadow-lg relative">
      <div className="h-[200px]">
        <img src={cardImg} alt="" className="w-full h-auto object-cover" />
        <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-sm rounded-full">
          -30%
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">Syltherine</h3>
        <p className="text-sm text-gray-500">Stylish cafe chair</p>
        <div className="flex items-center gap-2 mt-2">
          <p className="text-lg font-bold text-gray-900">Rp 2.500.000</p>
          <p className="text-sm text-gray-400 line-through">Rp 3.500.000</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
