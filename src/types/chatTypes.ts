export interface ChatMessage {
  text: string;
  nickname: string;
  avatar: string;
  userId: string;
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
  messages: ChatMessage[];
  chatUsers: ChatUser[];
  chatUserSearchText: string;
}
