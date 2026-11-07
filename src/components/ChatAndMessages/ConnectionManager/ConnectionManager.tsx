import {FC, useEffect} from 'react';
import {io} from 'socket.io-client';
import {socketIOUrl} from '../../../configs/connectionConfig';
import {addNewChatMessage, setChatMessages, setIsConnected, setSocketChannel} from '../../../redux/chatSlice';
import {ChatMessage} from '../../../types/chatTypes';
import {toast} from 'sonner';
import {useAppDispatch, useAppSelector} from '../../../hooks/reduxToolkitHooks';

export const ConnectionManager: FC = () => {
  const me = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!me) return;

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
      dispatch(setIsConnected(true));
    }

    // show ui on successful connect
    socket.on('connect', onConnect);

    return () => {
      socket.off('connect', onConnect);
      socket.disconnect();
    };

    // eslint-disable-next-line
  }, []);

  return null;
};
