import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { render } from '@testing-library/react';
import { Unauthorized } from 'molecules/passwordAuthentication/unauthorized/index';

describe('<Unauthorized />', () => {
  it('should be defined and match snapshot', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <Unauthorized />
      </BrowserRouter>
    );
    expect(baseElement).toBeDefined();
    expect(baseElement).toMatchSnapshot();
  });
});
