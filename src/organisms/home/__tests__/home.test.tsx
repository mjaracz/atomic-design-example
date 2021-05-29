import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { render } from '@testing-library/react';
import { Home } from 'organisms/home/home';


describe('<Home/>', () => {
  it('should be defined and match snapshot', () => {
    const theme = createMuiTheme();
    const { baseElement } = render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Home />
        </ThemeProvider>
      </BrowserRouter>
    );

    expect(baseElement).toBeDefined();
    expect(baseElement).toMatchSnapshot();
  });
});
