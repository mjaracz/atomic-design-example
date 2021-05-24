import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../../redux/types';
import { deleteProduct, getProducts } from '../redux';

export const useProductsList = () => {
  const dispatch = useDispatch();
  const {
    products: { list, loading, error },
    signIn: { jwtToken },
    productDelete,
  } = useSelector((state: RootState) => state);

  useEffect(() => {
    if (jwtToken) dispatch(getProducts(jwtToken));
  }, [jwtToken, dispatch]);

  const deleteItem = async (productId: number) => {
    await dispatch(deleteProduct({ productId }));
    await dispatch(getProducts(jwtToken));
  };
  return {
    list,
    loading,
    error,
    jwtToken,
    productDelete,
    deleteItem,
  };
};
