import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { todoAPI } from '../api/api';
import { Todo, TodoParams, TodoState, User } from '../types/reduxTypes';
import { getMe } from './authSlice';

export const createTodo = createAsyncThunk(
  'todo/createTodo',
  async ({ taskText, difficulty }: TodoParams, { rejectWithValue }) => {
    try {
      const fieldsToSend = {
        taskText,
        difficulty: difficulty || 'easy',
      };
      const response = await todoAPI.addTodo(fieldsToSend);

      console.log(response.data.data.data);

      return response.data.data.data;
    } catch (error: any) {
      console.log(error.response.data.message);

      return rejectWithValue(error.response.data.message);
    }
  }
);

const initialState: TodoState = {
  todos: [],
  isTodoCreating: false,
  todoErrMsg: '',
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {},
  extraReducers: {
    [getMe.fulfilled.type]: (state, action: PayloadAction<User>) => {
      state.todos = action.payload.todos;
    },
    [createTodo.pending.type]: (state) => {
      state.isTodoCreating = true;
      state.todoErrMsg = '';
    },
    [createTodo.fulfilled.type]: (state, action: PayloadAction<Todo>) => {
      state.isTodoCreating = false;
      state.todos.push(action.payload);
    },
    [createTodo.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isTodoCreating = false;
      state.todoErrMsg = action.payload;
    },
  },
});

export default todoSlice.reducer;
export const {} = todoSlice.actions;
