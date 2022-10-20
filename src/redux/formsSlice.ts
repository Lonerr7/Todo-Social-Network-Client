import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  isUserRegisterInfoSuccessfulySent: false,
  isUserMainInfoSuccessfulySent: false,
  isUserAdditionalInfoSuccessfulySent: false,
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
        for: 'mainInfo' | 'generalInfo' | 'additionalInfo' | 'registerInfo';
      }>
    ) => {
      switch (action.payload.for) {
        case 'registerInfo':
          state.isUserRegisterInfoSuccessfulySent = action.payload.show;
          break;
        case 'additionalInfo':
          state.isUserAdditionalInfoSuccessfulySent = action.payload.show;
          break;
        case 'mainInfo':
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
