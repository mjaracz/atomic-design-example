import React, { FC } from 'react'
import { TextField } from '@material-ui/core'
import { useStyle } from './styled'
import { FieldProps } from './types'

export const Field: FC<FieldProps> = ({ validation: { isError, message }, saveValue, label }) => {
  const { textField } = useStyle()
  return <TextField data-testid="textField" className={textField} error={isError} helperText={message} onChange={saveValue} label={label} />
}
