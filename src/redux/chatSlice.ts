import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChatMessage, ChatState, ChatUser } from '../types/chatTypes';

const initialState: ChatState = {
  socketChannel: null,
  messages: [],
  chatUsers: [],
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setSocketChannel: (state, action: PayloadAction<any>) => {
      state.socketChannel = action.payload;
    },
    addNewChatMessage: (state, action: PayloadAction<ChatMessage>) => {
      state.messages = [...state.messages, action.payload];
    },
    setChatUsers: (state, action: PayloadAction<ChatUser[]>) => {
      state.chatUsers = action.payload;
    },
  },
});

export default chatSlice.reducer;
export const { setSocketChannel, addNewChatMessage, setChatUsers } =
  chatSlice.actions;