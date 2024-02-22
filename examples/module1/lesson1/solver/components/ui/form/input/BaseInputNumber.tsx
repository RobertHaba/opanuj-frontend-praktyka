import { ChangeEvent } from 'react';

interface Props {
  onInput: (value: number | string) => void;
  value: number | string;
}

const BaseInputNumber = ({ onInput, value }: Props) => {
  const getValue = (e: ChangeEvent<HTMLInputElement>) =>
    e.target.value === '' ? '' : parseFloat(e.target.value);

  return (
    <input
      type="number"
      value={value}
      className="rounded-md shadow-md p-4"
      onInput={(e) => onInput(getValue(e))}
    />
  );
};

export default BaseInputNumber;
