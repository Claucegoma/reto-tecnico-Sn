import Calculator from '../src/components/Calculator';

describe('Calculator', () => {
  it('calculates the series for n = 0', () => {
    expect(Calculator.calcularSerie(0)).toBe(1);
  });

  it('calculates the series for n = 1', () => {
    expect(Calculator.calcularSerie(1)).toBe(3);
  });

  it('calculates the series for n = 2', () => {
    expect(Calculator.calcularSerie(2)).toBe(8);
  });

  it('calculates the series for n = 3', () => {
    expect(Calculator.calcularSerie(3)).toBe(13);
  });

  it('calculates the series for n = 4', () => {
    expect(Calculator.calcularSerie(4)).toBe(21);
  });

  it('calculates the series for n = 5', () => {
    expect(Calculator.calcularSerie(5)).toBe(28);
  });

  it('calculates the series for n = 6', () => {
    expect(Calculator.calcularSerie(6)).toBe(43);
  });

  it('calculates the series for n = 7', () => {
    expect(Calculator.calcularSerie(7)).toBe(59);
  });

  it('calculates the series for n = 8', () => {
    expect(Calculator.calcularSerie(8)).toBe(86);
  });

  it('calculates the series for n = 9', () => {
    expect(Calculator.calcularSerie(9)).toBe(119);
  });
});
