import { SagaAction } from 'molecules/passwordAuthentication/rememberPass/redux/types';
import { call, cancelled, put, takeLatest } from 'redux-saga/effects';
import { getRememberPass } from 'utils/api';

function* sagaRememberPass(action: SagaAction) {
  const abortController = new AbortController();
  try {
    const data = yield call(
      getRememberPass,
      action.username,
      abortController.signal
    );
    yield put({ type: 'FETCH_REMEMBER_PASS', payload: data.message });
  } catch (e) {
    if (yield cancelled()) abortController.abort();
    yield put({ type: 'ERROR_REMEMBER_PASS', payload: e });
  }
}

export function* rememberPassWatcher() {
  yield takeLatest('GET_REMEMBER_PASS', sagaRememberPass);
}
