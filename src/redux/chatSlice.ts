import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChatMessage, ChatState, ChatUser } from '../types/chatTypes';

const initialState: ChatState = {
  socketChannel: null,
  messages: [],
  chatUsers: [],
  chatUserSearchText: '',
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setSocketChannel: (state, action: PayloadAction<any>) => {
      state.socketChannel = action.payload;
    },
    setChatUsers: (state, action: PayloadAction<ChatUser[]>) => {
      state.chatUsers = action.payload;
    },
    addNewChatMessage: (state, action: PayloadAction<ChatMessage>) => {
      state.messages = [...state.messages, action.payload];
    },
    setChatMessages: (state, action: PayloadAction<ChatMessage[]>) => {
      state.messages = action.payload;
    },
    setChatUserSearchText: (state, action: PayloadAction<string>) => {
      state.chatUserSearchText = action.payload;
    },
  },
});

export default chatSlice.reducer;
export const {
  setSocketChannel,
  addNewChatMessage,
  setChatUsers,
  setChatMessages,
  setChatUserSearchText,
} = chatSlice.actions;
