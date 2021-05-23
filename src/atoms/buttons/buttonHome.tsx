import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '@material-ui/core';

import { useStyle } from './styled';
import { PropsButtonHome } from './types';

export const ButtonHome: FC<PropsButtonHome> = ({ label, path }) => {
  const { buttonHome } = useStyle();
  return (
    <Button
      className={buttonHome}
      color="primary"
      component={Link}
      to={path}
      variant="contained"
    >
      {label}
    </Button>
  );
};
