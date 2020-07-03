import { UserRes } from '../../signUp/redux/types'

export const userExistMock: UserRes = {
  userId: 0,
  username: 'mock username',
  __v: 0,
  _id: '',
  password: ''
}
export const userNotExistMock: UserRes = {
  userId: 0,
  username: '',
  __v: 0,
  _id: '',
  password: ''
}