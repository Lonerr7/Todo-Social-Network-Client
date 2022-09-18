import { createSelector } from '@reduxjs/toolkit';
import { TodoFiltersEnum } from '../types/reduxTypes';
import { RootState } from './store';

export const selectAllTodos = (state: RootState) => state.todo.todos;
export const selectActiveTodoFilter = (state: RootState) =>
  state.todo.activeTodoFilter;

export const selectTodosByFilter = createSelector(
  [selectAllTodos, selectActiveTodoFilter],
  (allTodos, activeFilter) => {
    if (activeFilter === TodoFiltersEnum.ALL) {
      return allTodos;
    }

    if (activeFilter === TodoFiltersEnum.COMPLETED) {
      return allTodos.filter((t) => t.isCompleted);
    }

    return allTodos.filter((t) => !t.isCompleted);
  }
);
