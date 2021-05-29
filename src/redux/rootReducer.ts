import postsReducer from 'molecules/posts/redux/postsSlice';
import { signInReducer } from 'molecules/usersActivity/signIn';
import { signUpReducer } from 'molecules/usersActivity/signUp';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  // signIn: signInReducer,
  // signUp: signUpReducer,
  posts: postsReducer,
});
