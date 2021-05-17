import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import { StoreProvider } from '../../../utils/unitTest/storeProvider';
import { Profile } from '../index';

describe('<Profile/>', () => {
  it('should be defined and match snapshot', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <StoreProvider>
          <Profile />
        </StoreProvider>
      </BrowserRouter>
    );
    expect(baseElement).toBeDefined();
    expect(baseElement).toMatchSnapshot();
  });
});
