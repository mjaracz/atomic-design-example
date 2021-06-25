import React from 'react';

import { render } from '@testing-library/react';
import { SignIn } from 'molecules/usersActivity/signIn/singIn';
import { UnitTestWrapper } from 'utils/unitTest/unitTestWrapper';

describe('<FormField/>', () => {
  describe('when StoreProvider was mount ', () => {
    it('should correct fire event and match the snapshot', () => {
      const { baseElement } = render(
        <UnitTestWrapper>
          <SignIn />
        </UnitTestWrapper>
      );

      expect(baseElement).toMatchSnapshot();
    });
  });
});
