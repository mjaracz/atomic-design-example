import { ReqBodyProduct } from '../../organisms/products/redux/types';
import { constants } from './constants';

export const postProduct = (
  body: ReqBodyProduct,
  token: string,
  signal: AbortSignal
) =>
  fetch(`${constants.baseUrl}/products`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: ` Bearer ${token}`,
    },
    body: JSON.stringify(body),
    signal,
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.statusCode >= 300) throw data.message;
      return data;
    });
