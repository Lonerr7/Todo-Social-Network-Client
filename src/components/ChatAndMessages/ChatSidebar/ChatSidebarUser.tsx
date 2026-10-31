import s from './ChatSidebar.module.scss';
import { Link } from 'react-router-dom';

interface Props {
  id: string | undefined;
  nickname: string | undefined;
  isMe: boolean;
}

const ChatSidebarUser: React.FC<Props> = ({ nickname, id, isMe }) => {
  if (!nickname || !id) {
    return null;
  }

  return (
    <li className={s.sidebar__listItem}>
      <Link
        className={
          isMe ? `${s.sidebar__userLink} ${s.sidebar__me}` : s.sidebar__userLink
        }
        to={isMe ? '/' : `/users/${id}`}
      >
        {nickname} {isMe && '(you)'}
      </Link>
    </li>
  );
};

export default ChatSidebarUser;
