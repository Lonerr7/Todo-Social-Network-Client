import { nanoid } from 'nanoid';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ErrorPopupInitialState } from '../types/reduxTypes';

const initialState: ErrorPopupInitialState = {
  errors: [{ id: '1', message: 'An Error' }],
};

const errorMessagesSlice = createSlice({
  name: 'errors',
  initialState,
  reducers: {
    createErrorPopup: (state, action: PayloadAction<string>) => {
      state.errors.unshift({
        id: nanoid(),
        message: action.payload,
      });
    },
  },
});

export default errorMessagesSlice.reducer;
export const { createErrorPopup } = errorMessagesSlice.actions;
