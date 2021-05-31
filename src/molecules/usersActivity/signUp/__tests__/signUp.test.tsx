import React from 'react';

import { render } from '@testing-library/react';
import { SignUp } from 'molecules/usersActivity/signUp/index';

import { UnitTestWrapper } from 'utils/unitTest/unitTestWrapper';

describe('<SignUp/>', () => {
  describe('when hook useSignUp is call', () => {
    it('should correctly render functional component ', () => {
      const { baseElement } = render(
        <UnitTestWrapper>
          <SignUp />
        </UnitTestWrapper>
      );

      expect(baseElement).toMatchSnapshot();
    });
  });
});
