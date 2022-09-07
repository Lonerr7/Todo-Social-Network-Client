import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  activeMenuNum: 1,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setActiveMenuNum: (state, action: PayloadAction<number>) => {
      state.activeMenuNum = action.payload;
    },
  },
});

export default appSlice.reducer;
export const { setActiveMenuNum } = appSlice.actions;
