import React from 'react';
function GuessCell({ guess, columnIndex, status }) {
  let cell = guess?.[columnIndex]; 
  const className = `cell ${status}`;

  return <span className={className} key={columnIndex}>{ cell }</span>;
}

export default GuessCell;