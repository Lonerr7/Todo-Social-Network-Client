import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  activeMenuNum: 1,
  activeSettingsNum: 1,
  isRegisterOrLoginPageOpen: false,
  activeTodoFilter: 1,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setActiveMenuNum: (state, action: PayloadAction<number>) => {
      state.activeMenuNum = action.payload;
      localStorage.setItem('activeMenuNum', action.payload.toString());
    },
    setActiveSettingsNum: (state, action: PayloadAction<number>) => {
      state.activeSettingsNum = action.payload;
      localStorage.setItem('activeSettingsNum', action.payload.toString());
    },
    toggleRegisterLoginPageOpening: (state, action: PayloadAction<boolean>) => {
      state.isRegisterOrLoginPageOpen = action.payload;
    },
    setActiveTodoFilter: (state, action: PayloadAction<number>) => {
      state.activeTodoFilter = action.payload;
    },
  },
});

export default appSlice.reducer;
export const {
  setActiveMenuNum,
  setActiveSettingsNum,
  toggleRegisterLoginPageOpening,
  setActiveTodoFilter,
} = appSlice.actions;
