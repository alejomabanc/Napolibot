import React from "react";
import IconTags from "./IconTags";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white border border-[#E3E6EA] rounded-lg shadow-sm p-5 transition-shadow hover:shadow-md">
      <div className="flex justify-between">
        <div className="flex-1">
          <h3 className="font-bold text-lg text-[#7B5B43]">{product.name}</h3>
          <p className="text-[#5A5A5A] text-sm">{product.desc}</p>
          <div className="flex items-center justify-between mt-2">
            <span className="font-bold text-[#8A9A5B]">${product.price.toFixed(2)}</span>
            <IconTags tags={product.tags} />
          </div>
        </div>
        {product.img && (
          <img
            src={product.img}
            alt={product.name}
            className="w-16 h-16 rounded-lg object-cover ml-4"
          />
        )}
      </div>
      <button
        onClick={onAddToCart}
        className="mt-4 w-full bg-[#8A9A5B] text-white font-medium rounded-[20px] py-2 transition-transform transform hover:scale-105"
      >
        Agregar +
      </button>
    </div>
  );
};

export default ProductCard;