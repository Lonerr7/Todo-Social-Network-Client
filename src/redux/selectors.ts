import { createSelector } from '@reduxjs/toolkit';
import { TodoFiltersEnum } from '../types/reduxTypes';
import { RootState } from './store';

export const selectAllTodos = (state: RootState) => state.todo.todos;
export const selectActiveTodoFilter = (state: RootState) =>
  state.todo.activeTodoFilter;

export const selectTodoSearchText = (state: RootState) =>
  state.todo.todoSearchText;

export const selectTodosByFilter = createSelector(
  [selectAllTodos, selectActiveTodoFilter, selectTodoSearchText],
  (allTodos, activeFilter, todoSearchText) => {
    let allTodosCopy = [...allTodos];

    if (todoSearchText) {
      allTodosCopy = allTodosCopy.filter((t) =>
        t.taskText.toLowerCase().includes(todoSearchText.toLowerCase())
      );
    }

    if (activeFilter === TodoFiltersEnum.ALL) {
      return allTodosCopy;
    }

    if (activeFilter === TodoFiltersEnum.COMPLETED) {
      return allTodosCopy.filter((t) => t.isCompleted);
    }

    return allTodosCopy.filter((t) => !t.isCompleted);
  }
);
