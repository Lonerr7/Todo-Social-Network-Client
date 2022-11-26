import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { authAPI } from '../api/api';
import { ForgotPasswordInitialValues } from '../types/formikTypes';

export const submitForgotPasswordEmail = createAsyncThunk(
  'forgotPassword/submitForgotPasswordEmail',
  async (data: ForgotPasswordInitialValues, { rejectWithValue }) => {
    try {
      const response = await authAPI.sendToForgotPasswordEmail(data);

      console.log(response);
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
  reducers: {},
  extraReducers: {
    [submitForgotPasswordEmail.pending.type]: (state) => {
      state.isForgotPasswordFetching = true;
    },
    [submitForgotPasswordEmail.fulfilled.type]: (state) => {
      state.isForgotPasswordFetching = false;
      state.isForgotPasswordSuccessfullySent = true;
    },
    [submitForgotPasswordEmail.rejected.type]: (state) => {
      state.isForgotPasswordFetching = false;
    },
  },
});

export default forgotPasswordSlice.reducer;
// export const {} = forgotPasswordSlice.actions;
