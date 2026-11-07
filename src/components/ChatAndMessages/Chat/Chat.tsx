import {FC} from 'react';
import ChatSidebar from '../ChatSidebar/ChatSidebar';
import Messages from '../Messages/Messages';
import SendMessageFormContainer from '../SendMessageForm/SendMessageFormContainer';
import s from './Chat.module.scss';
import {ChatPreloader} from '../ChatPreloader/ChatPreloader';
import {ConnectionManager} from '../ConnectionManager/ConnectionManager';
import {useAppSelector} from '../../../hooks/reduxToolkitHooks';

const Chat: FC = () => {
  const isSocketConnected = useAppSelector((state) => state.chat.isConnected);

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
      <ConnectionManager />
    </div>
  );
};

export default Chat;
