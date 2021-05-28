import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { fireEvent, render } from '@testing-library/react';
import { SignIn } from 'molecules/usersActivity/signIn/singIn';

import { StoreProvider } from '../../utils/unitTest/storeProvider';

describe('<FormField/>', () => {
  describe('when StoreProvider was mount ', () => {
    it('should correct fire event and match the snapshot', () => {
      const { baseElement } = render(
        <BrowserRouter>
          <StoreProvider>
            <SignIn />
          </StoreProvider>
        </BrowserRouter>
      );

      expect(baseElement).toBeDefined();
      expect(baseElement).toMatchSnapshot();
    });
  });
});
