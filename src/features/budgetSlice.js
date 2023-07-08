import {createSlice} from '@reduxjs/toolkit';

const initialState = [
  {
    name: 'January 2023',
    plannedAmt: '20000',
    actualAmt: '15000',
  },
  {
    name: 'February 2023',
    plannedAmt: '20000',
    actualAmt: '25000',
  },
];

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
