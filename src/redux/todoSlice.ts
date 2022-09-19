import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { todoAPI } from '../api/api';
import { UpdateTodoParamsRequest } from '../types/axiosTypes';
import {
  Todo,
  TodoFiltersEnum,
  TodoParams,
  TodoState,
  UpdateTodoParams,
  User,
} from '../types/reduxTypes';
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

export const updateTodo = createAsyncThunk(
  'todo/updateTodo',
  async (
    { id, isCompleted, taskText, difficulty }: UpdateTodoParams,
    { rejectWithValue }
  ) => {
    try {
      const fieldsToUpdate: UpdateTodoParamsRequest = {
        isCompleted,
        taskText,
        difficulty,
      };
      const response = await todoAPI.updateTodo(id, fieldsToUpdate);

      return response.data.data.data;
    } catch (error: any) {
      console.log(error.response.data.message);
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteTodo = createAsyncThunk(
  'todo/deleteTodo',
  async (id: string, { rejectWithValue }) => {
    try {
      await todoAPI.deleteTodo(id);

      return id;
    } catch (error: any) {
      console.log(error.response.data.message);
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteAllUserTodos = createAsyncThunk(
  'todo/deleteAllUserTodos',
  async (_, { rejectWithValue }) => {
    try {
      const response = await todoAPI.deleteAllUserTodos();

      if (response.data === '') {
        return true;
      }
    } catch (error: any) {
      console.log(error.response.data.message);
      return rejectWithValue(error.response.data.message);
    }
  }
);

const initialState: TodoState = {
  todos: [],
  isTodoCreating: false,
  areAllTodosDeleting: false,
  activeTodoFilter: TodoFiltersEnum.ALL,
  todoInputErrMsg: '',
  todoErrMsg: '',
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    changeActiveTodoFilter: (state, action: PayloadAction<TodoFiltersEnum>) => {
      state.activeTodoFilter = action.payload;
    },
  },
  extraReducers: {
    [getMe.fulfilled.type]: (state, action: PayloadAction<User>) => {
      state.todos = action.payload.todos;
    },

    [createTodo.pending.type]: (state) => {
      state.isTodoCreating = true;
    },
    [createTodo.fulfilled.type]: (state, action: PayloadAction<Todo>) => {
      state.todoInputErrMsg = '';
      state.isTodoCreating = false;
      state.todos.push(action.payload);
    },
    [createTodo.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isTodoCreating = false;
      state.todoInputErrMsg = action.payload;
    },

    [updateTodo.pending.type]: (state) => {
      state.todoErrMsg = '';
    },
    [updateTodo.fulfilled.type]: (state, action: PayloadAction<Todo>) => {
      state.todos = state.todos.map((t) =>
        t.id === action.payload.id ? (t = action.payload) : t
      );
    },
    [updateTodo.rejected.type]: (state, action: PayloadAction<string>) => {
      state.todoErrMsg = action.payload;
    },

    [deleteTodo.fulfilled.type]: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((t) => t.id !== action.payload);
    },

    [deleteAllUserTodos.pending.type]: (state) => {
      state.areAllTodosDeleting = true;
    },
    [deleteAllUserTodos.fulfilled.type]: (state) => {
      state.areAllTodosDeleting = false;
      state.todos = [];
    },
  },
});

export default todoSlice.reducer;
export const { changeActiveTodoFilter } = todoSlice.actions;