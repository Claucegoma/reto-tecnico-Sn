// src/Calculator.js
class Calculator {
    static triangular(n) {
      return (n * (n + 1)) / 2;
    }
  
    static esPrimo(num) {
      if (num <= 1) return false;
      if (num <= 3) return true;
      if (num % 2 === 0 || num % 3 === 0) return false;
      let i = 5;
      while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
      }
      return true;
    }
  
    static nesimoPrimo(n) {
      let count = 0;
      let num = 2;
      while (count < n) {
        if (Calculator.esPrimo(num)) {
          count++;
        }
        num++;
      }
      return num - 1;
    }
  
    static fibonacci(n) {
      if (n <= 1) return n;
      let a = 0;
      let b = 1;
      for (let i = 2; i <= n; i++) {
        const temp = a + b;
        a = b;
        b = temp;
      }
      return b;
    }
  
    static calcularSerie(n) {
      const nesimoPrimo = Calculator.nesimoPrimo(n);
      const triangular = Calculator.triangular(n + 1);
      const fibonacci = Calculator.fibonacci(n + 1);
      return 2 * triangular - 2 * nesimoPrimo + fibonacci;
    }
  }
  
  export default Calculator;
  