import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  activeMenuNum: 1,
  activeSettingsNum: 1,
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
  },
});

export default appSlice.reducer;
export const { setActiveMenuNum, setActiveSettingsNum } = appSlice.actions;
