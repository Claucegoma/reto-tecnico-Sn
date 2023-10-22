import React, { useState } from 'react';

function InputForm({ onCalculate }) {
  const [n, setN] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCalculate(parseInt(n));
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label className="form-group">
          Ingrese un valor para n:
          <input type="number" value={n} onChange={(e) => setN(e.target.value)} />
        </label>
        <button type="submit">Calcular</button>
      </form>
    </div>
  );
}

export default InputForm;
