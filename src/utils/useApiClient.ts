export function useApiClient() {
  const baseUrl = 'https://jsonplaceholder.typicode.com';

  const get = async (endUrl: string) =>
    fetch(baseUrl + endUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.statusCode > 299) {
          throw new Error(`fetch posts error: ${data.statusCode}`);
        };
        return data;
      });

  return {
    get,
    baseUrl,
  };
}
