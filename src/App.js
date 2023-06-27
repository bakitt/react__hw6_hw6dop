import React, { useState } from 'react';
import NumberInput from './NumberInput';
import Button from './Button';
import SquareContainer from './SquareContainer';  
import './App.css';

function App() {
  const [number, setNumber] = useState(null);

  const createSquares = () => {
    const newNumber = number || 1;
    // Ограничение до 10 квадратов
    const limitedNumber = Math.min(Math.max(newNumber, 1), 10);
    setNumber(limitedNumber);
  };

  return (
    <div className="container">
      <NumberInput value={number} onChange={setNumber} min={1} max={10} />
      <Button onClick={createSquares}>Create Squares</Button>
      <SquareContainer number={number} />
    </div>
  );
}

export default App;
