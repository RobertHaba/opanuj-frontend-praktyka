import { useState } from 'react';
import BaseButton from './components/ui/button/BaseButton';
import BaseInputNumber from './components/ui/form/input/BaseInputNumber';
import {
  CalculationFn,
  add,
  divide,
  multiply,
  subtract,
} from './utils/calc/calculation';
import { canDivide, hasValue, ValidationRule } from './utils/calc/rules';

const App = () => {
  const [firstValue, setFirstValue] = useState<number | string>(0);
  const [secondValue, setSecondValue] = useState<number | string>(0);

  const [result, setResult] = useState<number>(0);

  const [validationErrorMsg, setValidationErrorMsg] = useState<string>('');

  const config = [
    { label: '+', operationFn: add, rules: [hasValue] },
    { label: '-', operationFn: subtract, rules: [hasValue] },
    { label: '*', operationFn: multiply, rules: [hasValue] },
    { label: '/', operationFn: divide, rules: [hasValue, canDivide] },
  ];

  const handleCalc = (operation: CalculationFn, rules: ValidationRule[]) => {
    const foundInvalid = rules.find(
      (rule) => !rule.validate(firstValue, secondValue)
    );

    if (foundInvalid) {
      setValidationErrorMsg(foundInvalid.errorMessage);
      return;
    }

    if (validationErrorMsg) setValidationErrorMsg('');

    const result = operation(parseFloat(firstValue), parseFloat(secondValue));
    setResult(result);
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-4">
        <BaseInputNumber
          value={firstValue}
          onInput={(value) => setFirstValue(value)}
        />

        <BaseInputNumber
          value={secondValue}
          onInput={(value) => setSecondValue(value)}
        />
      </div>

      <div className="grid grid-cols-4 gap-x-4 my-4">
        {config.map(({ label, operationFn, rules }, idx) => (
          <BaseButton key={idx} onClick={() => handleCalc(operationFn, rules)}>
            {label}
          </BaseButton>
        ))}
      </div>

      {validationErrorMsg ? (
        <div className="text-red-500">{validationErrorMsg}</div>
      ) : (
        <div>Result: {result}</div>
      )}
    </div>
  );
};

export default App;
