import { constants } from "./constants";

export const getUserProfile = (token: string, signal: AbortSignal) =>
  fetch(`${constants.baseUrl}/profile`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: '*/*',
      Connection: 'keep-alive',
      Authorization: ` Bearer ${token}`,
    },
    signal,
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.statusCode === 401) throw data.error;
      else return data;
    });
