import React, { useState } from 'react';
import { f1, f2, f3, f4 } from './functions';
import BaseButton from './components/ui/button/BaseButton';

const App = () => {
  const [numA, setNumA] = useState<number>(0);
  const [numB, setNumB] = useState<number>(0);
  const [numC, setNumC] = useState<number | string>(0);

  const doWork = (func: (a: number, b: number) => number) => {
    setNumC(func(numA, numB));
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-4">
        <input
          type="number"
          className="rounded-md shadow-md p-4"
          value={numA}
          onChange={(e) => setNumA(parseFloat(e.target.value))}
        />
        <input
          type="number"
          className="rounded-md shadow-md p-4"
          value={numB}
          onChange={(e) => setNumB(parseFloat(e.target.value))}
        />
      </div>
      <div className="grid grid-cols-4 gap-x-4 my-4">
        <BaseButton onClick={() => doWork(f1)}>+</BaseButton>
        <BaseButton onClick={() => doWork(f2)}>-</BaseButton>
        <BaseButton onClick={() => doWork(f3)}>*</BaseButton>
        <BaseButton onClick={() => doWork(f4)}>/</BaseButton>
      </div>
      <div>Result: {numC}</div>
    </div>
  );
};

export default App;
