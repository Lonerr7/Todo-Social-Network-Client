import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  isUserInfoSuccessfulySent: false,
};

const appSlice = createSlice({
  name: 'forms',
  initialState,
  reducers: {
    showHideSuccessMsg: (state, action: PayloadAction<boolean>) => {
      state.isUserInfoSuccessfulySent = action.payload;
    },
  },
});

export default appSlice.reducer;
export const { showHideSuccessMsg } = appSlice.actions;
