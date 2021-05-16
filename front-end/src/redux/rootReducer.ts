import { combineReducers } from 'redux'
import { signInReducer } from 'molecules/usersActivity/signIn/redux/reducers'
import { signUpReducer } from 'molecules/usersActivity/signUp/redux/reducers'
import { rememberPassReducer } from 'molecules/passwordAuthentication/rememberPass/redux/reducers'
import { changePassReducer } from 'molecules/passwordAuthentication/changePass/redux/reducers'
import { deleteProductReducer, listProductsReducer } from 'organisms/products/redux/reducers'
import { uploadReducer, userProfileReducer } from 'organisms/profile/redux/reducers'

export const rootReducer = combineReducers({
  signIn: signInReducer,
  signUp: signUpReducer,
  userProfile: userProfileReducer,
  rememberPass: rememberPassReducer,
  changePass: changePassReducer,
  products: listProductsReducer,
  productDelete: deleteProductReducer,
  upload: uploadReducer,
})
