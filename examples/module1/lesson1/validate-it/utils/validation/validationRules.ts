export const required = (value: any) => !!value;

export const isNumber = (value: any) => typeof value === 'number';

export const isLessThan = (value: number, { limit = 20 } = {}) => value < limit;

export const isGreaterThan = (value: number, { limit = 0 } = {}) =>
  value > limit;

export const isEven = (value: number) => value % 2 === 0;
