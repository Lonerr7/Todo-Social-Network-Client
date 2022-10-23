import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { authAPI } from '../api/api';
import { activeLsNumbers } from '../types/appTypes';
import { AuthState, User } from '../types/reduxTypes/authSliceTypes';
import {
  LoginFormInitialValues,
  RegisterFormInitialValues,
} from '../types/formikTypes';
import {
  changePassword,
  deleteMyProfile,
  sendMyAdditionalInfo,
  updateMyRegisterInfo,
  updateMyBio,
  updateMyMainInfo,
  updateMyContactInfo,
  updateMyBeliefsInfo,
} from './myselfSlice';

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

export const logUserIn = createAsyncThunk(
  'auth/logUserIn',
  async (userData: LoginFormInitialValues, { rejectWithValue, dispatch }) => {
    try {
      const response = await authAPI.logIn(userData);

      // save jwt to localstorage
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
      }

      await dispatch(getMe());
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

    await dispatch(getMe());
  }
);

const initialState: AuthState = {
  user: null,
  isFetching: false,
  isGetMeFetching: false,
  errorMsg: '',
  afterSignUp: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearErrorMsg: (state) => {
      state.errorMsg = '';
    },
    toggleAfterSignUp: (state, action: PayloadAction<boolean>) => {
      state.afterSignUp = action.payload;
    },
  },
  extraReducers: {
    [signUserUp.pending.type]: (state) => {
      state.isFetching = true;
      state.errorMsg = '';
    },
    [signUserUp.fulfilled.type]: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.user.bio = '';
      state.isFetching = false;
      state.afterSignUp = true;
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
      state.isFetching = false;
    },
    [logUserIn.rejected.type]: (state, action: PayloadAction<string>) => {
      state.errorMsg = action.payload;
      state.isFetching = false;
    },

    [logOut.fulfilled.type]: (state) => {
      state.afterSignUp = false;
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

    [updateMyRegisterInfo.fulfilled.type]: (
      state,
      action: PayloadAction<User>
    ) => {
      state.user = action.payload;
    },

    [updateMyBio.fulfilled.type]: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },

    [updateMyMainInfo.fulfilled.type]: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },

    [updateMyContactInfo.fulfilled.type]: (
      state,
      action: PayloadAction<User>
    ) => {
      state.user = action.payload;
    },

    [updateMyBeliefsInfo.fulfilled.type]: (
      state,
      action: PayloadAction<User>
    ) => {
      state.user = action.payload;
    },

    [sendMyAdditionalInfo.fulfilled.type]: (
      state,
      action: PayloadAction<User>
    ) => {
      state.afterSignUp = false;
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

export const { clearErrorMsg, toggleAfterSignUp } = authSlice.actions;
export default authSlice.reducer;
