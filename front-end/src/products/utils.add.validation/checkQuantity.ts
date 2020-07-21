import { ValidationError } from '../../textFields/types'

export const checkQuantity = (quantity: string): ValidationError => {
  const regex = new RegExp('^\\d{1,8}$')
  if (!regex.test(quantity))
    return { isError: true,  message: 'incorrect, only number, min 1, max 8 char' }
  else
    return { isError: false }
}