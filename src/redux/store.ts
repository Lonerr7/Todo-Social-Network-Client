import { configureStore } from '@reduxjs/toolkit';
import appSlice from './appSlice';
import authSlice from './authSlice';
import formsSlice from './formsSlice';
import popupSlice from './popupSlice';
import todoSlice from './todoSlice';
import userSlice from './userSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
    app: appSlice,
    forms: formsSlice,
    popup: popupSlice,
    todo: todoSlice,
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
