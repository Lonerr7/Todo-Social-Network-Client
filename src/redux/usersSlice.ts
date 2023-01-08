import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { usersAPI } from '../api/api';
import { User } from '../types/reduxTypes/authSliceTypes';
import { TodoFiltersEnum } from '../types/reduxTypes/todoSliceTypes';
import {
  UsersInitialState,
  UsersList,
} from '../types/reduxTypes/usersSliceTypes';
import { getMe } from './authSlice';

interface FetchUsersReturn {
  users: UsersList;
  allUsersCount: number;
  currentPage: number;
}

export const fetchAllUsers = createAsyncThunk(
  'users/fetchAllUsers',
  async (page: number, { rejectWithValue }) => {
    try {
      const response = await usersAPI.getAllUsers(page);

      return {
        allUsersCount: response.data.allDocumentsCount,
        users: response.data.data.data,
        // currentPage: page,
      } as FetchUsersReturn;
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
  totalUsersCount: 0,
  activeUserTodoFilterWord: TodoFiltersEnum.ALL,
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
    setUserActiveTodoFilterWord: (
      state,
      action: PayloadAction<TodoFiltersEnum>
    ) => {
      state.activeUserTodoFilterWord = action.payload;
    },
  },
  extraReducers: {
    [fetchAllUsers.fulfilled.type]: (
      state,
      action: PayloadAction<FetchUsersReturn>
    ) => {
      state.users = action.payload.users.reverse();
      state.totalUsersCount = action.payload.allUsersCount;
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
export const {
  setUsersSearchText,
  removeCurrentUser,
  setUserActiveTodoFilterWord,
} = usersSlice.actions;
