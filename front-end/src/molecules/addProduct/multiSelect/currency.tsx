import React, { FC } from 'react'
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'
import { useAddForm } from '../hooks/useAddForm'
import { useStyle } from '../styled'
import { CurrencyEnum } from '../types'

export const Currency: FC = () => {
  const { selectForm } = useStyle()
  const { saveCurrency, currency } = useAddForm()
  return (
    <FormControl className={selectForm}>
      <InputLabel>currency</InputLabel>
      <Select
        value={currency}
        onChange={saveCurrency}
      >
        {Object
          .keys(CurrencyEnum)
          .map((value, index) => <MenuItem key={index} value={value}>{value}</MenuItem>)
        }
      </Select>
    </FormControl>
  )
}