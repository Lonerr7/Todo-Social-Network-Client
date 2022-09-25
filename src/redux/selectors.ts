import { createSelector } from '@reduxjs/toolkit';
import { TodoFiltersEnum } from '../types/reduxTypes';
import { RootState } from './store';

export const selectAllTodos = (state: RootState) => state.todo.todos;
export const selectActiveTodoFilter = (state: RootState) =>
  state.todo.activeTodoFilter;

export const selectTodosBySearch = (state: RootState) =>
  state.todo.todoSearchText;

export const selectTodosByFilter = createSelector(
  [selectAllTodos, selectActiveTodoFilter, selectTodosBySearch],
  (allTodos, activeFilter, todoSearchText) => {
    if (activeFilter === TodoFiltersEnum.ALL) {
      return allTodos.filter((t) =>
        t.taskText.toLowerCase().includes(todoSearchText.toLowerCase())
      );
    }

    if (activeFilter === TodoFiltersEnum.COMPLETED) {
      return allTodos
        .filter((t) => t.isCompleted)
        .filter((t) =>
          t.taskText.toLowerCase().includes(todoSearchText.toLowerCase())
        );
    }

    return allTodos
      .filter((t) => !t.isCompleted)
      .filter((t) =>
        t.taskText.toLowerCase().includes(todoSearchText.toLowerCase())
      );
  }
);
