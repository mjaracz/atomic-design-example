import { ChangeEvent, useState } from 'react'
import { checkEmail } from 'utils/validation'
import { useDispatch, useSelector } from 'react-redux'
import { getRememberPass } from 'molecules/passwordAuthentication/rememberPass/redux/actions'
import { RootState } from 'redux/types'
import { ValidationError } from 'atoms/textFields/types'

export const useRememberPass = () => {
  const [emailError, setEmailError] = useState<ValidationError>({ isError: false })
  const [email, setEmail] = useState('')
  const { rememberPass } = useSelector((state: RootState) => state)
  const dispatch = useDispatch()

  const saveEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }
  const sendEmail = async () => {
    setEmailError(checkEmail(email))
    if (!checkEmail(email).isError) {
      await dispatch(getRememberPass(email))
    }
  }
  return {
    saveEmail,
    sendEmail,
    emailError,
    rememberPass,
  }
}
