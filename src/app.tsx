import React from 'react';
import { Provider } from 'react-redux';

import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { Routing } from 'organisms/routing';
import { store } from 'redux/store';

function App() {
  const theme = createMuiTheme();
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routing />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
