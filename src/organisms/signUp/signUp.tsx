import React, { FC } from 'react';

import { ButtonForm } from 'atoms/buttons';
import { DefaultField, PasswordField } from 'atoms/textFields';
import { useSignUp } from './hooks/useSignUp';
import { useStyle } from './styled';
// import { CircularProgress } from '@material-ui/core';

export const SignUp: FC = () => {
  const { root } = useStyle();
  const {
    savePassword,
    saveEmail,
    saveRePassword,
    sendFormData,
    saveName,
    saveSurname,
    emailError,
    passwordError,
    rePasswordError,
    nameError,
    surnameError,
    // signUp: { loading },
  } = useSignUp();

  return (
    <div className={root}>
      {/* {loading ? (
        <CircularProgress color="primary" size={114} />
      ) : ( */}
        <>
          <DefaultField
            label="email"
            saveValue={saveEmail}
            validation={emailError}
          />
          <DefaultField
            label="name"
            saveValue={saveName}
            validation={nameError}
          />
          <DefaultField
            label="surname"
            saveValue={saveSurname}
            validation={surnameError}
          />
          <PasswordField
            label="password"
            savePassword={savePassword}
            validation={passwordError}
          />
          <PasswordField
            label="repeat password"
            savePassword={saveRePassword}
            validation={rePasswordError}
          />
          <ButtonForm label="sing up" sendFormData={sendFormData} />
        </>
      {/* )} */}
    </div>
  );
};
