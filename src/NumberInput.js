import React from 'react';

function NumberInput({ value, onChange }) {
  const handleChange = (event) => {
    let newValue = parseInt(event.target.value, 10);
    newValue = newValue > 10 ? 10 : newValue; // Ограничение до 10
    onChange(newValue);
  };

  return (
    <input
      type="number"
      value={value}
      onChange={handleChange}
      placeholder="Введите число квадратов"
      min={1}
      max={10}
    />
  );
}

export default NumberInput;
