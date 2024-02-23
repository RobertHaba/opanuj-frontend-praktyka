import React from 'react';
import { SortCharacterBy } from '../../hooks/useCharacterSort';
import BaseSelect from '../ui/BaseSelect';

export default function ({
  sortOption,
  setSortOption,
}: {
  sortOption: string;
  setSortOption: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <BaseSelect
      label="Sort by"
      value={sortOption}
      onChange={setSortOption}
      items={[
        { label: 'Initial', value: '' },
        { label: 'Name', value: SortCharacterBy.name },
        { label: 'Created Date', value: SortCharacterBy.created },
      ]}
    />
  );
}
