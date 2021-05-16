import { isMatchRegExpMail } from './isMatchRegExpMail'
import { ValidationError } from '../../atoms/textFields/types'

export function checkEmail(email: string): ValidationError {
  if (!email) return { isError: true, message: 'email is required' }
  if (!isMatchRegExpMail(email)) return { isError: true, message: 'email is incorrect' }
  return { isError: false }
}
