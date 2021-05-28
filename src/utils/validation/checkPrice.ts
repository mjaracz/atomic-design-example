import { ValidationError } from 'atoms/textFields/types';

export function checkPrice(price: string): ValidationError {
  const regex = new RegExp('^\\d{1,6}$');
  if (!regex.test(price))
    return { isError: true, message: 'incorrect, only number, min 1, max 6' };
  return { isError: false };
}
