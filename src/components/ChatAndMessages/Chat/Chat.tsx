import { useEffect } from 'react';
import { io } from 'socket.io-client';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxToolkitHooks';
import {
  addNewChatMessage,
  setChatMessages,
  setSocketChannel,
} from '../../../redux/chatSlice';
import { ChatMessage } from '../../../types/chatTypes';
import ChatSidebar from '../ChatSidebar/ChatSidebar';
import Messages from '../Messages/Messages';
import SendMessageFormContainer from '../SendMessageForm/SendMessageFormContainer';
import s from './Chat.module.scss';

const Chat: React.FC = () => {
  const me = useAppSelector((state) => state.auth.user)!;
  const dispatch = useAppDispatch();

  const setChatMessagesHandler = (messages: ChatMessage[]) => {
    dispatch(setChatMessages(messages));
  };

  useEffect(() => {
    const socket = io('http://localhost:8000/', { transports: ['websocket'] });
    dispatch(setSocketChannel(socket));

    // Join Chat
    socket.emit('joinChat', { userId: me.id });

    // Getting chat messages from DB
    socket.on('getChatMessages', setChatMessagesHandler);

    // Universal new message hanlder
    const newMessageHandler = (message: ChatMessage) => {
      dispatch(addNewChatMessage(message));
    };

    // Process bot and users messages
    socket.on('message', newMessageHandler);

    // Process user's message deletion
    socket.on('messageDeleted', setChatMessagesHandler);

    return () => {
      socket.disconnect();
    };

    // eslint-disable-next-line
  }, []);

  return (
    <div className={s.chat}>
      <ChatSidebar />
      <div className={s.chat__box}>
        <Messages />
        <SendMessageFormContainer />
      </div>
    </div>
  );
};

export default Chat;
