const TRANSLATION = {
  VALID: 'Valid',
  INVALID: 'Invalid',
};

interface Validate {
  value: any;
  rules: { rule: Function; options?: object }[];
}

export const validate = ({ value, rules }: Validate) => {
  return rules.every(({ rule, options }) => rule(value, options));
};

export const validateWithInfo = (data: Validate) => {
  const isValid = validate(data);

  const { VALID, INVALID } = TRANSLATION;

  return {
    isValid,
    message: isValid ? VALID : INVALID,
  };
};
