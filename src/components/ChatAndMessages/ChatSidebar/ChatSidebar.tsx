import s from './ChatSidebar.module.scss';
import { FiUsers } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ChatSidebar: React.FC = () => {
  return (
    <div className={s.sidebar}>
      <h4 className={s.sidebar__title}>
        <FiUsers className={s.sidebar__titleicon} size={22} />
        Users: <span className={s.sidebar__counter}>24</span>
      </h4>
      <ul className={s.sidebar__userslist}>
        <li className={s.sidebar__listItem}>
          <Link className={s.sidebar__userLink} to="#">
            User 1
          </Link>
        </li>
        <li className={s.sidebar__listItem}>
          <Link className={s.sidebar__userLink} to="#">
            User 1
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ChatSidebar;
