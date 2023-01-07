import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { commentsAPI, usersTodoAPI } from '../api/api';
import { User } from '../types/reduxTypes/authSliceTypes';
import { CommentData } from '../types/reduxTypes/currentCommentSliceTypes';
import { CurrentTodoState } from '../types/reduxTypes/currentTodoSliceTypes';
import { Comment, TodoSmall } from '../types/reduxTypes/todoSliceTypes';

export const fetchOpenedTodoComments = createAsyncThunk(
  'currentTodo/fetchOpenedTodoComments',
  async (todoId: string, { rejectWithValue }) => {
    try {
      const response = await usersTodoAPI.getOpenedTodoComments(todoId);

      console.log(response);

      return response.data.data.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const fetchTodoOwner = createAsyncThunk(
  'currentTodo/fetchTodoOwner',
  async (todoId: string, { rejectWithValue }) => {
    try {
      const response = await usersTodoAPI.getTodoOwner(todoId);

      return response.data.data.user;
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
  currentTodoComments: [],
  currentTodoOwner: null,
  isTodoCommentsAndOwnerFetching: false,
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
    setCurrentTodo: (state, action: PayloadAction<TodoSmall>) => {
      state.currentTodo = action.payload;
    },
    resetCurrentTodoErrorMessages: (state) => {
      state.errMsg = '';
      state.sendCommentErrMsg = '';
    },
    resetCurrentTodoComments: (state) => {
      state.currentTodoComments = [];
    },
  },
  extraReducers: {
    // Getting an opened todo with comments??????? Need to get comments on this todo separately to provide pagination?
    [fetchOpenedTodoComments.pending.type]: (state) => {
      state.isTodoCommentsAndOwnerFetching = true;
    },
    [fetchOpenedTodoComments.fulfilled.type]: (
      state,
      action: PayloadAction<Comment[]>
    ) => {
      state.isTodoCommentsAndOwnerFetching = false;
      state.currentTodoComments = action.payload;
      state.errMsg = '';
    },
    [fetchOpenedTodoComments.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.isTodoCommentsAndOwnerFetching = false;
      state.errMsg = action.payload;
    },

    // Getting a todo owner
    [fetchTodoOwner.pending.type]: (state) => {
      state.isTodoCommentsAndOwnerFetching = true;
    },
    [fetchTodoOwner.fulfilled.type]: (state, action: PayloadAction<User>) => {
      state.isTodoCommentsAndOwnerFetching = false;
      state.currentTodoOwner = action.payload;
      state.errMsg = '';
    },
    [fetchTodoOwner.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isTodoCommentsAndOwnerFetching = false;
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

      if (state.currentTodoComments) {
        state.currentTodoComments.unshift(action.payload); //!
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

      if (state.currentTodoComments) {
        state.currentTodoComments = state.currentTodoComments.filter(
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
export const {
  resetCurrentTodoErrorMessages,
  setCurrentTodo,
  resetCurrentTodoComments,
} = currentTodoSlice.actions;
