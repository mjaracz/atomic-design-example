import React, { FC } from 'react'
import { CircularProgress } from '@material-ui/core'
import { useStyle } from 'molecules/passwordAuthentication/rememberPass/styled'
import { DefaultField } from 'atoms/textFields'
import { useRememberPass } from 'molecules/passwordAuthentication/rememberPass/hooks/useRememberPass'
import { ButtonForm } from 'atoms/buttons'
import { Redirect } from 'react-router-dom'

export const RememberPass: FC = () => {
  const {
    sendEmail,
    saveEmail,
    emailError,
    rememberPass: { loading, message, error },
  } = useRememberPass()
  const { root, rememberText, textDistinction } = useStyle()
  if (message === 'email send') {
    return <Redirect exact={true} to="/remember-info" />
  }
  if (error === 'Unauthorized') {
    return <Redirect exact={true} to="/unauthorized" />
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
            Please enter your <span className={textDistinction}>email</span> in the field below
          </p>
          <DefaultField saveValue={saveEmail} validation={emailError} label="email" />
          <ButtonForm label="send email" sendFormData={sendEmail} />
        </>
      )}
    </div>
  )
}
