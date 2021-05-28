import { SignInState } from 'molecules/usersActivity/signIn';
import { SignUpState } from 'molecules/usersActivity/signUp';

export interface RootState {
  signIn: SignInState
  signUp: SignUpState
}
