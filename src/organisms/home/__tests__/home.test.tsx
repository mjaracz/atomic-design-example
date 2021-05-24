import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { render } from '@testing-library/react';
import { Home } from 'organisms/home/home';

describe('<Home/>', () => {
  it('should be defined and match snapshot', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    expect(baseElement).toBeDefined();
    expect(baseElement).toMatchSnapshot();
  });
});
