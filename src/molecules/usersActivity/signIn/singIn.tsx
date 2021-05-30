import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { CircularProgress } from '@material-ui/core';
import { ButtonForm } from 'atoms/buttons';
import { DefaultField, PasswordField } from 'atoms/textFields';
import { useSignIn } from 'molecules/usersActivity/signIn/hooks/useSignIn';
import { useStyle } from 'molecules/usersActivity/signIn/styled';

export const SignIn: FC = () => {
  const {
    savePassword,
    saveEmail,
    sendSignInReq,
    passwordError,
    emailError,
    loading
  } = useSignIn();
  const { root, rememberPassLink } = useStyle();


  return (
    <div className={root}>
      {loading ? (
        <CircularProgress color="primary" size={114} />
      ) : (
        <>
          <DefaultField
            label="email / username"
            saveValue={saveEmail}
            validation={emailError}
          />
          <PasswordField
            label="password"
            savePassword={savePassword}
            validation={passwordError}
          />
          <Link className={rememberPassLink} to="/remember-pass">
            I don&apos;t remember password
          </Link>
          <ButtonForm label="sign in" sendFormData={sendSignInReq} />
        </>
      )}
    </div>
  );
};
