import { ChangePassState } from 'molecules/passwordAuthentication/changePass/redux/types.';
import { RememberPassState } from 'molecules/passwordAuthentication/rememberPass/redux/types';
import { SignInState } from 'molecules/usersActivity/signIn/redux/types';
import { SignUpState } from 'molecules/usersActivity/signUp/redux/types';
import {
  DeleteProductState,
  ProductsState,
} from 'organisms/products/redux/types';
import { UploadState, UserProfileState } from 'organisms/profile/redux/types';

export interface RootState {
  signIn: SignInState
  signUp: SignUpState
  userProfile: UserProfileState
  rememberPass: RememberPassState
  changePass: ChangePassState
  products: ProductsState
  productDelete: DeleteProductState
  upload: UploadState
}
