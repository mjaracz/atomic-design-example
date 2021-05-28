export const putUpload = (file: FormData, signal: AbortSignal) =>
  fetch('http://localhost:8080/csv/upload', {
    method: 'PUT',
    body: file,
    signal,
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.statusCode >= 400) throw data.message;
      return data;
    });
