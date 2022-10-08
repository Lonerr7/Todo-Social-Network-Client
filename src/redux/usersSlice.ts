import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { usersAPI } from '../api/api';
import { User, UsersInitialState, UsersList } from '../types/reduxTypes';
import { getMe } from './authSlice';

export const fetchAllUsers = createAsyncThunk(
  'users/fetchAllUsers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await usersAPI.getAllUsers();

      return response.data.data.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  'users/fetchCurrentUser',
  async (userId: string, { rejectWithValue }) => {
    try {
      const response = await usersAPI.getCurrentUser(userId);

      return response.data.data.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

const initialState: UsersInitialState = {
  users: null,
  currentUser: null,
  isCurrentUserFetching: false,
  errorMsg: '',
  usersSearchText: '',
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsersSearchText: (state, action: PayloadAction<string>) => {
      state.usersSearchText = action.payload;
    },
    removeCurrentUser: (state) => {
      state.currentUser = null;
    },
  },
  extraReducers: {
    [fetchAllUsers.fulfilled.type]: (
      state,
      action: PayloadAction<UsersList>
    ) => {
      state.users = action.payload;
    },
    [fetchAllUsers.rejected.type]: (state, action: PayloadAction<string>) => {
      state.errorMsg = action.payload;
      state.users = null;
    },

    [fetchCurrentUser.pending.type]: (state) => {
      state.isCurrentUserFetching = true;
      state.errorMsg = '';
    },
    [fetchCurrentUser.fulfilled.type]: (state, action: PayloadAction<User>) => {
      state.isCurrentUserFetching = false;
      state.currentUser = action.payload;
    },
    [fetchCurrentUser.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.isCurrentUserFetching = false;
      state.errorMsg = action.payload;
    },

    [getMe.rejected.type]: (state) => {
      state.users = null;
    },
  },
});

export default usersSlice.reducer;
export const { setUsersSearchText, removeCurrentUser } = usersSlice.actions;
