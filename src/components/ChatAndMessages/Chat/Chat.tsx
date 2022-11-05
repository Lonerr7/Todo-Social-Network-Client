import { useEffect } from 'react';
import { io } from 'socket.io-client';
import ChatSidebar from '../ChatSidebar/ChatSidebar';
import Messages from '../Messages/Messages';
import SendMessageForm from '../SendMessageForm/SendMessageForm';
import s from './Chat.module.scss';

const Chat: React.FC = () => {
  const socket = io('http://localhost:8000/', { transports: ['websocket'] });

  useEffect(() => {
    socket.on('message', (message) => {
      console.log(message);
    });

    socket.on('disconnectMessage', (message) => {
      console.log(message);
    });

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
        <SendMessageForm socket={socket} />
      </div>
    </div>
  );
};

export default Chat;
