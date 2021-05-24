import { ChangeEvent } from 'react';

export type OnChangeCallback = (event: ChangeEvent<HTMLInputElement>) => void

export interface ValidationError {
  isError: boolean
  message?: string
}

export interface FieldProps {
  saveValue: OnChangeCallback
  validation: ValidationError
  label: string
}

export interface PasswordProps {
  savePassword: OnChangeCallback
  validation: ValidationError
  label: string
}
