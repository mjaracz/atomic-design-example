import { signInWatcher } from 'molecules/usersActivity/signIn/redux/sagas';
import { signUpWatcher } from 'molecules/usersActivity/signUp/redux/sagas';
import { all } from 'redux-saga/effects';

export function* rootSaga() {
  yield all([
    signInWatcher(),
    signUpWatcher(),
  ]);
}
