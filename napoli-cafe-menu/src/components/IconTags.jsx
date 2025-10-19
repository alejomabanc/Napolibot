import React from 'react';

const IconTags = ({ tags }) => {
  const tagIcons = {
    '🌱': 'Vegan',
    '🌾': 'Gluten-Free',
    '🍃': 'Stevia',
  };

  return (
    <div className="flex space-x-2">
      {tags.map((tag) => (
        <span key={tag} className="flex items-center text-gray-600 text-sm">
          {tag} <span className="sr-only">{tagIcons[tag]}</span>
        </span>
      ))}
    </div>
  );
};

export default IconTags;