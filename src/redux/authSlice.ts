import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { authAPI } from '../api/api';
import { activeLsNumbers } from '../types/appTypes';
import { AuthState, User } from '../types/reduxTypes';
import {
  LoginFormInitialValues,
  RegisterFormInitialValues,
  UpdateUserFromInitialValues,
  UpdateUserPasswordInitialValues,
} from '../types/FormikTypes';
import {
  showHideChangePasswordSuccessMessage,
  showHideUserInfoSuccessMsg,
} from './formsSlice';

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

export const updateMe = createAsyncThunk(
  'auth/updateMe',
  async (
    newUserData: UpdateUserFromInitialValues,
    { rejectWithValue, dispatch }
  ) => {
    try {
      const response = await authAPI.updateMe(newUserData);

      console.log(response);

      // If OK, show success message in form. Then delete it after 5 sec.
      if (response.data.data.user) {
        dispatch(showHideUserInfoSuccessMsg(true));

        setTimeout(() => {
          dispatch(showHideUserInfoSuccessMsg(false));
        }, 5000);
      }

      return response.data.data.user;
    } catch (error: any) {
      console.log(error.response.data.message);
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const changePassword = createAsyncThunk(
  'auth/changePassword',
  async (
    passwords: UpdateUserPasswordInitialValues,
    { rejectWithValue, dispatch }
  ) => {
    try {
      const response = await authAPI.changeMyPassword(passwords);
      console.log(response);

      // If OK, show success message in form. Then delete it after 5 sec.
      if (response.data.data.user) {
        dispatch(showHideChangePasswordSuccessMessage(true));

        setTimeout(() => {
          dispatch(showHideChangePasswordSuccessMessage(false));
        }, 5000);
      }

      // save jwt to localstorage
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
      }

      return response.data.data.user;
    } catch (error: any) {
      console.log(error.response.data.message);
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
  isUserUpdateFetching: false,
  isChangingPasswordFetching: false,
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
    [updateMe.pending.type]: (state) => {
      state.isUserUpdateFetching = true;
      state.errorMsg = '';
    },
    [updateMe.fulfilled.type]: (state, action: PayloadAction<User>) => {
      state.isUserUpdateFetching = false;
      state.user = action.payload;
    },
    [updateMe.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isUserUpdateFetching = false;
      state.errorMsg = action.payload;
    },
    [changePassword.pending.type]: (state) => {
      state.isChangingPasswordFetching = true;
      state.errorMsg = '';
    },
    [changePassword.fulfilled.type]: (state, action: PayloadAction<User>) => {
      state.isChangingPasswordFetching = false;
      state.user = action.payload;
    },
    [changePassword.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isChangingPasswordFetching = false;
      state.errorMsg = action.payload;
    },
  },
});

export const { clearErrorMsg } = authSlice.actions;
export default authSlice.reducer;
