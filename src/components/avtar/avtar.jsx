import React from 'react';

const Avatar = ({ name, image }) => {
  return (
    <div className="flex items-center">
      <img
        src={image}
        alt={name}
        className="w-12 h-12 rounded-full object-cover"
      />
      <span className="ml-2">{name}</span>
    </div>
  );
};

export default Avatar;
