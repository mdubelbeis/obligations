import React from 'react';

const Button = ({
  type,
  text,
  onClick,
  bgColor,
  txtColor,
  hoverBg,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`py-2 px-8 rounded-xl ${bgColor} ${txtColor} drop-shadow-lg ${hoverBg}`}
    >
      {text}
    </button>
  );
};

export default Button;
