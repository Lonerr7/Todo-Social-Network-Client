import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { myselfAPI } from '../api/api';
import { DeleteMePasswords } from '../types/axiosTypes';
import {
  AdditionalInfoInitialValues,
  UpdateMyBioValue,
  UpdateMyGeneralInfoFormInitialValues,
  UpdateUserPasswordInitialValues,
} from '../types/FormikTypes';
import {
  AdditionalFieldsToSend,
  MyselfState,
} from '../types/reduxTypes/myselfSliceTypes';
import { setActiveMenuNum, setActiveSettingsNum } from './appSlice';
import { getMe } from './authSlice';
import {
  showHideChangePasswordSuccessMessage,
  showHideUserInfoSuccessMsg,
} from './formsSlice';

// using this in settings
export const updateMyGeneralInfo = createAsyncThunk(
  'myself/updateMyGeneralInfo',
  async (
    newUserData: UpdateMyGeneralInfoFormInitialValues,
    { rejectWithValue, dispatch }
  ) => {
    try {
      const response = await myselfAPI.updateMe(newUserData);

      // If OK, show success message in form. Then delete it after 5 sec.
      if (response.data.data.user) {
        dispatch(showHideUserInfoSuccessMsg({ show: true, for: 'general' }));

        setTimeout(() => {
          dispatch(showHideUserInfoSuccessMsg({ show: false, for: 'general' }));
        }, 5000);
      }

      console.log(response.data.data.user);

      return response.data.data.user;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

// using this in my profile to only update my bio
export const updateMyBio = createAsyncThunk(
  'myself/updateMyBio',
  async (newBio: UpdateMyBioValue, { rejectWithValue }) => {
    try {
      const response = await myselfAPI.updateMe(newBio);

      return response.data.data.user;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

// using this when we just got signed up
export const sendMyAdditionalInfo = createAsyncThunk(
  'myself/sendMyAdditionalInfo',
  async (data: AdditionalInfoInitialValues, { rejectWithValue }) => {
    try {
      const fieldsToSend: AdditionalFieldsToSend = {
        generalInfo: {
          dateOfBirth: data.dateOfBirth,
          country: data.country,
          currentCity: data.currentCity,
        },
        mainInfo: {
          cityOfBirth: data.cityOfBirth,
        },
        contactInfo: {
          phoneNumber: data.phoneNumber,
        },
      };

      const response = await myselfAPI.updateMe(fieldsToSend);

      return response.data.data.user;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const changePassword = createAsyncThunk(
  'myself/changePassword',
  async (
    passwords: UpdateUserPasswordInitialValues,
    { rejectWithValue, dispatch }
  ) => {
    try {
      const response = await myselfAPI.changeMyPassword(passwords);

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
  'myself/deleteMyProfile',
  async (passwords: DeleteMePasswords, { rejectWithValue, dispatch }) => {
    try {
      const response = await myselfAPI.deleteMe(passwords);

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

const initialState: MyselfState = {
  isUserGeneralInfoFetching: false,
  isUserAdditionalInfoFetching: false,
  isUserMainInfoFetching: false,
  isMyBioUpdating: false,
  isChangingPasswordFetching: false,
  isUserDeletingFetching: false,
  sendMyAdditionalInfoErrorMsg: '',
  updateMyGeneralInfoErrorMsg: '',
  updateMyMainInfoErrorMsg: '',
  changePasswordErrorMsg: '',
  deleteMyProfileErrorMsg: '',
};

const myselfSlice = createSlice({
  name: 'myself',
  initialState,
  reducers: {
    resetUserErrorMsgs: (state) => {
      state.updateMyGeneralInfoErrorMsg = '';
      state.changePasswordErrorMsg = '';
      state.deleteMyProfileErrorMsg = '';
    },
  },
  extraReducers: {
    [updateMyGeneralInfo.pending.type]: (state) => {
      state.isUserGeneralInfoFetching = true;
      state.updateMyGeneralInfoErrorMsg = '';
    },
    [updateMyGeneralInfo.fulfilled.type]: (state) => {
      state.isUserGeneralInfoFetching = false;
    },
    [updateMyGeneralInfo.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.isUserGeneralInfoFetching = false;
      state.updateMyGeneralInfoErrorMsg = action.payload;
    },

    [updateMyBio.pending.type]: (state) => {
      state.isMyBioUpdating = true;
    },
    [updateMyBio.fulfilled.type]: (state) => {
      state.isMyBioUpdating = false;
    },
    [updateMyBio.rejected.type]: (state) => {
      state.isMyBioUpdating = false;
    },

    [sendMyAdditionalInfo.pending.type]: (state) => {
      state.isUserAdditionalInfoFetching = true;
    },
    [sendMyAdditionalInfo.fulfilled.type]: (state) => {
      state.isUserAdditionalInfoFetching = false;
    },
    [sendMyAdditionalInfo.pending.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.isUserAdditionalInfoFetching = false;
      state.sendMyAdditionalInfoErrorMsg = action.payload;
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
