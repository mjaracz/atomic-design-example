import { signInWatcher } from 'molecules/usersActivity/signIn';
import { signUpWatcher } from 'molecules/usersActivity/signUp';
import { all } from 'redux-saga/effects';

export function* rootSaga() {
  yield all([
    signInWatcher(),
    signUpWatcher(),
  ]);
}
