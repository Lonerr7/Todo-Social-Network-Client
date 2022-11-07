import s from './ChatSidebar.module.scss';
import { Link } from 'react-router-dom';

interface Props {
  nickname: string;
  id: string;
}

const ChatSidebarUser: React.FC<Props> = ({ nickname, id }) => {
  return (
    <li className={s.sidebar__listItem}>
      <Link className={s.sidebar__userLink} to={`/users/${id}`}>
        {nickname}
      </Link>
    </li>
  );
};

export default ChatSidebarUser;
