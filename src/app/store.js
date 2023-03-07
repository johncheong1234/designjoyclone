import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import scrollPortfolioReducer from '../features/scrollPortfolio/scrollPortfolioSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    scrollPortfolio: scrollPortfolioReducer,
  },
});
