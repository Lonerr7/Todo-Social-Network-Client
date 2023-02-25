import React, { useEffect } from 'react';
import s from './ChatSidebar.module.scss';
import { FiUsers } from 'react-icons/fi';
import ChatSidebarUser from './ChatSidebarUser';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../hooks/reduxToolkitHooks';
import { setChatUsers, setChatUserSearchText } from '../../../redux/chatSlice';
import { ChatUser } from '../../../types/chatTypes';
import { selectMyselfFirstInChatUsers } from '../../../redux/selectors/chatSelectors';
import Search from '../../common/Search/Search';

const ChatSidebar: React.FC = () => {
  const socketChannel = useAppSelector((state) => state.chat.socketChannel);
  const chatUserSearchText = useAppSelector(
    (state) => state.chat.chatUserSearchText
  );

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

    return () => {
      dispatch(setChatUsers([]));
    };

    // eslint-disable-next-line
  }, [socketChannel]);

  return (
    <div className={s.sidebar}>
      <h4 className={s.sidebar__title}>
        <FiUsers className={s.sidebar__titleicon} size={22} />
        Active users:{' '}
        <span className={s.sidebar__counter}>{sortedChatUsers.length}</span>
      </h4>
      <Search
        actionCreator={setChatUserSearchText}
        text={chatUserSearchText}
        placeholder="Search for a user..."
        styling={{
          customBoxClass: s.sidebar__searchBox,
          customInputClass: s.sidebar__searchInput,
          customSearchIconClass: s.sidebar__searchIcon,
          searchIconSize: 20,
          customClearBtnClass: s.sidebar__clearBtn,
          clearIconSize: 12,
        }}
      />
      <ul className={s.sidebar__userslist}>
        {sortedChatUsers.map((u) => (
          <ChatSidebarUser key={u?.id} nickname={u?.nickname} id={u?.id} />
        ))}
      </ul>
    </div>
  );
};

export default React.memo(ChatSidebar);
