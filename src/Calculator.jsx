import React, { useState } from 'react';
import './index.css'; 

const Calculator = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setOutput(eval(input).toString());
      } catch {
        setOutput('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setOutput('');
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    '7', '8', '9', '+',
    '4', '5', '6', '-',
    '1', '2', '3', '*',
    'C', '0', '=', '/',
  ];

  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <input
        type="text"
        className="calculator-input"
        value={input}
        readOnly
      />
      <div>{output}</div>
      <div className="calculator-buttons">
        {buttons.map((button) => (
          <button
            key={button}
            onClick={() => handleButtonClick(button)}
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;