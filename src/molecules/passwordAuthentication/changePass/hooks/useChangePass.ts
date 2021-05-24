import { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ValidationError } from 'atoms/textFields/types';
import { putChangePass } from 'molecules/passwordAuthentication/changePass/redux/actions';
import { RootState } from 'redux/types';
import { checkPassword } from 'utils/validation';

export const useChangePass = (token: string) => {
  const [pass, setPass] = useState('');
  const [passError, setPassError] = useState<ValidationError>({
    isError: false,
  });
  const {
    changePass: { updateUser, loading, error },
    signIn: { jwtToken },
  } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const savePass = (event: ChangeEvent<HTMLInputElement>) => {
    setPass(event.target.value);
  };
  const sendChangePass = async () => {
    setPassError(checkPassword(pass));
    if (!checkPassword(pass).isError)
      await dispatch(putChangePass(token, { password: pass }));
  };

  return {
    savePass,
    sendChangePass,
    passError,
    pass,
    updateUser,
    loading,
    error,
    jwtToken,
  };
};
