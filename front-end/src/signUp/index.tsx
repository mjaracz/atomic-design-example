import React, { FC } from 'react'
import { Field as TextField, PasswordField } from '../textFields'
import { useStyle } from './styled'
import { useSignUp } from './hooks/useSignUp'
import { ButtonForm } from '../buttons'
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
          <TextField label="email" saveValue={saveEmail} validation={emailError} />
          <TextField label="name" saveValue={saveName} validation={nameError} />
          <TextField label="surname" saveValue={saveSurname} validation={surnameError} />
          <PasswordField label="password" savePassword={savePassword} validation={passwordError} />
          <PasswordField label="repeat password" savePassword={saveRePassword} validation={rePasswordError} />
          <ButtonForm label="sing up" sendFormData={sendFormData} />
        </>
      )}
    </div>
  )
}
