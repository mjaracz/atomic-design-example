export interface ProductsState {
  loading: boolean
  list: Product[]
  addProduct: Product
  error: string
}

export interface DeleteProductState {
  loading: boolean
  delete: Product
  error: string
}

export interface Product {
  _id: string
  productId: number
  userId: number
  name: string
  price: number
  quantity: number
  description?: string
  currency: ProductsCurrency
  type: string
}

export interface ReqBodyProduct {
  userId: number
  name: string
  price: number
  quantity: number
  currency: string
  type: string
}

export interface ProductsCurrency {
  baseCurrency: string
  currency: string
  worth: number
}

export interface SagaListAction {
  type: string
  token: string
}

export interface SagaDeleteAction {
  type: string
  query: DeleteQuery
}

export interface ReducerAction {
  type: string
  payload: ReducerPayload
}

export type ReducerPayload = boolean | Product[]

export interface DeleteQuery {
  userId?: number
  productId?: number
}
