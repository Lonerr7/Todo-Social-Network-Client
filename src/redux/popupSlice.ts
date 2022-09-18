import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  isAreYouSurePopupOpen: false,
  popupDispatchData: null as any, //!
};

const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    openPopup: (state, action: PayloadAction<any>) => {
      state.isAreYouSurePopupOpen = true;
      state.popupDispatchData = action.payload;
    },
    closePopup: (state) => {
      state.isAreYouSurePopupOpen = false;
      state.popupDispatchData = null;
    },
  },
  extraReducers: {},
});

export default popupSlice.reducer;
export const { openPopup, closePopup } = popupSlice.actions;
