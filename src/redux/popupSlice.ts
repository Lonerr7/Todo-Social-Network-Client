import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  isAreYouSurePopupOpen: false,
  popupDispatchData: null as any, //!
  isChangeAvatarPopupOpen: false,
};

const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    openAreYouSurePopup: (state, action: PayloadAction<any>) => {
      state.isAreYouSurePopupOpen = true;
      state.popupDispatchData = action.payload;
    },
    closeAreYouSurePopup: (state) => {
      state.isAreYouSurePopupOpen = false;
      state.popupDispatchData = null;
    },
    openPopup: (state, action: PayloadAction<keyof typeof initialState>) => {
      state[action.payload] = true;
    },
    closePopup: (state, action: PayloadAction<keyof typeof initialState>) => {
      state[action.payload] = false;
    },
  },
});

export default popupSlice.reducer;
export const {
  openAreYouSurePopup,
  closeAreYouSurePopup,
  openPopup,
  closePopup,
} = popupSlice.actions;
