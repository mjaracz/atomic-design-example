export interface RememberPassState {
  loading: boolean
  message: string
  error: string
}

export interface SagaAction {
  type: string
  username: string
}

export interface ReducerAction {
  type: string
  payload: ReducerPayload
}

export type ReducerPayload = boolean | string
