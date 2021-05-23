import React, { FC } from 'react';

import { TextField } from '@material-ui/core';

import { useStyle } from './styled';
import { PasswordProps } from './types';

export const PasswordField: FC<PasswordProps> = (props) => {
  const {
    validation: { isError, message },
    savePassword,
    label,
  } = props;
  const { textField } = useStyle();
  return (
    <TextField
      className={textField}
      data-testid="textField"
      error={isError}
      helperText={message}
      label={label}
      onChange={savePassword}
      type="password"
    />
  );
};
