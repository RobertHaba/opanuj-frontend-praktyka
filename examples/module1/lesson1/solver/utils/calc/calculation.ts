export type CalculationFn = (a: number, b: number) => number;

export const add: CalculationFn = (a, b) => a + b;

export const subtract: CalculationFn = (a, b) => a - b;

export const multiply: CalculationFn = (a, b) => a * b;

export const divide: CalculationFn = (a, b) => (b !== 0 ? a / b : NaN);
