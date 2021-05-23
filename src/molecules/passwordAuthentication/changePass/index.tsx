import React from 'react';
import { Redirect } from 'react-router-dom';

import { ButtonForm } from 'atoms/buttons';
import { PasswordField } from 'atoms/textFields';
import { useChangePass } from 'molecules/passwordAuthentication/changePass/hooks/useChangePass';
import { useStyle } from 'molecules/passwordAuthentication/changePass/styled';

export const ChangePass = ({
  match: {
    params: { token },
  },
}) => {
  const { savePass, passError, sendChangePass, error, updateUser } =
    useChangePass(token);
  const { root, text, textDistinction } = useStyle();

  if (updateUser.userId) {
    return <Redirect to="/user-info" />;
  }
  if (error === 'Unauthorized') {
    return <Redirect to="/unauthorized" />;
  }
  return (
    <div className={root}>
      <p className={text}>
        Change <span className={textDistinction}>Password</span>
      </p>
      <PasswordField
        label="password"
        savePassword={savePass}
        validation={passError}
      />
      <ButtonForm label="update" sendFormData={sendChangePass} />
    </div>
  );
};
