export interface ChatMessage {
  // This is a combination of 2 types: ChatMessage and ChatBotMessage. I made so that ts wont yell at me
  text: string;
  nickname: string;
  avatar: string;
  userId: string;
  _id: string;
  // fromBot: boolean;
  // userId: string;
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
