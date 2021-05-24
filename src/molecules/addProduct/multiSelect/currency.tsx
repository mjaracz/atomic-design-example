import React, { FC } from 'react';

import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

import { useAddForm } from '../hooks/useAddForm';
import { useStyle } from '../styled';
import { CurrencyEnum } from '../types';

export const Currency: FC = () => {
  const { selectForm } = useStyle();
  const { saveCurrency, currency } = useAddForm();
  return (
    <FormControl className={selectForm}>
      <InputLabel>currency</InputLabel>
      <Select onChange={saveCurrency} value={currency}>
        {Object.keys(CurrencyEnum).map((value, index) => {
          const keyMenuItem = `key${index}`;
          return (
            <MenuItem key={keyMenuItem} value={value}>
              {value}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};
