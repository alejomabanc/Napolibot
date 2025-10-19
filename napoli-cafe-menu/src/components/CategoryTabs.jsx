import React from "react";

const categories = [
  { id: "gelatos", label: "Gelatos" },
  { id: "copas-y-postres", label: "Copas y Postres" },
  { id: "brunch-y-waffles", label: "Brunch y Waffles" },
];

const CategoryTabs = ({ activeCategory, onCategoryChange }) => {
  return (
    <nav className="flex justify-center space-x-4 py-4">
      {categories.map((category) => (
        <button
          key={category.id}
          className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
            activeCategory === category.id
              ? "bg-olive-600 text-white"
              : "bg-white text-gray-700"
          }`}
          onClick={() => onCategoryChange(category.id)}
        >
          {category.label}
        </button>
      ))}
    </nav>
  );
};

export default CategoryTabs;