import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  isUserInfoSuccessfulySent: false,
  isNewPasswordSuccessfulySent: false,
};

const appSlice = createSlice({
  name: 'forms',
  initialState,
  reducers: {
    showHideUserInfoSuccessMsg: (state, action: PayloadAction<boolean>) => {
      state.isUserInfoSuccessfulySent = action.payload;
    },
    showHideChangePasswordSuccessMessage: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.isNewPasswordSuccessfulySent = action.payload;
    },
  },
});

export default appSlice.reducer;
export const {
  showHideUserInfoSuccessMsg,
  showHideChangePasswordSuccessMessage,
} = appSlice.actions;
