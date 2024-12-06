import React from 'react';

const Button = ({ value, onClick }) => {
  const isOperator = [
    '/', '*', '-', '+', '=', 'sin', 'cos', 'tan', 'log', 'x²', 'ON', 
    'SHIFT', 'DEL', '.', 'π', 'sin⁻¹', 'cos⁻¹', 'tan⁻¹', 'n!', 'ln', '10ˣ', 'y√x', '³√x'
  ].includes(value);

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
