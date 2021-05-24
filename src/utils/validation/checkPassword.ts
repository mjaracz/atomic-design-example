import { ValidationError } from '../../atoms/textFields/types';
import { isMatchRegExpPassword } from './isMatchRegExpPassword';

export const checkPassword = (password: string): ValidationError => {
  if (!password) return { isError: true, message: 'password is required' };
  if (!isMatchRegExpPassword(password))
    return { isError: true, message: 'password is too short' };
  return { isError: false };
};
