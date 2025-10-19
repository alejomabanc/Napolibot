import React from "react";
import { useCartStore } from "@/stores/cartStore";

const FloatingCart = ({ onClick }) => {
  const { totalItems } = useCartStore(state => ({
    totalItems: state.getTotal(),
  }));

  return (
    <button
      onClick={onClick}
      className="fixed bottom-4 right-4 flex items-center justify-center w-16 h-16 bg-[#8A9A5B] text-white rounded-full shadow-lg transition-transform transform hover:scale-105"
      aria-label="Open cart"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 3h2l1 9h12l1-9h2M3 3l1 9m0 0h12m-12 0l1 9h12l1-9m-12 0h12"
        />
      </svg>
      {totalItems > 0 && (
        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full px-1">
          {totalItems}
        </span>
      )}
    </button>
  );
};

export default FloatingCart;