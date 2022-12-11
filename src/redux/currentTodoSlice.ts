import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { commentsAPI, usersAPI, usersTodoAPI } from '../api/api';
import { User } from '../types/reduxTypes/authSliceTypes';
import { CommentData } from '../types/reduxTypes/currentCommentSliceTypes';
import { CurrentTodoState } from '../types/reduxTypes/currentTodoSliceTypes';
import { Comment, TodoWithComments } from '../types/reduxTypes/todoSliceTypes';

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

export const sendTodoComment = createAsyncThunk(
  'currentTodo/sendTodoComment',
  async (
    { todoId, commentText }: { commentText: string; todoId: string },
    { rejectWithValue }
  ) => {
    try {
      const commentData: CommentData = {
        comment: commentText,
      };

      const response = await commentsAPI.sendTodoComment(todoId, commentData);

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
  currentCommentOnDeletion: '',
  isCommentDeleting: false,
  isCommentSending: false,
  errMsg: '',
  sendCommentErrMsg: '',
};

const currentTodoSlice = createSlice({
  name: 'currentTodo',
  initialState,
  reducers: {
    resetCurrentTodoErrorMessages: (state) => {
      state.errMsg = '';
      state.sendCommentErrMsg = '';
    },
  },
  extraReducers: {
    // Getting an opened todo with comments??????? Need to get comments on this todo separately, to provide pagination?
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

    // Getting a todo owner
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

    // Creating(sending) a comment to todo
    [sendTodoComment.pending.type]: (state) => {
      state.isCommentSending = true;
    },
    [sendTodoComment.fulfilled.type]: (
      state,
      action: PayloadAction<Comment>
    ) => {
      state.isCommentSending = false;
      state.sendCommentErrMsg = '';

      if (state.currentTodo?.comments) {
        state.currentTodo.comments.unshift(action.payload); //!
      }
    },
    [sendTodoComment.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isCommentSending = false;
      state.sendCommentErrMsg = action.payload;
    },

    // Deleting a comment on todo
    [deleteTodoComment.pending.type]: (state, action) => {
      state.isCommentDeleting = true;
      state.currentCommentOnDeletion = action.meta.arg.commentId;
    },
    [deleteTodoComment.fulfilled.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.isCommentDeleting = false;
      state.currentCommentOnDeletion = '';
      state.errMsg = '';
      if (state.currentTodo?.comments) {
        state.currentTodo.comments = state.currentTodo?.comments.filter(
          (c) => c._id !== action.payload
        );
      }
    },
    [deleteTodoComment.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.isCommentDeleting = false;
      state.currentCommentOnDeletion = '';
      state.errMsg = action.payload;
    },
  },
});

export default currentTodoSlice.reducer;
export const {resetCurrentTodoErrorMessages} = currentTodoSlice.actions;