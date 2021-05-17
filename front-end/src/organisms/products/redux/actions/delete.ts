import { DeleteQuery } from '../types';

export const deleteProduct = (query: DeleteQuery) => ({
  type: 'DELETE_PRODUCT',
  query,
});

export const cleanDeleteProduct = () => ({
  type: 'CLEAN_DELETE_PRODUCT',
});
