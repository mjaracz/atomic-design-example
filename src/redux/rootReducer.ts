import { signInReducer } from 'molecules/usersActivity/signIn/redux/reducers';
import { signUpReducer } from 'molecules/usersActivity/signUp/redux/reducers';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  signIn: signInReducer,
  signUp: signUpReducer,
});
