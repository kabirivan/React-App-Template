import { combineReducers } from '@reduxjs/toolkit';
import { reducer as counterReducer } from 'src/redux/slices/counter';
import { pokemonApi } from 'src/services/pokemonService';

const appReducer = combineReducers({
  counter: counterReducer,
  [pokemonApi.reducerPath]: pokemonApi.reducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'RESET_APP') {
    state = undefined;
  }
  return appReducer(state, action);
};

export const resetAppAction = () => (dispatch) => {
  dispatch({ type: 'RESET_APP' });
};

export type RootReducer = ReturnType<typeof rootReducer>;
export default rootReducer;
