import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { currencyApi } from './data/data';

const store = configureStore({
  reducer: {
    [currencyApi.reducerPath]: currencyApi.reducer,
  },
  middleware: (getDefaultMiddiware) => getDefaultMiddiware().concat(currencyApi.middleware),
});

setupListeners(store.dispatch);
export default store;
