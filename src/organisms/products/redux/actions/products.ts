import { ReqBodyProduct } from '../types';

export const getProducts = (token: string) => ({
  type: 'GET_PRODUCTS',
  token,
});

export const clearProducts = () => ({
  type: 'CLEAR_PRODUCTS',
});

export const addProducts = (body: ReqBodyProduct) => ({
  type: 'POST_PRODUCT',
  body,
});
