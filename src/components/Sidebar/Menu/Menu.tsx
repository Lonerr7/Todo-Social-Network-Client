import s from './Menu.module.scss';
import { MdOutlineContactPage } from 'react-icons/md';
import { FaUserFriends } from 'react-icons/fa';
import { TiMessages } from 'react-icons/ti';
import { RiTodoLine } from 'react-icons/ri';
import { IoSettingsSharp } from 'react-icons/io5';
import { BsFillChatLeftDotsFill } from 'react-icons/bs';
import MenuItem from '../../common/MenuItem/MenuItem';
import { useAppSelector } from '../../../hooks/hooks';

const Menu: React.FC = () => {
  const activeNum = useAppSelector((state) => state.app.activeMenuNum);
  const uncompletedTodosCount = useAppSelector(
    (state) => state.todo.todos
  ).filter((t) => !t.isCompleted).length;

  return (
    <nav className={s.menu}>
      <ul className={s.menu__list}>
        <li className={s.menu__listItem}>
          <MenuItem
            activeNum={activeNum}
            text="My Page"
            neededNum={1}
            icon={<MdOutlineContactPage className={s.menu__icon} size={24} />}
            urlPath="/"
          />
        </li>
        <li className={s.menu__listItem}>
          <MenuItem
            activeNum={activeNum}
            text="Users"
            neededNum={2}
            icon={<FaUserFriends className={s.menu__icon} size={24} />}
            urlPath="/users"
            itemsCount={25}
          />
        </li>
        <li className={s.menu__listItem}>
          <MenuItem
            activeNum={activeNum}
            text="Messages"
            neededNum={3}
            icon={<TiMessages className={s.menu__icon} size={24} />}
            urlPath="/messages"
            itemsCount={32}
          />
        </li>
        <li className={s.menu__listItem}>
          <MenuItem
            activeNum={activeNum}
            text="Chat"
            neededNum={4}
            icon={<BsFillChatLeftDotsFill className={s.menu__icon} size={24} />}
            urlPath="/chat"
            itemsCount={123}
          />
        </li>
        <li className={s.menu__listItem}>
          <MenuItem
            activeNum={activeNum}
            text="Todos"
            neededNum={5}
            icon={<RiTodoLine className={s.menu__icon} size={24} />}
            urlPath="/todos"
            itemsCount={uncompletedTodosCount}
          />
        </li>
        <li className={s.menu__listItem}>
          <MenuItem
            activeNum={activeNum}
            text="Settings"
            neededNum={6}
            icon={<IoSettingsSharp className={s.menu__icon} size={24} />}
            urlPath="/settings"
          />
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
