import { DeleteQuery } from '../../organisms/products/redux/types';
import { constants } from './constants';

export const deleteProduct = (
  query: DeleteQuery,
  token: number,
  signal: AbortSignal
) => {
  const url = query.userId
    ? `${constants.baseUrl}/products/?user-id=${query.userId}`
    : `${constants.baseUrl}/products/?product-id=${query.productId}`
  
  return fetch(
    url,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: ` Bearer ${token}`,
      },
      signal,
    }
  )
    .then((res) => res.json())
    .then((data) => {
      if (data.statusCode >= 300) throw data.message;
      return data;
    })
};
