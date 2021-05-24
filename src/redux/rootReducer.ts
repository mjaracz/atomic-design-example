import { changePassReducer } from 'molecules/passwordAuthentication/changePass/redux/reducers';
import { rememberPassReducer } from 'molecules/passwordAuthentication/rememberPass/redux/reducers';
import { signInReducer } from 'molecules/usersActivity/signIn/redux/reducers';
import { signUpReducer } from 'molecules/usersActivity/signUp/redux/reducers';
import {
  deleteProductReducer,
  listProductsReducer,
} from 'organisms/products/redux/reducers';
import {
  uploadReducer,
  userProfileReducer,
} from 'organisms/profile/redux/reducers';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  signIn: signInReducer,
  signUp: signUpReducer,
  userProfile: userProfileReducer,
  rememberPass: rememberPassReducer,
  changePass: changePassReducer,
  products: listProductsReducer,
  productDelete: deleteProductReducer,
  upload: uploadReducer,
});
