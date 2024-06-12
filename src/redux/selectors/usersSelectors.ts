import { createSelector } from '@reduxjs/toolkit';
import { TodoFiltersEnum } from '../../types/reduxTypes/todoSliceTypes';
import { RootState } from '../store';

export const selectAllUsers = (state: RootState) => state.users.users;
const selectUsersSearchText = (state: RootState) => state.users.usersSearchText;
// const filteredUsersWithoutMe = (state: RootState) => state.users.users?.filter()

const selectMe = (state: RootState) => state.auth.user;

export const selectUsersBySearch = createSelector(
  [selectAllUsers, selectUsersSearchText],
  (allUsers, usersSearchText) => {
    if (!usersSearchText) return allUsers;

    return allUsers?.filter((u) =>
      u.nickname.toLowerCase().includes(usersSearchText.toLowerCase())
    )!;
  }
);

export const selectUsersWithSearchWithoutMe = createSelector(
  [selectUsersBySearch, selectMe],
  (searchedUsers, me) => {
    if (!me) return searchedUsers;

    return searchedUsers?.filter((u) => u.id !== me.id);
  }
);

export const selectUsersWithoutMe = createSelector(
  [selectAllUsers, selectMe],
  (allUsers, myself) => {
    if (!myself) return allUsers;

    return allUsers?.filter((u) => u.id !== myself.id);
  }
);

// =========================

export const selectAllUserTodos = (state: RootState) =>
  state.users.currentUser?.todos!;

export const selectUserActiveTodoFilterWord = (state: RootState) =>
  state.users.activeUserTodoFilterWord;

export const selectUserTodoByFilter = createSelector(
  [selectAllUserTodos, selectUserActiveTodoFilterWord],
  (allUserTodos, activeTodoFilterWord) => {
    if (activeTodoFilterWord === TodoFiltersEnum.ALL) {
      return allUserTodos;
    }

    if (activeTodoFilterWord === TodoFiltersEnum.COMPLETED) {
      return allUserTodos.filter((t) => t.isCompleted);
    }

    return allUserTodos.filter((t) => !t.isCompleted);
  }
);
