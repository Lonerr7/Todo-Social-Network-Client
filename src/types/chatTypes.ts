export interface ChatMessage {
  text: string;
  user: Omit<ChatUser, 'socketId'>;
  _id: string;
}

export interface ChatUser {
  nickname: string;
  photo: string;
  id: string;
  socketId: string;
}

export interface ChatState {
  socketChannel: any; //!
  isConnected: boolean;
  messages: ChatMessage[];
  chatUsers: ChatUser[];
  chatUserSearchText: string;
}
