import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { authAPI } from '../api/authAPI';
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

      console.log(response.data);

      return response.data.data.user;
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
  reducers: {},
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
  },
});

export const {} = authSlice.actions;
export default authSlice.reducer;
