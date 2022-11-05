import s from './ChatSidebar.module.scss';
import { FiUsers } from 'react-icons/fi';

const ChatSidebar: React.FC = () => {
  return (
    <div className={s.sidebar}>
      <h4 className={s.sidebar__title}>
        <FiUsers className={s.sidebar__titleicon} size={22} />
        Users
      </h4>
    </div>
  );
};

export default ChatSidebar;
