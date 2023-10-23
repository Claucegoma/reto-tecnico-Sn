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
    <div className="mainContainer">
      <h1>Calculadora de:</h1>
      <h3> Serie(n) = Triangular(n+1) - 2Primo(n) + Fibonacci(n+1)</h3>
      <InputForm onCalculate={handleCalculate} />
      {resultado !== null && <Result resultado={resultado} />}
    </div>
  );
}

export default App;
