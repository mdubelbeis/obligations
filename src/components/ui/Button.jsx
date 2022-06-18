import React from 'react';

const Button = ({ type, text }) => {
  return (
    <button
      type={type}
      className="py-2 px-8 rounded-xl bg-sapphire text-gray"
    >
      {text}
    </button>
  );
};

export default Button;
