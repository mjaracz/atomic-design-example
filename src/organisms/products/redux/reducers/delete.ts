import { ReducerAction } from '../types';

const initialState = {
  loading: false,
  delete: {},
  error: '',
};
export const deleteProductReducer = (
  state = initialState,
  action: ReducerAction
) => {
  switch (action.type) {
    case 'DELETE_PRODUCT': {
      return {
        ...state,
        loading: true,
      };
    }
    case 'FETCH_DELETE_PRODUCT': {
      return {
        ...state,
        loading: false,
        delete: action.payload,
      };
    }
    case 'ERROR_DELETE_PRODUCT': {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    case 'CLEAN_DELETE_PRODUCT': {
      return {
        loading: false,
        delete: {},
        error: '',
      };
    }
    default: {
      return state;
    }
  }
};
