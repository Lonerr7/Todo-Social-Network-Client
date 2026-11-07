import {useEffect, FC, useState} from 'react';
import {io} from 'socket.io-client';
import {useAppDispatch, useAppSelector} from '../../../hooks/reduxToolkitHooks';
import {addNewChatMessage, setChatMessages, setSocketChannel} from '../../../redux/chatSlice';
import {ChatMessage} from '../../../types/chatTypes';
import ChatSidebar from '../ChatSidebar/ChatSidebar';
import Messages from '../Messages/Messages';
import SendMessageFormContainer from '../SendMessageForm/SendMessageFormContainer';
import s from './Chat.module.scss';
import {socketIOUrl} from '../../../configs/connectionConfig';
import {toast} from 'sonner';
import {ChatPreloader} from '../ChatPreloader/ChatPreloader';

const Chat: FC = () => {
  const [isSocketConnected, setIsSocketConnected] = useState(false);
  const me = useAppSelector((state) => state.auth.user)!;
  const dispatch = useAppDispatch();

  useEffect(() => {
    const socket = io(socketIOUrl, {
      transports: ['websocket'],
      auth: {token: localStorage.getItem('token')},
    });

    dispatch(setSocketChannel(socket));

    // Join Chat
    socket.emit('joinChat', {userId: me.id});

    const setChatMessagesHandler = (messages: ChatMessage[]) => {
      dispatch(setChatMessages(messages));
    };

    // Getting chat messages from DB
    socket.on('getChatMessages', setChatMessagesHandler);

    // Universal new message handler
    const newMessageHandler = (message: ChatMessage) => {
      dispatch(addNewChatMessage(message));
    };

    // Process bot and users messages
    socket.on('message', newMessageHandler);

    // handle errors
    socket.on('appError', (error: any) => {
      toast.error(error.message);
    });

    const onConnect = () => {
      setIsSocketConnected(true);
    }

    // show ui on successful connect
    socket.on('connect', onConnect);

    return () => {
      socket.disconnect();
    };

    // eslint-disable-next-line
  }, []);

  return (
    <div className={s.chat}>
      {!isSocketConnected ? (
        <ChatPreloader className={s.chat__preloader} />
      ) : (
        <>
          <ChatSidebar />
          <div className={s.chat__box}>
            <Messages />
            <SendMessageFormContainer />
          </div>
        </>
      )}
    </div>
  );
};

export default Chat;
