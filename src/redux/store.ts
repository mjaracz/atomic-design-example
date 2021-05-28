import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware, createStore } from 'redux';

import { rootReducer } from './rootReducer';
import { rootSaga } from './rootSaga';

export const store = configureStore({ reducer: rootReducer });
