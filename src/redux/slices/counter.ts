import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { AppThunk } from 'src/redux/store';

// Define a type for the slice state
interface CounterState {
  value: number
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 1,
};

export const slice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state: CounterState) => {
      state.value += 1;
    },
    decrement: (state: CounterState) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state: CounterState, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { reducer } = slice;

export const incrementAction = (): AppThunk => async (dispatch) : Promise<void> => {
  dispatch(slice.actions.increment());
};

export const decrementAction = (): AppThunk => async (dispatch) : Promise<void> => {
  dispatch(slice.actions.decrement());
};

export const incrementByAmountAction = (value: number): AppThunk => async (dispatch) : Promise<void> => {
  dispatch(slice.actions.incrementByAmount(value));
};

export default slice;
