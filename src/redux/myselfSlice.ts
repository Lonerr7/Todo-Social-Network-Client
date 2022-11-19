import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { myselfAPI } from '../api/api';
import { DeleteMePasswords } from '../types/axiosTypes';
import {
  AdditionalInfoInitialValues,
  BeliefsInfoInitialValues,
  ContactInfoInitialValues,
  GeneralInfoInitialValues,
  MainInfoInitialValues,
  PersonalInfoInitialValues,
  UpdateMyBioValue,
  UpdateMyRegisterlInfoFormInitialValues,
  UpdateUserPasswordInitialValues,
} from '../types/formikTypes';
import {
  AdditionalFieldsToSend,
  BeliefsFieldsToSend,
  ContactInfoFieldsToSend,
  GeneralInfoFieldsToSend,
  MainInfoFieldsToSend,
  MyselfState,
  OnlineStatusFieldToSend,
  PersonalInfoFieldsToSend,
} from '../types/reduxTypes/myselfSliceTypes';
import { updateInfoWithSuccessMsg } from '../utils/myselfHelpers';
import { setActiveMenuNum, setActiveSettingsNum } from './appSlice';
import { getMe } from './authSlice';
import { showHideUserInfoSuccessMsg } from './formsSlice';

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

      const response = await updateInfoWithSuccessMsg(
        myselfAPI,
        fieldsToSend,
        'additionalInfo'
      );

      return response.data.data.user;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

// using this in settings
export const updateMyRegisterInfo = createAsyncThunk(
  'myself/updateMyGeneralInfo',
  async (
    newUserData: UpdateMyRegisterlInfoFormInitialValues,
    { rejectWithValue, dispatch }
  ) => {
    try {
      const response = await updateInfoWithSuccessMsg(
        myselfAPI,
        newUserData,
        'registerInfo',
        dispatch
      );

      return response.data.data.user;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const updateMyGeneralInfo = createAsyncThunk(
  'myself/updateMyGeneralInfo',
  async (data: GeneralInfoFieldsToSend, { rejectWithValue, dispatch }) => {
    try {
      const response = await updateInfoWithSuccessMsg(
        myselfAPI,
        data,
        'generalInfo',
        dispatch
      );

      return response.data.data.user;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const updateMyMainInfo = createAsyncThunk(
  'myself/updateMyMainInfo',
  async (data: MainInfoInitialValues, { rejectWithValue, dispatch }) => {
    try {
      const fieldsToSend: MainInfoFieldsToSend = {
        mainInfo: { ...data },
      };

      const response = await updateInfoWithSuccessMsg(
        myselfAPI,
        fieldsToSend,
        'mainInfo',
        dispatch
      );

      return response.data.data.user;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const updateMyContactInfo = createAsyncThunk(
  'myslef/updateMyContactInfo',
  async (data: ContactInfoInitialValues, { rejectWithValue, dispatch }) => {
    try {
      const fieldsToSend: ContactInfoFieldsToSend = {
        contactInfo: { ...data },
      };

      const response = await updateInfoWithSuccessMsg(
        myselfAPI,
        fieldsToSend,
        'contactInfo',
        dispatch
      );

      return response.data.data.user;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const updateMyBeliefsInfo = createAsyncThunk(
  'myslef/updateMyBeliefs',
  async (data: BeliefsInfoInitialValues, { dispatch, rejectWithValue }) => {
    try {
      const fieldsToSend: BeliefsFieldsToSend = {
        beliefs: { ...data },
      };

      const response = await updateInfoWithSuccessMsg(
        myselfAPI,
        fieldsToSend,
        'beliefs',
        dispatch
      );

      return response.data.data.user;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const updateMyPersonalInfo = createAsyncThunk(
  'myself/updateMyPersonalInfo',
  async (data: PersonalInfoInitialValues, { dispatch, rejectWithValue }) => {
    try {
      const fieldsToSend: PersonalInfoFieldsToSend = {
        personalInfo: { ...data },
      };

      const response = await updateInfoWithSuccessMsg(
        myselfAPI,
        fieldsToSend,
        'personalInfo',
        dispatch
      );

      return response.data.data.user;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const changeMyAvatar = createAsyncThunk(
  'myself/changeMyAvatar',
  async (data: any, { rejectWithValue }) => {
    try {
      const response = await myselfAPI.changeMyAvatar(data);
      console.log(response);

      return response.data.data.photo;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const updateMyOnlineStatus = createAsyncThunk(
  'myself/updateMyOnlineStatus',
  async (newStatus: OnlineStatusFieldToSend, { rejectWithValue }) => {
    try {
      const response = await myselfAPI.updateMe(newStatus);

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
        dispatch(showHideUserInfoSuccessMsg({ show: true, for: 'password' }));

        setTimeout(() => {
          dispatch(
            showHideUserInfoSuccessMsg({ show: false, for: 'password' })
          );
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

      // reseting active menu fields in Menu and Settings submenu //! Maybe we don't need these lines
      dispatch(setActiveMenuNum(1));
      dispatch(setActiveSettingsNum(1));

      return response.data.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

const initialState: MyselfState = {
  isMyRegisterInfoFetching: false,
  isMyGeneralInfoFetching: false,
  isMyContactInfoFetching: false,
  isMyAdditionalInfoFetching: false,
  isMyMainInfoFetching: false,
  isMyBeliefsInfoFetching: false,
  isMyPersonalInfoFetching: false,
  isMyAvatarChanging: false,
  isMyBioUpdating: false,
  isChangingPasswordFetching: false,
  isUserDeletingFetching: false,
  updateMyRegisterInfoErrorMsg: '',
  updateMyGeneralInfoErrorMsg: '',
  updateMyContactInfoErrorMsg: '',
  sendMyAdditionalInfoErrorMsg: '',
  updateMyMainInfoErrorMsg: '',
  updateMyBeliefsInfoErrorMsg: '',
  updateMyPersonalInfoErrorMsg: '',
  changeMyAvatarErrorMsg: '',
  changePasswordErrorMsg: '',
  deleteMyProfileErrorMsg: '',
};

const myselfSlice = createSlice({
  name: 'myself',
  initialState,
  reducers: {
    resetUserErrorMsgs: (state) => {
      state.updateMyRegisterInfoErrorMsg = '';
      state.updateMyGeneralInfoErrorMsg = '';
      state.updateMyMainInfoErrorMsg = '';
      state.updateMyContactInfoErrorMsg = '';
      state.changePasswordErrorMsg = '';
      state.deleteMyProfileErrorMsg = '';
      state.changeMyAvatarErrorMsg = '';
    },
  },
  extraReducers: {
    [updateMyRegisterInfo.pending.type]: (state) => {
      state.isMyRegisterInfoFetching = true;
      state.updateMyRegisterInfoErrorMsg = '';
    },
    [updateMyRegisterInfo.fulfilled.type]: (state) => {
      state.isMyRegisterInfoFetching = false;
    },
    [updateMyRegisterInfo.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.isMyRegisterInfoFetching = false;
      state.updateMyRegisterInfoErrorMsg = action.payload;
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

    [updateMyGeneralInfo.pending.type]: (state) => {
      state.isMyGeneralInfoFetching = true;
      state.updateMyGeneralInfoErrorMsg = '';
    },
    [updateMyGeneralInfo.fulfilled.type]: (state) => {
      state.isMyGeneralInfoFetching = false;
    },
    [updateMyGeneralInfo.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.isMyGeneralInfoFetching = false;
      state.updateMyGeneralInfoErrorMsg = action.payload;
    },

    [updateMyMainInfo.pending.type]: (state) => {
      state.isMyMainInfoFetching = true;
    },
    [updateMyMainInfo.fulfilled.type]: (state) => {
      state.isMyMainInfoFetching = false;
    },
    [updateMyMainInfo.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.isMyMainInfoFetching = false;
      state.updateMyMainInfoErrorMsg = action.payload;
    },

    [updateMyContactInfo.pending.type]: (state) => {
      state.isMyContactInfoFetching = true;
      state.updateMyContactInfoErrorMsg = '';
    },
    [updateMyContactInfo.fulfilled.type]: (state) => {
      state.isMyContactInfoFetching = false;
    },
    [updateMyContactInfo.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.isMyContactInfoFetching = false;
      state.updateMyContactInfoErrorMsg = action.payload;
    },

    [updateMyBeliefsInfo.pending.type]: (state) => {
      state.isMyBeliefsInfoFetching = true;
      state.updateMyBeliefsInfoErrorMsg = '';
    },
    [updateMyBeliefsInfo.fulfilled.type]: (state) => {
      state.isMyBeliefsInfoFetching = false;
    },
    [updateMyBeliefsInfo.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.isMyBeliefsInfoFetching = false;
      state.updateMyBeliefsInfoErrorMsg = action.payload;
    },

    [updateMyPersonalInfo.pending.type]: (state) => {
      state.isMyPersonalInfoFetching = true;
      state.updateMyPersonalInfoErrorMsg = '';
    },
    [updateMyPersonalInfo.fulfilled.type]: (state) => {
      state.isMyPersonalInfoFetching = false;
    },
    [updateMyPersonalInfo.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.isMyPersonalInfoFetching = false;
      state.updateMyPersonalInfoErrorMsg = action.payload;
    },

    [sendMyAdditionalInfo.pending.type]: (state) => {
      state.isMyAdditionalInfoFetching = true;
      state.sendMyAdditionalInfoErrorMsg = '';
    },
    [sendMyAdditionalInfo.fulfilled.type]: (state) => {
      state.isMyAdditionalInfoFetching = false;
    },
    [sendMyAdditionalInfo.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.isMyAdditionalInfoFetching = false;
      state.sendMyAdditionalInfoErrorMsg = action.payload;
    },

    [changeMyAvatar.pending.type]: (state) => {
      state.isMyAvatarChanging = true;
      state.changeMyAvatarErrorMsg = '';
    },
    [changeMyAvatar.fulfilled.type]: (state) => {
      state.isMyAvatarChanging = false;
    },
    [changeMyAvatar.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isMyAvatarChanging = true;
      state.changeMyAvatarErrorMsg = action.payload;
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
