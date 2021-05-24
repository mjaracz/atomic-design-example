import { Product } from './redux/types';

export interface ItemProps {
  deleteItem: (id: number) => void
  product: Product
}
