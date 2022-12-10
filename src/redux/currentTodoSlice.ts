import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { commentsAPI, usersAPI, usersTodoAPI } from '../api/api';
import { User } from '../types/reduxTypes/authSliceTypes';
import { CurrentTodoState } from '../types/reduxTypes/currentTodoSliceTypes';
import { TodoWithComments } from '../types/reduxTypes/todoSliceTypes';

export const fetchOpenedTodoWithComments = createAsyncThunk(
  'currentTodo/fetchOpenedTodoWithComments',
  async (todoId: string, { rejectWithValue }) => {
    try {
      const response = await usersTodoAPI.getCurrentUserTodoWithComments(
        todoId
      );

      return response.data.data.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const fetchTodoOwner = createAsyncThunk(
  'currentTodo/fetchTodoOwner',
  async (userId: string, { rejectWithValue }) => {
    try {
      const response = await usersAPI.getCurrentUser(userId);

      return response.data.data.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteTodoComment = createAsyncThunk(
  'currentTodo/deleteTodoComment',
  async (
    { todoId, commentId }: { todoId: string; commentId: string },
    { rejectWithValue }
  ) => {
    try {
      await commentsAPI.deleteTodoComment(todoId, commentId);

      return commentId;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

const initialState: CurrentTodoState = {
  currentTodo: null,
  currentTodoOwner: null,
  isTodoFetching: false,
  errMsg: '',
};

const currentTodoSlice = createSlice({
  name: 'currentTodo',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchOpenedTodoWithComments.pending.type]: (state) => {
      state.isTodoFetching = true;
    },
    [fetchOpenedTodoWithComments.fulfilled.type]: (
      state,
      action: PayloadAction<TodoWithComments>
    ) => {
      state.isTodoFetching = false;
      state.currentTodo = action.payload;
      state.errMsg = '';
    },
    [fetchOpenedTodoWithComments.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.isTodoFetching = false;
      state.errMsg = action.payload;
    },

    [fetchTodoOwner.pending.type]: (state) => {
      state.isTodoFetching = true;
    },
    [fetchTodoOwner.fulfilled.type]: (state, action: PayloadAction<User>) => {
      state.isTodoFetching = false;
      state.currentTodoOwner = action.payload;
      state.errMsg = '';
    },
    [fetchTodoOwner.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isTodoFetching = false;
      state.errMsg = action.payload;
    },

    [deleteTodoComment.fulfilled.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      if (state.currentTodo?.comments) {
        state.currentTodo.comments = state.currentTodo?.comments.filter(
          (c) => c._id !== action.payload
        );
      }
    },
  },
});

export default currentTodoSlice.reducer;
