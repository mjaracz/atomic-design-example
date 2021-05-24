import { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ValidationError } from 'atoms/textFields/types';
import { postSignIn } from 'molecules/usersActivity/signIn/redux/actions';
import { RootState } from 'redux/types';
import { checkEmail, checkPassword } from 'utils/validation';

export const useSignIn = () => {
  const [goToProfile, setGoToProfile] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [passwordError, setPasswordError] = useState<ValidationError>({
    isError: false,
  });
  const [emailError, setEmailError] = useState<ValidationError>({
    isError: false,
  });
  const {
    signIn: { jwtToken, error, loading },
  } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error === 'Unauthorized') {
      setEmailError({ isError: true, message: 'email not found' });
      setPasswordError({
        isError: true,
        message: 'or incorrect password try again',
      });
    }
  }, [error]);

  const saveEmail = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) setEmail(event.target.value);
  };
  const savePassword = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) setPassword(event.target.value);
  };

  const sendSignInReq = async () => {
    if (checkBeforeSend()) {
      await dispatch(postSignIn({ username: email, password }));
      await setGoToProfile(true);
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
    error,
    loading,
    goToProfile,
    jwtToken,
  };
};
