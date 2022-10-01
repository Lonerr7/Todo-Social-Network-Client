import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { authAPI } from '../api/api';
import { activeLsNumbers } from '../types/appTypes';
import { AuthState, User } from '../types/reduxTypes';
import {
  LoginFormInitialValues,
  RegisterFormInitialValues,
} from '../types/FormikTypes';
import { changePassword, deleteMyProfile, updateMe } from './myselfSlice';

export const signUserUp = createAsyncThunk(
  'auth/signUserUp',
  async (userData: RegisterFormInitialValues, { rejectWithValue }) => {
    try {
      const response = await authAPI.signUp(userData);

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

export const logUserIn = createAsyncThunk(
  'auth/logUserIn',
  async (userData: LoginFormInitialValues, { rejectWithValue }) => {
    try {
      const response = await authAPI.logIn(userData);

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

export const getMe = createAsyncThunk(
  'auth/getMe',
  async (_, { rejectWithValue }) => {
    try {
      const response = await authAPI.getMe();

      return response.data.data.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logOut',
  async (_, { dispatch }) => {
    localStorage.removeItem('token');
    // removing active menu numbers from ls
    localStorage.removeItem(activeLsNumbers.MENU_NUM);
    localStorage.removeItem(activeLsNumbers.SETTINGS_NUM);

    dispatch(getMe());
  }
);

const initialState: AuthState = {
  user: null,
  isFetching: false,
  isGetMeFetching: false,
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

    [getMe.pending.type]: (state) => {
      state.isGetMeFetching = true;
    },
    [getMe.fulfilled.type]: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isGetMeFetching = false;
    },
    [getMe.rejected.type]: (state) => {
      state.user = null;
      state.isGetMeFetching = false;
    },

    [updateMe.fulfilled.type]: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },

    [changePassword.fulfilled.type]: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },

    [deleteMyProfile.fulfilled.type]: (state) => {
      state.user = null;
    },
  },
});

export const { clearErrorMsg } = authSlice.actions;
export default authSlice.reducer;
