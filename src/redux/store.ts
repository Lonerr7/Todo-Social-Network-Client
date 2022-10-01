import { configureStore } from '@reduxjs/toolkit';
import appSlice from './appSlice';
import authSlice from './authSlice';
import formsSlice from './formsSlice';
import popupSlice from './areYouSurePopupSlice';
import todoSlice from './todoSlice';
import myselfSlice from './myselfSlice';
import errorMessagesSlice from './errorMessagesSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    myslef: myselfSlice,
    app: appSlice,
    forms: formsSlice,
    popup: popupSlice,
    todo: todoSlice,
    errors: errorMessagesSlice,
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
