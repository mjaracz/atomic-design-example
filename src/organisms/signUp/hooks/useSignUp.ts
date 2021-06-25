import { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ValidationError } from 'atoms/textFields/types';
// import { postSignUp } from 'molecules/usersActivity/signUp/redux/actions';
import { RootState } from 'redux/types';
import { checkEmail, checkNameSurname, checkPassword } from 'utils/validation';

export const useSignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  const [emailError, setEmailError] = useState<ValidationError>({
    isError: false,
  });
  const [passwordError, setPasswordError] = useState<ValidationError>({
    isError: false,
  });
  const [rePasswordError, setRePasswordError] = useState<ValidationError>({
    isError: false,
  });
  const [nameError, setNameError] = useState<ValidationError>({
    isError: false,
  });
  const [surnameError, setSurnameError] = useState<ValidationError>({
    isError: false,
  });
  // const { signUp } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const saveEmail = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) setEmail(event.target.value);
  };
  const savePassword = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) setPassword(event.target.value);
  };
  const saveRePassword = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) setRePassword(event.target.value);
  };
  const saveName = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) setName(event.target.value);
  };
  const saveSurname = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) setSurname(event.target.value);
  };

  const sendFormData = async () => {
    if (validateForm()) {
      // await dispatch(postSignUp({ username: email, password, name, surname }));
    }
  };
  const validateForm = () => {
    if (password !== rePassword)
      setRePasswordError({
        isError: true,
        message: 'repeat password don\'t match',
      });
    setRePasswordError(checkPassword(rePassword));
    setPasswordError(checkPassword(password));
    setEmailError(checkEmail(email));
    setNameError(checkNameSurname(name));
    setSurnameError(checkNameSurname(surname));
    return (
      !checkEmail(email).isError &&
      !checkPassword(password).isError &&
      !checkPassword(rePassword).isError &&
      !checkNameSurname(name).isError &&
      !checkNameSurname(surname).isError
    );
  };

  return {
    saveEmail,
    savePassword,
    saveRePassword,
    sendFormData,
    saveName,
    saveSurname,
    setRePassword,
    setPassword,
    setEmail,
    email,
    password,
    rePassword,
    emailError,
    passwordError,
    rePasswordError,
    nameError,
    surnameError,
    // signUp,
  };
};
