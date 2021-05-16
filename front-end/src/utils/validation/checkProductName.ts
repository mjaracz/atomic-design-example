import { ValidationError } from 'atoms/textFields/types'

export const checkProductName = (name: string): ValidationError => {
  const regex = new RegExp('^\\w\\S{3,}$')
  if (!regex.test(name)) return { isError: true, message: 'incorrect, min. 3 char, without white space' }
  else return { isError: false }
}