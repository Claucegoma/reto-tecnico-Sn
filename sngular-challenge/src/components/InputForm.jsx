import React, { useState } from 'react';

function InputForm({ onCalculate }) {
  const [n, setN] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCalculate(parseInt(n));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Ingrese el valor de n:
          <input type="number" value={n} onChange={(e) => setN(e.target.value)} />
        </label>
        <button type="submit">Calcular</button>
      </form>
    </div>
  );
}

export default InputForm;
