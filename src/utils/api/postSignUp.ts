import { ReqBody } from 'molecules/usersActivity/signIn/redux/types';

export const postSignUp = (body: ReqBody, signal: AbortSignal) =>
  fetch('http://localhost:8080/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: '*/*',
      Connection: 'keep-alive',
    },
    body: JSON.stringify(body),
    signal,
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.statusCode === 401) throw data.message;
      else return data;
    });
