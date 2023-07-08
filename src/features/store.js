import {configureStore} from '@reduxjs/toolkit';
import budgetReducer from './budgetSlice';

export default store = configureStore({
  reducer: {
    budget: budgetReducer,
  },
});
