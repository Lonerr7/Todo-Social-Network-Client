import { configureStore, combineReducers } from '@reduxjs/toolkit';
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
import storage from 'redux-persist/lib/storage';
import appSlice from './appSlice';
import authSlice from './authSlice';
import formsSlice from './formsSlice';
import popupSlice from './popupSlice';
import todoSlice from './todoSlice';
import myselfSlice from './myselfSlice';
import usersSlice from './usersSlice';
import chatSlice from './chatSlice';
import forgotPasswordSlice from './passwordSlice';
import currentTodoSlice from './currentTodoSlice';
import progressBarSlice from './progressBarSlice';
import themeSlice from './themeSlice';

const rootReducer = combineReducers({
  auth: authSlice,
  myslef: myselfSlice,
  users: usersSlice,
  app: appSlice,
  forms: formsSlice,
  popup: popupSlice,
  todo: todoSlice,
  chat: chatSlice,
  password: forgotPasswordSlice,
  currentTodo: currentTodoSlice,
  progressBar: progressBarSlice,
  theme: themeSlice,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['theme'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefMiddleware) =>
    getDefMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

declare global {
  interface Window {
    store: any;
  }
}

window.store = store;
