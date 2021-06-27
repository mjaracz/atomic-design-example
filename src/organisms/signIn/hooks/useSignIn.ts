import { ChangeEvent, useState } from 'react';

import { ValidationError } from 'atoms/textFields/types';
import { checkEmail, checkPassword } from 'utils/validation';

export const useSignIn = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [passwordError, setPasswordError] = useState<ValidationError>({
    isError: false,
  });
  const [emailError, setEmailError] = useState<ValidationError>({
    isError: false,
  });

  const saveEmail = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) setEmail(event.target.value);
  };
  const savePassword = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) setPassword(event.target.value);
  };

  const sendSignInReq = async () => {
    if (checkBeforeSend()) {
      // send user validate data to api
    }
  };
  const checkBeforeSend = () => {
    setEmailError(checkEmail(email));
    setPasswordError(checkPassword(password));
    return !checkEmail(email).isError && !checkPassword(password).isError;
  };
  return {
    saveEmail,
    savePassword,
    sendSignInReq,
    passwordError,
    emailError,
    password,
    email,
    setEmailError,
    setPasswordError,
  };
};
