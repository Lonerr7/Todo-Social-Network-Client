import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { authAPI } from '../api/api';
import { ForgotPasswordInitialValues } from '../types/formikTypes';

export const submitForgotPasswordEmail = createAsyncThunk(
  'forgotPassword/submitForgotPasswordEmail',
  async (data: ForgotPasswordInitialValues, { rejectWithValue }) => {
    try {
      const response = await authAPI.sendToForgotPasswordEmail(data);

      return response.data.message;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

// ErrorMsg is in authSlice, because we render the form inside Page component which has universal errMsg for both log in and sign up

const initialState = {
  successMsg: '',
  isForgotPasswordFetching: false,
  isForgotPasswordSuccessfullySent: false,
};

const forgotPasswordSlice = createSlice({
  name: 'forgotPassword',
  initialState,
  reducers: {
    toggleIsForgotPasswordSent: (state, action: PayloadAction<boolean>) => {
      state.isForgotPasswordSuccessfullySent = action.payload;
    },
  },
  extraReducers: {
    [submitForgotPasswordEmail.pending.type]: (state) => {
      state.isForgotPasswordFetching = true;
    },
    [submitForgotPasswordEmail.fulfilled.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.isForgotPasswordFetching = false;
      state.isForgotPasswordSuccessfullySent = true;
      state.successMsg = action.payload;
    },
    [submitForgotPasswordEmail.rejected.type]: (state) => {
      state.isForgotPasswordFetching = false;
      state.isForgotPasswordSuccessfullySent = false;
    },
  },
});

export default forgotPasswordSlice.reducer;
export const { toggleIsForgotPasswordSent } = forgotPasswordSlice.actions;
