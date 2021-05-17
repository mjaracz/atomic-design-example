import { call, cancelled, put, select, takeLatest } from 'redux-saga/effects';

import { RootState } from '../../../../redux/types';
import { deleteProduct } from '../../../../utils/api/deleteProduct';
import { SagaDeleteAction } from '../types';

function* sagaDeleteProduct(action: SagaDeleteAction) {
  const abortController = new AbortController();
  try {
    const { jwtToken } = yield select((state: RootState) => state.signIn);
    const data = yield call(
      deleteProduct,
      action.query,
      jwtToken,
      abortController.signal
    );
    yield put({ type: 'FETCH_DELETE_PRODUCT', payload: data });
  } catch (e) {
    if (yield cancelled()) abortController.abort();
    yield put({ type: 'ERROR_DELETE_PRODUCT', payload: e });
  }
}

export function* productsDeleteWatcher() {
  yield takeLatest('DELETE_PRODUCT', sagaDeleteProduct);
}
