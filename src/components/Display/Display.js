import React from 'react';

const Display = ({ expression, result }) => {
  return (
    <div className="display">
      <div>{expression}</div>
      <div className="result">{result !== null ? `= ${result}` : ''}</div>
    </div>
  );
};

export default Display;
