import React from 'react';

const Button = ({ onClick, isShown }) => {
  if (!isShown) {
    return null;
  }

  return (
    <button type="Button" onClick={onClick}>
      <span>Load more</span>
    </button>
  );
};

export default Button;
