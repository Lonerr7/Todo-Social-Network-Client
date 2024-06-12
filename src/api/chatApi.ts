import { ChatMessage } from '../types/chatTypes';

type Subcriber = (messages: ChatMessage) => void;

const subscribers = [] as Array<Subcriber>;

const newMessageHanlder = (message: any) => {
  subscribers.forEach((s) => s(message));
};

export const chatAPI = {
  subscribe: (cb: Subcriber) => {
    subscribers.push(cb);
  },
};
