import React, { FC } from 'react';

import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

import { useAddForm } from '../hooks/useAddForm';
import { useStyle } from '../styled';
import { ProductsTypeEnum } from '../types';

export const ProductType: FC = () => {
  const { selectForm } = useStyle();
  const { typeOfProduct, saveTypeOfProduct } = useAddForm();
  return (
    <FormControl className={selectForm}>
      <InputLabel>type of product</InputLabel>
      <Select onChange={saveTypeOfProduct} value={typeOfProduct}>
        {Object.keys(ProductsTypeEnum).map((product, index) => {
          const keyMenuItem = `key${index}`;
          return (
            <MenuItem key={keyMenuItem} value={product}>
              {product}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};
