import { useState, useEffect } from 'react';
import s from './ChatSidebar.module.scss';
import { FiUsers } from 'react-icons/fi';
import { Link } from 'react-router-dom';

interface Props {
  socket: any;
}

const ChatSidebar: React.FC<Props> = ({ socket }) => {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    if (socket) {
      // Get joined users
      socket.on('userJoined', (users: any) => {
        setUsers(users);
      });

      socket.on('userDisconnected', (users: any) => {
        setUsers(users);
      });
    }
  }, [socket]);

  return (
    <div className={s.sidebar}>
      <h4 className={s.sidebar__title}>
        <FiUsers className={s.sidebar__titleicon} size={22} />
        Users: <span className={s.sidebar__counter}>{users.length}</span>
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
