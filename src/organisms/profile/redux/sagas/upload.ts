import { call, cancelled, put, takeLatest } from 'redux-saga/effects';

import { putUpload } from '../../../../utils/api';

function* sagaPostUpload(action) {
  const abortController = new AbortController();
  try {
    const data = yield call(putUpload, action.file, abortController.signal);
    console.log(data);
    yield put({ type: 'FETCH_UPLOAD', payload: data });
  } catch (e) {
    if (yield cancelled()) abortController.abort();
    yield put({ type: 'ERROR_UPLOAD', payload: e });
  }
}

export function* uploadWatcher() {
  yield takeLatest('POST_UPLOAD', sagaPostUpload);
}
