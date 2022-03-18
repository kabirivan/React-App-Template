import { combineReducers } from '@reduxjs/toolkit';
import { reducer as counterReducer } from 'src/redux/slices/counter';

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
export type RootReducer = ReturnType<typeof rootReducer>
