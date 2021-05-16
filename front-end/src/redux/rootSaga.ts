import { all } from 'redux-saga/effects'
import { signInWatcher } from 'molecules/usersActivity/signIn/redux/sagas'
import { signUpWatcher } from 'molecules/usersActivity/signUp/redux/sagas'
import { rememberPassWatcher } from 'molecules/passwordAuthentication/rememberPass/redux/sagas'
import { changePassWatcher } from 'molecules/passwordAuthentication/changePass/redux/sagas'
import { productsListWatcher, productsDeleteWatcher, productsAddWatcher } from 'organisms/products/redux/sagas/'
import { uploadWatcher, userProfileWatcher } from 'organisms/profile/redux/sagas'

export function* rootSaga() {
  yield all([signInWatcher(), signUpWatcher(), userProfileWatcher(), uploadWatcher(), rememberPassWatcher(), changePassWatcher(), productsListWatcher(), productsDeleteWatcher(), productsAddWatcher()])
}
