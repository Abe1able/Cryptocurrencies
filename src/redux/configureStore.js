/* eslint-disable */
import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import coinsSlice from './reducer/currencies';

const allReducers = combineReducers({
  coins: coinsSlice,
});

const store = configureStore({ reducer: allReducers }, applyMiddleware(thunk));

export default store;
