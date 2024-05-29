import { validateWithInfo } from '../utils/validation';
import {
  required,
  isEven,
  isGreaterThan,
  isLessThan,
  isNumber,
} from '../utils/validation/validationRules.ts';

enum Limit {
  MaxQuantity = 100,
}

function validator() {
  const inputQuantity = document.getElementById(
    'input-quantity'
  ) as HTMLInputElement;
  const result = document.getElementById('result') as HTMLElement;

  const initButtons = () => {
    const buttonValidate = document.getElementById('button-validate');
    const buttonClear = document.getElementById('button-clear');

    buttonValidate?.addEventListener('click', handleValidate);
    buttonClear?.addEventListener('click', handleClearForm);
  };

  const handleValidate = () => {
    const { message } = validateInputQuantity();
    setValidationMessage(message);
  };

  const validateInputQuantity = () => {
    return validateWithInfo({
      value: Number(inputQuantity.value),
      rules: [
        { rule: isNumber },
        { rule: required },
        { rule: isEven },
        { rule: isGreaterThan },
        { rule: isLessThan, options: { limit: Limit.MaxQuantity } },
      ],
    });
  };

  const setValidationMessage = (message: string) => {
    result.innerText = message;
  };

  const handleClearForm = () => {
    clearInputValue();
    setValidationMessage('');
  };

  const clearInputValue = () => inputQuantity.value;

  initButtons();
}

export default validator;
