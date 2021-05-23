import { DeleteQuery } from '../../organisms/products/redux/types';

export const deleteProduct = (
  query: DeleteQuery,
  token: number,
  signal: AbortSignal
) =>
  fetch(
    query.userId
      ? `http://localhost:8080/products/?user-id=${query.userId}`
      : `http://localhost:8080/products/?product-id=${query.productId}`,
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
    });
