import React, { FC } from 'react'
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'
import { useAddForm } from '../hooks/useAddForm'
import { ProductsTypeEnum } from '../types'
import { useStyle } from '../styled'

export const ProductType: FC = () => {
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
