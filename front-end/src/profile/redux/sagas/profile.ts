import { call, put, takeLatest, cancelled } from 'redux-saga/effects'
import { getUserProfile } from '../../../utils.api.fetch/'
import { SagaProfileAction } from '../types'

function* sagaUserProfile(action: SagaProfileAction) {
  const abortController = new AbortController()
  try {
    const data = yield call(getUserProfile, action.token, abortController.signal)
    yield put({ type: 'FETCH_PROFILE', payload: data })
  } catch (e) {
    if (yield cancelled()) abortController.abort()
    yield put({ type: 'PROFILE_ERROR', payload: e })
  }
}

export function* userProfileWatcher() {
  yield takeLatest('GET_USER_PROFILE', sagaUserProfile)
}
