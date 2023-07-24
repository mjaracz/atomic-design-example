import { act, renderHook } from '@testing-library/react-hooks';
import { useSignIn } from '../../hooks/useSignIn';
import { UnitTestWrapper } from 'utils/unitTest/unitTestWrapper';

import * as checkEmailUtils from 'utils/validation/checkEmail';
import * as checkPasswordUtils from 'utils/validation/checkPassword';

describe('hooks/useSignIn', () => {
  let spyOnCheckEmailUtils: jest.SpyInstance;
  let spyOnCheckPasswordUtils: jest.SpyInstance;
  let testedHook;
  beforeEach(() => {
    testedHook = renderHook(() => useSignIn(), {
      wrapper: UnitTestWrapper,
    }).result;
    spyOnCheckEmailUtils = jest.spyOn(checkEmailUtils, 'checkEmail');
    spyOnCheckPasswordUtils = jest.spyOn(checkPasswordUtils, 'checkPassword');
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('saveEmail function', () => {
    describe('when got correct event', () => {
      it('should set new email value', async () => {
        await act(() => {
          testedHook.current.saveEmail({
            target: { value: 'example@mail.com' },
          });
        });
        expect(testedHook.current.email).toEqual('example@mail.com');
      });
    });
    describe('when got incorrect event', () => {
      it('should not set new email value', async () => {
        await act(() => {
          testedHook.current.saveEmail({ target: 'incorrect event' });
        });
        expect(testedHook.current.email).toEqual('');
      });
    });
  });

  describe('savePassword function', () => {
    describe('when got correct event', () => {
      it('should set new password value', async () => {
        await act(() => {
          testedHook.current.savePassword({
            target: { value: 'exampleMockPassword' },
          });
        });
        expect(testedHook.current.password).toEqual('exampleMockPassword');
      });
    });
    describe('when got incorrect event', () => {
      it('should not set new email value', async () => {
        await act(() => {
          testedHook.current.savePassword({ target: 'incorrect event' });
        });
        expect(testedHook.current.password).toEqual('');
      });
    });
  });

  describe('sendSignInReq function', () => {
    it('should check email and password', async () => {
      spyOnCheckEmailUtils.mockImplementation(() => ({ isError: true, message: 'email is incorrect' }));
      spyOnCheckEmailUtils.mockImplementation(() => ({ isError: true, message: 'email is incorrect' }));
      await act(() => {
        testedHook.current.checkBeforeSend();
        testedHook.current.sendSignInReq();
      });

      expect(spyOnCheckEmailUtils).toHaveBeenCalled();
      expect(spyOnCheckPasswordUtils).toHaveBeenCalled();
    });
  });
});
