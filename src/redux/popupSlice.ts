import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  isPopupOpen: false,
  popupDispatchData: null as any,
};

const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    openPopup: (state, action: PayloadAction<{ data: any }>) => {
      state.isPopupOpen = true;
      state.popupDispatchData = action.payload.data;
    },
  },
});

export default popupSlice.reducer;
export const { openPopup } = popupSlice.actions;
