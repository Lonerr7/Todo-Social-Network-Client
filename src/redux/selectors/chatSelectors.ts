import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const selectMe = (state: RootState) => state.auth.user;
export const selectAllChatUsers = (state: RootState) => state.chat.chatUsers;
export const selectMyselfFirstInChatUsers = createSelector(
  [selectMe, selectAllChatUsers],
  (myself, allChatUsers) => {
    const meChatUser = allChatUsers.find((u) => u.id === myself?.id)!;
    const filteredChatUsers = allChatUsers.filter(
      (u) => u.id !== meChatUser?.id
    );

    return [meChatUser, ...filteredChatUsers];
  }
);
