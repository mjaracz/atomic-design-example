import { combineReducers } from 'redux'
import { signInReducer } from '../signIn/redux/reducers'
import { signUpReducer } from '../signUp/redux/reducers'
import { rememberPassReducer } from '../rememberPass/redux/reducers'
import { changePassReducer } from '../changePass/redux/reducers'
import { deleteProductReducer, listProductsReducer } from '../products/redux/reducers'
import { uploadReducer, userProfileReducer } from '../profile/redux/reducers'

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
