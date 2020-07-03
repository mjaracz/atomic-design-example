export interface ProductsState {
  loading: boolean
  list: Product[]
  addProduct: object
  error: string
}

export interface DeleteProductState {
  loading: boolean
  delete: object
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
  payload: reducerPayload
}

export type reducerPayload = boolean | Product[]

export interface DeleteQuery {
  userId?: number
  productId?: number
}
