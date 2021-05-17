export interface SignInState {
  jwtToken: string
  loading: boolean
  error: string
}

export interface ReqBody {
  username: string
  password: string
}

export interface SagaTokenAction {
  type: string
  payload: ReqBody
}

export interface ReducerTokenAction {
  type: string
  payload: ReducerTokenPayload
}

export type ReducerTokenPayload = boolean | string
