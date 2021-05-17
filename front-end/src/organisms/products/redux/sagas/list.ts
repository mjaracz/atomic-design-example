import { call, cancelled, put, takeLatest } from 'redux-saga/effects';

import { getProducts } from '../../../../utils/api/getProducts';
import { SagaListAction } from '../types';

function* sagaProductsList(action: SagaListAction) {
  const abortController = new AbortController();
  try {
    const data = yield call(getProducts, action.token, abortController.signal);
    yield put({ type: 'FETCH_PRODUCTS', payload: data });
  } catch (e) {
    if (yield cancelled()) abortController.abort();
    yield put({ type: 'ERROR_PRODUCTS', payload: e });
  }
}

export function* productsListWatcher() {
  yield takeLatest('GET_PRODUCTS', sagaProductsList);
}
