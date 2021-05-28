import { SignInState } from 'molecules/usersActivity/signIn/redux/types';
import { SignUpState } from 'molecules/usersActivity/signUp/redux/types';

export interface RootState {
  signIn: SignInState
  signUp: SignUpState
}
