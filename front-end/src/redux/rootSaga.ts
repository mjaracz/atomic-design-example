import { all } from 'redux-saga/effects'
import { signInWatcher } from '../signIn/redux/sagas'
import { signUpWatcher } from '../signUp/redux/sagas'
import { rememberPassWatcher } from '../rememberPass/redux/sagas'
import { changePassWatcher } from '../changePass/redux/sagas'
import { productsListWatcher, productsDeleteWatcher, productsAddWatcher } from '../products/redux/sagas/'
import { uploadWatcher, userProfileWatcher } from '../profile/redux/sagas'

export function* rootSaga() {
  yield all([signInWatcher(), signUpWatcher(), userProfileWatcher(), uploadWatcher(), rememberPassWatcher(), changePassWatcher(), productsListWatcher(), productsDeleteWatcher(), productsAddWatcher()])
}
