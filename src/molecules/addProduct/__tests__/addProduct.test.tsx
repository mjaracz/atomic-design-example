import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import { StoreProvider } from '../../../utils/unitTest/storeProvider';
import * as hook from '../hooks/useAddForm';
import { AddProduct } from '../index';

describe('<AddProduct/>', () => {
  let testedHook;
  beforeEach(() => {
    testedHook = jest.spyOn(hook, 'useAddForm');
  });
  it('should be defined, call useAddForm and match snapshot', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <StoreProvider>
          <AddProduct />
        </StoreProvider>
      </BrowserRouter>
    );
    expect(baseElement).toBeDefined();
    expect(testedHook).toHaveBeenCalled();
    expect(baseElement).toMatchSnapshot();
  });
});
