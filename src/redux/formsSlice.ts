import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ShowHideFor } from '../types/reduxTypes/formsSliceTypes';

const initialState = {
  isUserRegisterInfoSuccessfulySent: false,
  isUserGeneralInfoSuccessfulySent: false,
  isUserContactInfoSuccessfulySent: false,
  isUserMainInfoSuccessfulySent: false,
  isUserAdditionalInfoSuccessfulySent: false,
  isNewPasswordSuccessfulySent: false,
  isUserSucessfulyDeleted: false,
};

const formSlice = createSlice({
  name: 'forms',
  initialState,
  reducers: {
    showHideUserInfoSuccessMsg: (
      state,
      action: PayloadAction<{
        show: boolean;
        for: ShowHideFor;
      }>
    ) => {
      switch (action.payload.for) {
        case 'registerInfo':
          state.isUserRegisterInfoSuccessfulySent = action.payload.show;
          break;
        case 'generalInfo':
          state.isUserGeneralInfoSuccessfulySent = action.payload.show;
          break;
        case 'contactInfo':
          state.isUserContactInfoSuccessfulySent = action.payload.show;
          break;
        case 'additionalInfo':
          state.isUserAdditionalInfoSuccessfulySent = action.payload.show;
          break;
        case 'mainInfo':
          state.isUserMainInfoSuccessfulySent = action.payload.show;
          break;
        case 'password':
          state.isNewPasswordSuccessfulySent = action.payload.show;
          break;
        default:
          break;
      }
    },
  },
});

export default formSlice.reducer;
export const { showHideUserInfoSuccessMsg } = formSlice.actions;
