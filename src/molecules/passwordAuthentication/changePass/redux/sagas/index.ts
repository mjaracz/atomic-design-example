import { SagaAction } from 'molecules/passwordAuthentication/changePass/redux/types.';
import { call, cancelled, put, takeLatest } from 'redux-saga/effects';
import { putChangePass } from 'utils/api';

function* sagaChangePass(action: SagaAction) {
  const abortController = new AbortController();
  try {
    const data = yield call(
      putChangePass,
      action.token,
      action.body,
      abortController.signal
    );
    yield put({ type: 'FETCH_CHANGE_PASS', payload: data });
  } catch (e) {
    yield put({ type: 'ERROR_CHANGE_PASS', payload: e });
    if (yield cancelled()) abortController.abort();
  }
}

export function* changePassWatcher() {
  yield takeLatest('PUT_CHANGE_PASS', sagaChangePass);
}
