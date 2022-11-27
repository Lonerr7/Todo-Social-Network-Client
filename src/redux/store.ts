import { configureStore } from '@reduxjs/toolkit';
import appSlice from './appSlice';
import authSlice from './authSlice';
import formsSlice from './formsSlice';
import popupSlice from './popupSlice';
import todoSlice from './todoSlice';
import myselfSlice from './myselfSlice';
import usersSlice from './usersSlice';
import chatSlice from './chatSlice';
import forgotPasswordSlice from './passwordSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    myslef: myselfSlice,
    users: usersSlice,
    app: appSlice,
    forms: formsSlice,
    popup: popupSlice,
    todo: todoSlice,
    chat: chatSlice,
    password: forgotPasswordSlice,
  },
  middleware: (getDefMiddleware) =>
    getDefMiddleware({
      serializableCheck: false,
    }),
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
