import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { authAPI } from '../api/api';
import {
  LoginFormInitialValues,
  RegisterFormInitialValues,
} from '../types/FormikTypes';
import { AuthState, User } from '../types/reduxTypes';

export const signUserUp = createAsyncThunk(
  'auth/signUserUp',
  async (userData: RegisterFormInitialValues, { rejectWithValue }) => {
    try {
      const response = await authAPI.signUp(userData);

      // save jwt to localstorage
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
      }

      console.log(response.data);

      return response.data.data.user;
    } catch (error: any) {
      console.log(error.response.data.message);
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const logUserIn = createAsyncThunk(
  'auth/logUserIn',
  async (userData: LoginFormInitialValues, { rejectWithValue }) => {
    try {
      const response = await authAPI.logIn(userData);

      // save jwt to localstorage
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
      }

      console.log(response.data);

      return response.data.data.user;
    } catch (error: any) {
      console.log(error.response.data.message);
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const getMe = createAsyncThunk(
  'auth/getMe',
  async (_, { rejectWithValue }) => {
    try {
      const response = await authAPI.getMe();

      console.log(response.data);

      return response.data.data.data;
    } catch (error: any) {
      console.log(error.response.data.message);
      return rejectWithValue(error.response.data.message);
    }
  }
);

const initialState: AuthState = {
  user: null,
  isFetching: false,
  errorMsg: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearErrorMsg: (state) => {
      state.errorMsg = '';
    },
  },
  extraReducers: {
    [signUserUp.pending.type]: (state) => {
      state.isFetching = true;
      state.errorMsg = '';
    },
    [signUserUp.fulfilled.type]: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      console.log(action.payload);
      state.isFetching = false;
    },
    [signUserUp.rejected.type]: (state, action: PayloadAction<string>) => {
      state.errorMsg = action.payload;
      state.isFetching = false;
    },
    [logUserIn.pending.type]: (state) => {
      state.isFetching = true;
      state.errorMsg = '';
    },
    [logUserIn.fulfilled.type]: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isFetching = false;
    },
    [logUserIn.rejected.type]: (state, action: PayloadAction<string>) => {
      state.errorMsg = action.payload;
      state.isFetching = false;
    },
    [getMe.fulfilled.type]: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isFetching = false;
    },
    [getMe.rejected.type]: (state, action: PayloadAction<User>) => {
      // !
    },
  },
});

export const { clearErrorMsg } = authSlice.actions;
export default authSlice.reducer;
