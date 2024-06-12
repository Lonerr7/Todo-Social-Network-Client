import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { authAPI } from '../api/api';
import {
  ForgotPasswordInitialValues,
  ResetPasswordInitialValues,
} from '../types/formikTypes';

export const submitForgotPasswordEmail = createAsyncThunk(
  'password/submitForgotPasswordEmail',
  async (data: ForgotPasswordInitialValues, { rejectWithValue }) => {
    try {
      const response = await authAPI.sendToForgotPasswordEmail(data);

      return response.data.message;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const submitResetPassword = createAsyncThunk(
  'password/submitResetPassword',
  async (data: ResetPasswordInitialValues, { rejectWithValue }) => {
    try {
      const response = await authAPI.sendPasswordReset(data);

      // save jwt to localstorage
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
      }

      return response.data.data.user;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

// ErrorMsg is in authSlice, because we render the form inside Page component which has universal errMsg for both log in and sign up

const initialState = {
  isForgotPasswordFetching: false,
  isForgotPasswordSuccessfullySent: false,
  isResetPasswordFetching: false,
};

const forgotPasswordSlice = createSlice({
  name: 'password',
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
    [submitForgotPasswordEmail.fulfilled.type]: (state) => {
      state.isForgotPasswordFetching = false;
      state.isForgotPasswordSuccessfullySent = true;
    },
    [submitForgotPasswordEmail.rejected.type]: (state) => {
      state.isForgotPasswordFetching = false;
      state.isForgotPasswordSuccessfullySent = false;
    },

    [submitResetPassword.pending.type]: (state) => {
      state.isResetPasswordFetching = true;
    },
    [submitResetPassword.fulfilled.type]: (state) => {
      state.isResetPasswordFetching = false;
    },
    [submitResetPassword.rejected.type]: (state) => {
      state.isResetPasswordFetching = false;
    },
  },
});

export default forgotPasswordSlice.reducer;
export const { toggleIsForgotPasswordSent } = forgotPasswordSlice.actions;
