import {createSlice} from '@reduxjs/toolkit';

const initialState = [];

export const budgetSlice = createSlice({
  name: 'budget',
  initialState,
  reducers: {
    addBudget: (state, action) => {
      state.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const {addBudget} = budgetSlice.actions;

export default budgetSlice.reducer;
