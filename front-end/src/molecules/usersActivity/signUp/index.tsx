import React, { FC } from 'react'
import { DefaultField, PasswordField } from 'atoms/textFields'
import { useStyle } from 'molecules/usersActivity/signUp/styled'
import { useSignUp } from 'molecules/usersActivity/signUp/hooks/useSignUp'
import { ButtonForm } from 'atoms/buttons'
import { CircularProgress } from '@material-ui/core'
import { Redirect } from 'react-router-dom'

export const SignUp: FC = () => {
  const { root } = useStyle()
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
    signUp: { loading, addedUser },
  } = useSignUp()

  if (addedUser.userId) {
    return <Redirect to="/user-info" />
  }
  return (
    <div className={root}>
      {loading ? (
        <CircularProgress color="primary" size={114} />
      ) : (
        <>
          <DefaultField label="email" saveValue={saveEmail} validation={emailError} />
          <DefaultField label="name" saveValue={saveName} validation={nameError} />
          <DefaultField label="surname" saveValue={saveSurname} validation={surnameError} />
          <PasswordField label="password" savePassword={savePassword} validation={passwordError} />
          <PasswordField label="repeat password" savePassword={saveRePassword} validation={rePasswordError} />
          <ButtonForm label="sing up" sendFormData={sendFormData} />
        </>
      )}
    </div>
  )
}
