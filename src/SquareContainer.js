import React from 'react';

function SquareContainer({ number }) {
  const squares = [];
  for (let i = 0; i < number; i++) {
    const className = i % 2 === 0 ? 'black' : 'white';
    squares.push(<div key={i} className={`square ${className}`} />);
  }

  return (
    <div className="square-container">
      {squares}
    </div>
  );
}

export default SquareContainer;