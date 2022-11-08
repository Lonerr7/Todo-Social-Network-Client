import s from './ChatSidebar.module.scss';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/hooks';

interface Props {
  nickname: string;
  id: string;
}

const ChatSidebarUser: React.FC<Props> = ({ nickname, id }) => {
  const myself = useAppSelector((state) => state.auth.user);

  const isMe = myself?.id === id;

  return (
    <li className={s.sidebar__listItem}>
      <Link className={isMe ? `${s.sidebar__userLink} ${s.sidebar__me}` : s.sidebar__userLink} to={isMe ? '/' : `/users/${id}`}>
        {nickname} {isMe && '(you)'}
      </Link>
    </li>
  );
};

export default ChatSidebarUser;
