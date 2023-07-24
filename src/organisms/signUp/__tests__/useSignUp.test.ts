import { RenderHookResult, act, renderHook, Renderer } from '@testing-library/react-hooks';
import { useSignUp } from '../hooks/useSignUp';
import { ValidationError } from '../../../atoms/textFields/types';
import { ChangeEvent } from 'react';

describe('hooks/useSignUp', () => {
  let testedHook: RenderHookResult<unknown, {
    setPassword: (value: (((prevState: string) => string) | string)) => void;
    nameError: ValidationError;
    saveRePassword: (event: ChangeEvent<HTMLInputElement>) => void;
    saveSurname: (event: ChangeEvent<HTMLInputElement>) => void;
    emailError: ValidationError;
    rePasswordError: ValidationError;
    savePassword: (event: ChangeEvent<HTMLInputElement>) => void;
    setRePassword: (value: (((prevState: string) => string) | string)) => void;
    surnameError: ValidationError;
    password: string;
    setEmail: (value: (((prevState: string) => string) | string)) => void;
    sendFormData: () => Promise<void>;
    rePassword: string;
    passwordError: ValidationError;
    saveEmail: (event: ChangeEvent<HTMLInputElement>) => void;
    saveName: (event: ChangeEvent<HTMLInputElement>) => void;
    email: string
  }, Renderer<unknown>>;

  beforeEach(() => {
    testedHook = renderHook(() => useSignUp());
  });
  afterAll(() => jest.clearAllMocks());


  describe('when saveEmail is call', () => {
    describe('with correct event', () => {
      it('should set correct state', () => {
        act(() =>
          testedHook.result.current.saveEmail({
            target: { value: 'mock value' },
          } as ChangeEvent<HTMLInputElement>)
        );
        expect(testedHook.result.current.email).toEqual('mock value');
      });
    });
    describe('with incorrect event', () => {
      it('should not set new state', () => {
        act(() => testedHook.result.current.saveEmail({ target: {} } as ChangeEvent<HTMLInputElement>));
        expect(testedHook.result.current.email).toEqual('');
      });
    });
  });

  describe('when savePassword is call', () => {
    describe('with correct event', () => {
      it('should set correct state', () => {
        act(() =>
          testedHook.result.current.savePassword({
            target: { value: 'mock value' },
          } as ChangeEvent<HTMLInputElement>)
        );
        expect(testedHook.result.current.password).toEqual('mock value');
      });
    });
    describe('with incorrect data', () => {
      it('should not set new state', () => {
        act(() => testedHook.result.current.savePassword({ target: {} }));
        expect(testedHook.result.current.password).toEqual('');
      });
    });
  });

  describe('when saveRePassword is call', () => {
    describe('with correct event', () => {
      it('should set correct state', () => {
        act(() =>
          testedHook.result.current.saveRePassword({
            target: { value: 'mock value' },
          } as ChangeEvent<HTMLInputElement>)
        );
        expect(testedHook.result.current.rePassword).toEqual('mock value');
      });
    });
    describe('with incorrect data', () => {
      it('should ', () => {
        act(() => testedHook.result.current.saveRePassword({ target: '' } as unknown as ChangeEvent<HTMLInputElement>));
        expect(testedHook.result.current.rePassword).toEqual('');
      });
    });
  });

  describe('when sendFormData is call', () => {
    describe('with incorrect password state', () => {
      it('should set equivalent password error state', () => {
        act(() => {
          testedHook.result.current.setPassword('j#');
          testedHook.result.current.sendFormData();
        });
        expect(testedHook.result.current.passwordError).toEqual({
          isError: true,
          message: 'password is required',
        });
      });
    });
    describe('with incorrect email state', () => {
      it('should set equivalent email error state', () => {
        act(() => {
          testedHook.result.current.setEmail('not correct email mock');
          testedHook.result.current.sendFormData();
        });
        expect(testedHook.result.current.emailError).toEqual({
          isError: true,
          message: 'email is required',
        });
      });
    });
  });
});
