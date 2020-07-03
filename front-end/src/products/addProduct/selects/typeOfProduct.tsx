import React, { FC } from 'react'
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'
import { ProductsTypeEnum } from '../types.d'
import { useStyle } from '../styled'
import { useAddForm } from '../hooks/useAddForm'

export const TypeOfProduct: FC = () => {
  const { selectForm } = useStyle()
  const { typeOfProduct, saveTypeOfProduct } = useAddForm()
  return (
    <FormControl className={selectForm}>
      <InputLabel>type of product</InputLabel>
      <Select
        value={typeOfProduct}
        onChange={saveTypeOfProduct}
      >
        {Object
          .keys(ProductsTypeEnum)
          .map((product, index) => <MenuItem key={index} value={product}>{product}</MenuItem>)
        }
      </Select>
    </FormControl>
  )
}
