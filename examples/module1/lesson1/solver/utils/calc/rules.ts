export type ValidationRule = {
  validate: (a: number | string, b: number | string) => boolean;
  errorMessage: string;
};

export const canDivide: ValidationRule = {
  validate: (a, b) => b !== 0,
  errorMessage: "Can't divide by 0",
};

export const hasValue: ValidationRule = {
  validate: (a, b) => [a, b].every((value) => value !== ''),
  errorMessage: 'Values cannot be empty',
};
