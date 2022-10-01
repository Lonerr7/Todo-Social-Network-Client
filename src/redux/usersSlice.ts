import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { usersAPI } from '../api/api';
import { UsersInitialState, UsersList } from '../types/reduxTypes';

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
  errorMsg: '',
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAllUsers.fulfilled.type]: (
      state,
      action: PayloadAction<UsersList>
    ) => {
      state.users = action.payload;
    },
    [fetchAllUsers.rejected.type]: (state, action: PayloadAction<string>) => {
      state.errorMsg = action.payload;
    },
  },
});

export default usersSlice.reducer;
export const {} = usersSlice.actions;
