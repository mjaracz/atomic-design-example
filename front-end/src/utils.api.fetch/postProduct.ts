import { ReqBodyProduct } from '../products/redux/types'

export const postProduct = (body: ReqBodyProduct, token: string, signal: AbortSignal) =>
  fetch('http://localhost:8080/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: ` Bearer ${token}`
    },
    body: JSON.stringify(body),
    signal
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.statusCode >= 300) throw data.message
      return data
    })