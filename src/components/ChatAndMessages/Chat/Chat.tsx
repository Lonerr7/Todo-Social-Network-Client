import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { useAppSelector } from '../../../hooks/hooks';
import ChatSidebar from '../ChatSidebar/ChatSidebar';
import Messages from '../Messages/Messages';
import SendMessageForm from '../SendMessageForm/SendMessageForm';
import s from './Chat.module.scss';

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<any[]>([]);
  const [socket, setSocket] = useState<any>();
  const me = useAppSelector((state) => state.auth.user)!;

  useEffect(() => {
    const socket = io('http://localhost:8000/', { transports: ['websocket'] });
    setSocket(socket);

    // Join Chat
    socket.emit('joinChat', { userId: me.id });

    // Proccess bot messages
    socket.on('botMessage', (message) => {
      setMessages((prevState) => {
        return [...prevState, message];
      });
    });

    socket.on('message', (message) => {
      setMessages((prevState) => {
        return [...prevState, message];
      });
    });

    socket.on('disconnectMessage', (message) => {
      setMessages((prevState) => {
        return [...prevState, message];
      });
    });

    return () => {
      socket.emit('preDisconnect', me.id);
      socket.disconnect();
    };

    // eslint-disable-next-line
  }, []);

  return (
    <div className={s.chat}>
      <ChatSidebar socket={socket} />
      <div className={s.chat__box}>
        <Messages messages={messages} />
        <SendMessageForm socket={socket} />
      </div>
    </div>
  );
};

export default Chat;
