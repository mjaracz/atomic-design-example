export interface SagaProfileAction {
  type: string
  token: string
}

export interface ReducerProfileAction {
  type: string
  payload: profilePayload
}

export type profilePayload = boolean | string | profile

export interface ReducerUploadAction {
  type: string
  payload: uploadPayload
}

export type uploadPayload = boolean | string | File

export interface UploadState {
  file: FormData
  loading: boolean
  error: string
}

export interface UserProfileState {
  loading: boolean
  profile: profile
  error: string
}

export type profile = {
  userId: number
  username: string
}