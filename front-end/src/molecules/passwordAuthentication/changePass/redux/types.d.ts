import { UserRes } from 'molecules/usersActivity/signUp/redux/types'

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
  payload: reducerPayload
}

export type reducerPayload = boolean | string
