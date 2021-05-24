import React, { FC } from 'react';

import { TextField } from '@material-ui/core';

import { useStyle } from './styled';
import { FieldProps } from './types';

export const DefaultField: FC<FieldProps> = ({
  validation: { isError, message },
  saveValue,
  label,
}) => {
  const { textField } = useStyle();
  return (
    <TextField
      className={textField}
      data-testid="textField"
      error={isError}
      helperText={message}
      label={label}
      onChange={saveValue}
    />
  );
};
