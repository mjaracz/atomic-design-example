import { ReducerUploadAction } from '../types';

const initialState = {
  loading: false,
  file: undefined,
  error: '',
};

export const uploadReducer = (
  state = initialState,
  action: ReducerUploadAction
) => {
  switch (action.type) {
    case 'POST_UPLOAD': {
      return {
        ...state,
        loading: true,
      };
    }
    case 'FETCH_UPLOAD': {
      return {
        ...state,
        loading: false,
        file: action.payload,
      };
    }
    case 'ERROR_UPLOAD': {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    case 'CLEAR_UPLOAD': {
      return {
        ...state,
        ...initialState,
      };
    }
    default: {
      return state;
    }
  }
};
