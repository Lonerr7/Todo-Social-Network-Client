import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { deleteMyProfile } from './userSlice';

const initialState = {
  isPopupOpen: false,
  popupDispatchData: null as any, //!
};

const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    openPopup: (state, action: PayloadAction<any>) => {
      state.isPopupOpen = true;
      state.popupDispatchData = action.payload;
    },
    closePopup: (state) => {
      state.isPopupOpen = false;
      state.popupDispatchData = null;
    },
  },
  extraReducers: {
    [deleteMyProfile.fulfilled.type]: (state) => {
      state.isPopupOpen = false;
      state.popupDispatchData = null;
    },
    [deleteMyProfile.rejected.type]: (state) => {
      state.isPopupOpen = false;
      state.popupDispatchData = null;
    },
  },
});

export default popupSlice.reducer;
export const { openPopup, closePopup } = popupSlice.actions;
