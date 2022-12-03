import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { usersTodoAPI } from '../api/api';
import { CurrentTodoState } from '../types/reduxTypes/currentTodoSliceTypes';
import { TodoWithComments } from '../types/reduxTypes/todoSliceTypes';

export const fetchOpenedTodoWithComments = createAsyncThunk(
  'currentTodo/fetchOpenedTodoWithComments',
  async (todoId: string, { rejectWithValue }) => {
    try {
      const response = await usersTodoAPI.getCurrentUserTodoWithComments(
        todoId
      );

      console.log(response.data.data.data);

      return response.data.data.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

const initialState: CurrentTodoState = {
  currentTodo: null,
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
    },
    [fetchOpenedTodoWithComments.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.isTodoFetching = false;
      state.errMsg = action.payload;
    },
  },
});

export default currentTodoSlice.reducer;
