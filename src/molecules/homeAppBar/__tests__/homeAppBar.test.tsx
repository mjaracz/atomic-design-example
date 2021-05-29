import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { render } from '@testing-library/react';
import { HomeAppBar } from 'molecules/homeAppBar/homeAppBar';
import { store } from 'redux/store';

describe('<HomeAppBar />', () => {
  it('should correctly render and match the snapshot', () => {
    const { baseElement } = render(
      <Provider store={store}>
        <MuiThemeProvider theme={createMuiTheme()}>
          <BrowserRouter>
            <HomeAppBar />
          </BrowserRouter>
        </MuiThemeProvider>
      </Provider>
    );

    expect(baseElement).toMatchSnapshot();
  });
});
