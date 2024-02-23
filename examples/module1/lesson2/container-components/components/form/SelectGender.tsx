import React from 'react';
import BaseSelect from '../ui/BaseSelect';

export default function ({
  gender,
  setGender,
}: {
  gender: string;
  setGender: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <BaseSelect
      label="Gender"
      value={gender}
      onChange={setGender}
      items={[
        { label: 'Any Gender', value: '' },
        { label: 'Female', value: 'female' },
        { label: 'Male', value: 'male' },
        { label: 'Genderless', value: 'genderless' },
        { label: 'Unknown', value: 'unknown' },
      ]}
    />
  );
}
