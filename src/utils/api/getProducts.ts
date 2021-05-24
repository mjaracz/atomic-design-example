import { constants } from "./constants";

export const getProducts = (token: string, signal: AbortSignal) =>
  fetch(`${constants.baseUrl}/products`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: ` Bearer ${token}`,
    },
    signal,
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.statusCode === 401) throw data.error;
      return data;
    });
