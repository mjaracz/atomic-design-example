import { ReqBody } from 'molecules/usersActivity/signIn/redux/types'

export const postSignIn = (body: ReqBody) => ({
  type: 'POST_SIGN_IN',
  payload: body,
})
