import React, { FC } from 'react';
import { Redirect } from 'react-router-dom';

import { CircularProgress } from '@material-ui/core';
import { ButtonForm } from 'atoms/buttons';
import { DefaultField } from 'atoms/textFields';
import { useRememberPass } from 'molecules/passwordAuthentication/rememberPass/hooks/useRememberPass';
import { useStyle } from 'molecules/passwordAuthentication/rememberPass/styled';

export const RememberPass: FC = () => {
  const {
    sendEmail,
    saveEmail,
    emailError,
    rememberPass: { loading, message, error },
  } = useRememberPass();
  const { root, rememberText, textDistinction } = useStyle();
  if (message === 'email send') {
    return <Redirect exact to="/remember-info" />;
  }
  if (error === 'Unauthorized') {
    return <Redirect exact to="/unauthorized" />;
  }
  return (
    <div className={root}>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <p className={rememberText}>
            To remind the <span className={textDistinction}>password</span>.
          </p>
          <p className={rememberText}>
            Please enter your <span className={textDistinction}>email</span> in
            the field below
          </p>
          <DefaultField
            label="email"
            saveValue={saveEmail}
            validation={emailError}
          />
          <ButtonForm label="send email" sendFormData={sendEmail} />
        </>
      )}
    </div>
  );
};
