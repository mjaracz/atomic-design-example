import { constants } from "./constants";

export const putUpload = (file: FormData, signal: AbortSignal) =>
  fetch(`${constants.baseUrl}/csv/upload`, {
    method: 'PUT',
    body: file,
    signal,
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.statusCode >= 400) throw data.message;
      console.log(data);
      return data;
    });
