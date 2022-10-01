import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { userAPI } from '../api/api';
import { DeleteMePasswords } from '../types/axiosTypes';
import {
  UpdateUserFromInitialValues,
  UpdateUserPasswordInitialValues,
} from '../types/FormikTypes';
import { UserState } from '../types/reduxTypes';
import { setActiveMenuNum, setActiveSettingsNum } from './appSlice';
import { getMe } from './authSlice';
import {
  showHideChangePasswordSuccessMessage,
  showHideUserInfoSuccessMsg,
} from './formsSlice';

export const updateMe = createAsyncThunk(
  'auth/updateMe',
  async (
    newUserData: UpdateUserFromInitialValues,
    { rejectWithValue, dispatch }
  ) => {
    try {
      const response = await userAPI.updateMe(newUserData);

      // If OK, show success message in form. Then delete it after 5 sec.
      if (response.data.data.user) {
        dispatch(showHideUserInfoSuccessMsg(true));

        setTimeout(() => {
          dispatch(showHideUserInfoSuccessMsg(false));
        }, 5000);
      }

      return response.data.data.user;
    } catch (error: any) {
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
      const response = await userAPI.changeMyPassword(passwords);

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
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteMyProfile = createAsyncThunk(
  'auth/deleteMyProfile',
  async (passwords: DeleteMePasswords, { rejectWithValue, dispatch }) => {
    try {
      const response = await userAPI.deleteMe(passwords);

      if (!response.data.data) {
        await dispatch(getMe());
      }

      // reseting active menu fields in Menu and Settings submenu
      dispatch(setActiveMenuNum(1));
      dispatch(setActiveSettingsNum(1));

      return response.data.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

const initialState: UserState = {
  isUserUpdateFetching: false,
  isChangingPasswordFetching: false,
  isUserDeletingFetching: false,
  updateMeErrorMsg: '',
  changePasswordErrorMsg: '',
  deleteMyProfileErrorMsg: '',
};

const myselfSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetUserErrorMsgs: (state) => {
      state.updateMeErrorMsg = '';
      state.changePasswordErrorMsg = '';
      state.deleteMyProfileErrorMsg = '';
    },
  },
  extraReducers: {
    [updateMe.pending.type]: (state) => {
      state.isUserUpdateFetching = true;
      state.updateMeErrorMsg = '';
    },
    [updateMe.fulfilled.type]: (state) => {
      state.isUserUpdateFetching = false;
    },
    [updateMe.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isUserUpdateFetching = false;
      state.updateMeErrorMsg = action.payload;
    },

    [changePassword.pending.type]: (state) => {
      state.isChangingPasswordFetching = true;
      state.changePasswordErrorMsg = '';
    },
    [changePassword.fulfilled.type]: (state) => {
      state.isChangingPasswordFetching = false;
    },
    [changePassword.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isChangingPasswordFetching = false;
      state.changePasswordErrorMsg = action.payload;
    },

    [deleteMyProfile.pending.type]: (state) => {
      state.isUserDeletingFetching = true;
      state.deleteMyProfileErrorMsg = '';
    },
    [deleteMyProfile.fulfilled.type]: (state) => {
      state.isUserDeletingFetching = false;
    },
    [deleteMyProfile.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isUserDeletingFetching = false;
      state.deleteMyProfileErrorMsg = action.payload;
    },
  },
});

export default myselfSlice.reducer;
export const { resetUserErrorMsgs } = myselfSlice.actions;
