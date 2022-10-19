import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  isUserGeneralInfoSuccessfulySent: false,
  isUserMainInfoSuccessfulySent: false,
  isUserAdditionalInfoSuccessfulySent: true,
  isNewPasswordSuccessfulySent: false,
  isUserSucessfulyDeleted: false,
};

const appSlice = createSlice({
  name: 'forms',
  initialState,
  reducers: {
    showHideUserInfoSuccessMsg: (
      state,
      action: PayloadAction<{
        show: boolean;
        for: 'main' | 'general' | 'additional';
      }>
    ) => {
      switch (action.payload.for) {
        case 'general':
          state.isUserGeneralInfoSuccessfulySent = action.payload.show;
          break;
        case 'additional':
          state.isUserAdditionalInfoSuccessfulySent = action.payload.show;
          break;
        case 'main':
          state.isUserMainInfoSuccessfulySent = action.payload.show;
          break;
        default:
          break;
      }
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
