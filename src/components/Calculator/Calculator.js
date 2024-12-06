import React, { useState } from 'react';
import Display from '../Display/Display';
import Buttons from '../Buttons/Buttons';

const Calculator = () => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState(null);

  const handleInput = (value) => {
    if (value === 'ON') {
      setExpression('');
      setResult(null);
    } else if (value === 'C' || value === 'OFF') {
      setExpression('');
      setResult(null);
    } else if (value === 'DEL') {
      setExpression((prev) => prev.slice(0, -1)); // Delete last character
      setResult(null);
    } else if (value === 'x²') {
      try {
        const evalResult = Math.pow(eval(expression), 2);
        setResult(evalResult);
      } catch {
        setResult('Error');
      }
    } else if (value === 'sin' || value === 'cos' || value === 'tan' || value === 'log') {
      try {
        const angleInRadians = parseFloat(expression) * (Math.PI / 180); // Convert to radians
        let evalResult;

        switch (value) {
          case 'sin':
            evalResult = Math.sin(angleInRadians);
            break;
          case 'cos':
            evalResult = Math.cos(angleInRadians);
            break;
          case 'tan':
            evalResult = Math.tan(angleInRadians);
            break;
          case 'log':
            evalResult = Math.log10(parseFloat(expression));
            break;
          default:
            evalResult = 'Error';
        }

        setResult(evalResult);
      } catch {
        setResult('Error');
      }
    } else if (value === '=') {
      try {
        const evalResult = Function(`return ${expression}`)();
        setResult(evalResult);
      } catch {
        setResult('Error');
      }
    } else if (value === '.') {
      // Add decimal point if not already present in the current number
      if (!expression.includes('.')) {
        setExpression((prev) => prev + value);
      }
    } else if (value === 'π') {
      setExpression((prev) => prev + Math.PI); // Add Pi to the expression
    } else {
      setExpression((prev) => prev + value); // Append normal button value
    }
  };

  return (
    <div className="calculator">
      <Display expression={expression} result={result} />
      <Buttons onInput={handleInput} />
    </div>
  );
};

export default Calculator;
