import React, { useState } from 'react';
import InputForm from './components/InputForm';
import Calculator from './components/Calculator';
import Result from './components/Result';
import './App.css';

function App() {
  const [resultado, setResultado] = useState(null);

  const handleCalculate = (n) => {
    const resultadoCalculado = Calculator.calcularSerie(n);
    setResultado(resultadoCalculado);
  };

  return (
    <div>
      <h1>Calculadora de Serie</h1>
      <InputForm onCalculate={handleCalculate} />
      {resultado !== null && <Result resultado={resultado} />}
    </div>
  );
}

export default App;
