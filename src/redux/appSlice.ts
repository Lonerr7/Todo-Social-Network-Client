import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  activeMenuNum: 1,
  activeSettingsNum: 1,
  isRegisterOrLoginPageOpen: false,
  activeTodoFilter: 1,
  activeUserTodoFilter: 1,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setActiveMenuNum: (state, action: PayloadAction<number>) => {
      state.activeMenuNum = action.payload;
    },
    setActiveSettingsNum: (state, action: PayloadAction<number>) => {
      state.activeSettingsNum = action.payload;
    },
    toggleRegisterLoginPageOpening: (state, action: PayloadAction<boolean>) => {
      state.isRegisterOrLoginPageOpen = action.payload;
    },
    setActiveTodoFilter: (state, action: PayloadAction<number>) => {
      state.activeTodoFilter = action.payload;
    },
    setActiveUserTodoFilter: (state, action: PayloadAction<number>) => {
      state.activeUserTodoFilter = action.payload;
    },
  },
});

export default appSlice.reducer;
export const {
  setActiveMenuNum,
  setActiveSettingsNum,
  toggleRegisterLoginPageOpening,
  setActiveTodoFilter,
  setActiveUserTodoFilter,
} = appSlice.actions;
