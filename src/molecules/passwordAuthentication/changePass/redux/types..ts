import { UserRes } from 'molecules/usersActivity/signUp/redux/types';

export interface ChangePassState {
  loading: boolean
  updateUser: UserRes
  error: string
}

export interface SagaAction {
  type: string
  token: string
  body: { password: string }
}

export interface ReducerAction {
  type: string
  payload: ReducerPayload
}

export type ReducerPayload = boolean | string
