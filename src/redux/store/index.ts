import type { TypedUseSelectorHook, } from 'react-redux';
import type { ThunkAction } from 'redux-thunk';
import type { Action } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import { encryptTransform } from 'redux-persist-transform-encrypt';
import { useDispatch as useReduxDispatch, useSelector as useReduxSelector } from 'react-redux';
import rootReducer, { AppReducer } from './rootReducer';
import thunk from 'redux-thunk';
import { pokemonApi } from 'src/services/pokemonService';

import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const encryptor = encryptTransform({
  secretKey: process.env.REACT_APP_REDUX_SECRET_KEY,
  onError(error) {
    // Handle the error.
  },
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  transforms: [encryptor],
  blacklist: [
    pokemonApi.reducerPath,
  ],
  whiteList: []
};

const persistedReducer = persistReducer<AppReducer>(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(
    thunk,
    pokemonApi.middleware
  ),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
export const useDispatch = () => useReduxDispatch<AppDispatch>();
