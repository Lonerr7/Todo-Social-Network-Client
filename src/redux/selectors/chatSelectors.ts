import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const selectMe = (state: RootState) => state.auth.user;
export const selectAllChatUsers = (state: RootState) => state.chat.chatUsers;
const selectChatUserSearchText = (state: RootState) =>
  state.chat.chatUserSearchText;

export const selectMyselfFirstInChatUsers = createSelector(
  [selectMe, selectAllChatUsers, selectChatUserSearchText],
  (myself, allChatUsers, chatUserSearchText) => {
    const meChatUser = allChatUsers.find((u) => u.id === myself?.id);
    const filteredChatUsers = allChatUsers.filter(
      (u) => u.id !== meChatUser?.id
    );

    // If this is not present we get undefined and then an error with react keys
    if (!meChatUser) {
      return [];
    }

    let result = [meChatUser, ...filteredChatUsers];

    if (chatUserSearchText) {
      return result.filter((u) =>
        u?.nickname.toLowerCase().includes(chatUserSearchText.toLowerCase())
      );
    }

    return result;
  }
);

export const selectChatUserBySearch = createSelector(
  [selectAllChatUsers, selectChatUserSearchText],
  (allUsers, userSearchText) => {
    if (!userSearchText) {
      return allUsers;
    }

    return allUsers.filter((u) =>
      u?.nickname.toLowerCase().includes(userSearchText.toLowerCase())
    );
  }
);
