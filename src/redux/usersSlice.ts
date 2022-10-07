import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { usersAPI } from '../api/api';
import { UsersInitialState, UsersList } from '../types/reduxTypes';
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

const initialState: UsersInitialState = {
  users: [],
  currentUser: null,
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
    setCurrentUser: (state, action: PayloadAction<string>) => {
      state.currentUser = state.users!.filter(
        (u) => u.id === action.payload
      )[0];
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

    [getMe.rejected.type]: (state) => {
      state.users = null;
    },
  },
});

export default usersSlice.reducer;
export const { setUsersSearchText, setCurrentUser, removeCurrentUser } =
  usersSlice.actions;
