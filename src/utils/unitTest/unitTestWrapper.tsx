import React, { FC, ReactNode } from 'react';
import { createTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from '../../redux/store';

interface PropsUnitTestWrapper {
  children: ReactNode
}

export const UnitTestWrapper: FC<PropsUnitTestWrapper> = ({ children }) => {
  const theme = createTheme();
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};
