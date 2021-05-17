import { call, cancelled, put, select, takeLatest } from 'redux-saga/effects';

import { RootState } from '../../../../redux/types';
import { postProduct } from '../../../../utils/api/postProduct';

function* sagaAddProduct(action) {
  const abortController = new AbortController();
  try {
    const { jwtToken } = yield select((state: RootState) => state.signIn);
    const data = yield call(
      postProduct,
      action.body,
      jwtToken,
      abortController.signal
    );
    yield put({ type: 'FETCH_ADD_PRODUCT', payload: data });
  } catch (e) {
    if (yield cancelled()) abortController.abort();
    put({ type: 'ERROR_ADD_PRODUCT', payload: e });
  }
}

export function* productsAddWatcher() {
  yield takeLatest('POST_PRODUCT', sagaAddProduct);
}
