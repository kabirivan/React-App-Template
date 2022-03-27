import { combineReducers } from '@reduxjs/toolkit';
import { reducer as counterReducer } from 'src/redux/slices/counter';
import { pokemonApi } from 'src/services/pokemonService';

const rootReducer = combineReducers({
  counter: counterReducer,
  [pokemonApi.reducerPath]: pokemonApi.reducer,
});

export default rootReducer;
export type RootReducer = ReturnType<typeof rootReducer>
