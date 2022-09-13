import { configureStore } from '@reduxjs/toolkit';
import appSlice from './appSlice';
import authSlice from './authSlice';
import formsSlice from './formsSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    app: appSlice,
    forms: formsSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

declare global {
  interface Window {
    store: any;
  }
}

window.store = store;
