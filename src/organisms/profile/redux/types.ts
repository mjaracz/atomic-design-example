export interface SagaProfileAction {
  type: string
  token: string
}

export interface ReducerProfileAction {
  type: string
  payload: ProfilePayload
}

export type ProfilePayload = boolean | string | Profile

export interface ReducerUploadAction {
  type: string
  payload: UploadPayload
}

export type UploadPayload = boolean | string | File

export interface UploadState {
  file: FormData
  loading: boolean
  error: string
}

export interface UserProfileState {
  loading: boolean
  profile: Profile
  error: string
}

export type Profile = {
  userId: number
  username: string
}
