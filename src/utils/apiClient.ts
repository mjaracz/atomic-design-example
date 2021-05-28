export class ApiClient {
  static readonly baseUrl = 'https://jsonplaceholder.typicode.com';

  static async get(endUrl: string, signal: AbortSignal) {
    return fetch(this.baseUrl + endUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      signal
    })
      .then(res => res.json())
      .then(data => {
        if (data.statusCode > 299) {
          throw new Error(`fetch posts error: ${data.statusCode}`);
        };
        return data;
      });
  }
}