import React from 'react';

function Result({ resultado }) {
  return (
    <div>
      <h2>Resultado de la Serie:</h2>
      <p>El término de la serie es: {resultado}</p>
    </div>
  );
}

export default Result;
