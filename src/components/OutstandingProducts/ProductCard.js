// components/ProductCard.js
import React from "react";
import { Button } from "@nextui-org/react";

const ProductCard = ({ image, discount, brand, description }) => {
  return (
    <div className="bg-white p-5">
      <div className="relative">
        <img src={image} alt="" className="w-full" />
        <div className="absolute bg-bg-sale bottom-0 h-9 left-0 bg-cover bg-center bg-no-repeat px-2 rounded-md">
          <p className="font-bold text-xs text-sale">TIẾT KIỆM</p>
          <p className="font-bold text-white text-sm">{discount}</p>
        </div>
      </div>
      <h6 className="text-sm font-semibold text-title my-3">{brand}</h6>
      <p className="text-xs">{description}</p>
      <Button className="w-full py-2 border-2 mt-3 rounded-md text-blue-700 font-bold">
        Thêm vào giỏ
      </Button>
    </div>
  );
};

export default ProductCard;
