import React from 'react';
import Button from '../Button/Button';

const Buttons = ({ onInput }) => {
  const buttonValues = [
    ['7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['0', '.', '=', '+'],
    ['sin', 'cos', 'tan', 'log'],
    ['sin⁻¹', 'cos⁻¹', 'tan⁻¹', 'n!'],
    ['ln', '10ˣ', 'y√x', '³√x'],
    ['π', 'DEL', 'C', 'SHIFT']
  ];

  return (
    <div className="buttons-grid">
      {buttonValues.map((row, rowIndex) => (
        <div key={rowIndex} className={rowIndex >= 4 ? 'advanced-buttons' : ''}>
          {row.map((value) => (
            <Button key={value} value={value} onClick={onInput} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Buttons;
