import { useEffect } from 'react';
import s from './ChatSidebar.module.scss';
import { FiUsers } from 'react-icons/fi';
import ChatSidebarUser from './ChatSidebarUser';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { setChatUsers } from '../../../redux/chatSlice';
import { ChatUser } from '../../../types/chatTypes';
import { selectMyselfFirstInChatUsers } from '../../../redux/selectors/chatSelectors';

const ChatSidebar: React.FC = () => {
  const { socketChannel } = useAppSelector((state) => state.chat);

  // Making myself always appear first in a list of connected users
  const sortedChatUsers = useAppSelector(selectMyselfFirstInChatUsers);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (socketChannel) {
      // Get joined users
      socketChannel.on('userJoined', (users: ChatUser[]) => {
        dispatch(setChatUsers(users));
      });

      socketChannel.on('userDisconnected', (users: ChatUser[]) => {
        dispatch(setChatUsers(users));
      });
    }

    // eslint-disable-next-line
  }, [socketChannel]);

  return (
    <div className={s.sidebar}>
      <h4 className={s.sidebar__title}>
        <FiUsers className={s.sidebar__titleicon} size={22} />
        Users:{' '}
        <span className={s.sidebar__counter}>{sortedChatUsers.length}</span>
      </h4>
      <ul className={s.sidebar__userslist}>
        {sortedChatUsers.map((u) => (
          <ChatSidebarUser key={u?.id} nickname={u.nickname} id={u.id} />
        ))}
      </ul>
    </div>
  );
};

export default ChatSidebar;
