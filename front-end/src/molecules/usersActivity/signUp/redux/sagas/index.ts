import { call, put, cancelled, takeLatest } from 'redux-saga/effects'
import { postSignUp } from 'utils/api'
import { SagaAction } from 'molecules/usersActivity/signUp/redux/types'

function* sagaSignUp(action: SagaAction) {
  const abortController = new AbortController()
  try {
    const data = yield call(postSignUp, action.body, abortController.signal)
    yield put({ type: 'FETCH_SIGN_UP', payload: data })
  } catch (e) {
    yield put({ type: 'ERROR_SIGN_UP', payload: e })
    if (yield cancelled()) abortController.abort()
  }
}

export function* signUpWatcher() {
  yield takeLatest('POST_SIGN_UP', sagaSignUp)
}
