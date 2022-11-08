export interface ChatMessage {
  text: string;
  username: string;
  avatar: string;
  id: string;
  fromBot: boolean;
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
}
