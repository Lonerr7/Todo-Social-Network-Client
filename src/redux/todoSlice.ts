import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodoState, User } from '../types/reduxTypes';
import { getMe } from './authSlice';

const initialState: TodoState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {},
  extraReducers: {
    [getMe.fulfilled.type]: (state, action: PayloadAction<User>) => {
      state.todos = action.payload.todos;
    },
  },
});

export default todoSlice.reducer;
export const {} = todoSlice.actions;
