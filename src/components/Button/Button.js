import React from 'react';

const Button = ({ value, onClick }) => {
  const isOperator = ['/', '*', '-', '+', '=', 'sin', 'cos', 'tan', 'log', 'x²', 'ON', 'SHIFT', 'DEL',  '.', 'π'].includes(value);

  return (
    <button
      className={`button ${isOperator ? 'operator' : ''}`}
      onClick={() => onClick(value)}
    >
      {value}
    </button>
  );
};

export default Button;
