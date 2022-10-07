import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const selectAllUsers = (state: RootState) => state.users.users;
const selectUsersSearchText = (state: RootState) => state.users.usersSearchText;
// const filteredUsersWithoutMe = (state: RootState) => state.users.users?.filter()

export const selectUsersBySearch = createSelector(
  [selectAllUsers, selectUsersSearchText],
  (allUsers, usersSearchText) => {
    if (!usersSearchText) return allUsers;

    return allUsers?.filter((u) =>
      u.nickname.toLowerCase().includes(usersSearchText.toLowerCase())
    )!;
  }
);
