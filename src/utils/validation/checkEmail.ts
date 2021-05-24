import { ValidationError } from '../../atoms/textFields/types';
import { isMatchRegExpMail } from './isMatchRegExpMail';

export function checkEmail(email: string): ValidationError {
  if (!email) return { isError: true, message: 'email is required' };
  if (!isMatchRegExpMail(email))
    return { isError: true, message: 'email is incorrect' };
  return { isError: false };
}
