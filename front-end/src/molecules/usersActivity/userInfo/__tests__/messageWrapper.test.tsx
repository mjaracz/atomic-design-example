import React from 'react';

import { render } from '@testing-library/react';
import { MessageWrapper } from 'molecules/usersActivity/userInfo/messageWrapper';
import {
  userExistMock,
  userNotExistMock,
} from 'molecules/usersActivity/userInfo/mocks/user.mock';

describe('<MessageWrapper/>', () => {
  describe('when got addedUser.username props', () => {
    it('should match snapshot', () => {
      const { baseElement } = render(
        <MessageWrapper
          addedUser={userExistMock}
          updateUser={userNotExistMock}
        />
      );
      expect(baseElement).toMatchSnapshot();
    });
  });
  describe('when got updateUser.username props', () => {
    it('should match snapshot', () => {
      const { baseElement } = render(
        <MessageWrapper
          addedUser={userNotExistMock}
          updateUser={userExistMock}
        />
      );
      expect(baseElement).toMatchSnapshot();
    });
  });
});
