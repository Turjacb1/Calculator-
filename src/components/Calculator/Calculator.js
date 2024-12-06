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
        const evalResult = Math.pow(parseFloat(expression), 2);
        setResult(evalResult);
      } catch {
        setResult('Error');
      }
    } else if (['sin', 'cos', 'tan', 'log', 'sin⁻¹', 'cos⁻¹', 'tan⁻¹'].includes(value)) {
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
          case 'sin⁻¹':
            evalResult = Math.asin(parseFloat(expression)) * (180 / Math.PI); // Return in degrees
            break;
          case 'cos⁻¹':
            evalResult = Math.acos(parseFloat(expression)) * (180 / Math.PI); // Return in degrees
            break;
          case 'tan⁻¹':
            evalResult = Math.atan(parseFloat(expression)) * (180 / Math.PI); // Return in degrees
            break;
          default:
            evalResult = 'Error';
        }

        setResult(evalResult);
      } catch {
        setResult('Error');
      }
    } else if (value === 'n!') {
      try {
        const num = parseInt(expression);
        if (num < 0) {
          setResult('Error'); // Factorial is undefined for negative numbers
        } else {
          let factorial = 1;
          for (let i = 1; i <= num; i++) {
            factorial *= i;
          }
          setResult(factorial);
        }
      } catch {
        setResult('Error');
      }
    } else if (value === 'ln') {
      try {
        const evalResult = Math.log(parseFloat(expression)); // Natural logarithm (log base e)
        setResult(evalResult);
      } catch {
        setResult('Error');
      }
    } else if (value === '10ˣ') {
      try {
        const evalResult = Math.pow(10, parseFloat(expression)); // 10^x
        setResult(evalResult);
      } catch {
        setResult('Error');
      }
    } else if (value === 'y√x') {
      try {
        const [root, base] = expression.split('√');
        const evalResult = Math.pow(parseFloat(base), 1 / parseFloat(root)); // y√x
        setResult(evalResult);
      } catch {
        setResult('Error');
      }
    } else if (value === '³√x') {
      try {
        const evalResult = Math.cbrt(parseFloat(expression)); // Cube root
        setResult(evalResult);
      } catch {
        setResult('Error');
      }
    } else if (value === '=') {
      try {
        const evalResult = Function('return ' + expression)();
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
