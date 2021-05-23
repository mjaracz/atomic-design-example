import { ReducerAction } from '../types';

const initialState = {
  loading: false,
  list: [],
  addProduct: undefined,
  error: '',
};
export const listProductsReducer = (
  state = initialState,
  action: ReducerAction
) => {
  switch (action.type) {
    case 'GET_PRODUCTS': {
      return {
        ...state,
        loading: true,
      };
    }
    case 'POST_PRODUCT': {
      return {
        ...state,
        loading: true,
      };
    }
    case 'FETCH_PRODUCTS': {
      return {
        ...state,
        loading: false,
        list: action.payload,
      };
    }
    case 'FETCH_ADD_PRODUCT': {
      return {
        ...state,
        loading: false,
        addProduct: action.payload,
      };
    }
    case 'ERROR_PRODUCTS': {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    case 'ERROR_ADD_PRODUCT': {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    case 'CLEAR_PRODUCTS': {
      return initialState;
    }
    default: {
      return state;
    }
  }
};
