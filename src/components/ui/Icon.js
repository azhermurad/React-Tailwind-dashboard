// Icon.js
import React from 'react';

const Icon = ({ name, className }) => {
  const imagePath = `/images/${name}.png`;

  return (
    <img
      src={imagePath}
      alt={name}
      className={className}
    />
  );
};

export default Icon;