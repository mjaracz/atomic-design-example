import { Product } from '../redux/types'

export const productMock: Product = {
  _id: '',
  productId: 0,
  userId: 0,
  name: 'mock name',
  price: 0,
  quantity: 0,
  description: '',
  currency: {
    baseCurrency: 'PLN',
    currency: 'EUR',
    worth: 0
  },
  type: 'furniture mock'
}