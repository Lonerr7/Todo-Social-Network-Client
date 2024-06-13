import s from './Menu.module.scss';
import { MdOutlineContactPage } from 'react-icons/md';
import { FaUserFriends } from 'react-icons/fa';
import { RiTodoLine } from 'react-icons/ri';
import { IoSettingsSharp } from 'react-icons/io5';
import { BsFillChatLeftDotsFill } from 'react-icons/bs';
import MenuItem from '../../common/MenuItem/MenuItem';
import { useAppSelector } from '../../../hooks/reduxToolkitHooks';
import { selectUsersWithoutMe } from '../../../redux/selectors/usersSelectors';

const Menu: React.FC = () => {
  const activeNum = useAppSelector((state) => state.app.activeMenuNum);
  const uncompletedTodosCount = useAppSelector(
    (state) => state.todo.todos
  ).filter((t) => !t.isCompleted).length;
  const chatMessagesCount = useAppSelector(
    (state) => state.chat.messages
  ).length;
  const usersCount = useAppSelector(selectUsersWithoutMe)?.length;

  return (
    <nav className={s.menu}>
      <ul className={s.menu__list}>
        <li className={s.menu__listItem}>
          <MenuItem
            activeNum={activeNum}
            text="My Page"
            neededNum={1}
            icon={<MdOutlineContactPage className={s.menu__icon} />}
            urlPath="/Todo-Social-Network-Client/"
            customClass={s.menu__menuItem}
            customTextClass={s.menu__menuItemText}
            customActiveLineClass={s.menu__menuItemActiveLine}
          />
        </li>
        <li className={s.menu__listItem}>
          <MenuItem
            activeNum={activeNum}
            text="Users"
            neededNum={2}
            icon={<FaUserFriends className={s.menu__icon} />}
            urlPath="/Todo-Social-Network-Client/users?page=1"
            itemsCount={usersCount}
            customClass={s.menu__menuItem}
            customTextClass={s.menu__menuItemText}
            customActiveLineClass={s.menu__menuItemActiveLine}
          />
        </li>
        <li className={s.menu__listItem}>
          <MenuItem
            activeNum={activeNum}
            text="Chat"
            neededNum={3}
            icon={<BsFillChatLeftDotsFill className={s.menu__icon} />}
            urlPath="/Todo-Social-Network-Client/chat"
            itemsCount={chatMessagesCount}
            customClass={s.menu__menuItem}
            customTextClass={s.menu__menuItemText}
            customActiveLineClass={s.menu__menuItemActiveLine}
          />
        </li>
        <li className={s.menu__listItem}>
          <MenuItem
            activeNum={activeNum}
            text="Todos"
            neededNum={4}
            icon={<RiTodoLine className={s.menu__icon} />}
            urlPath="/Todo-Social-Network-Client/todos"
            itemsCount={uncompletedTodosCount}
            customClass={s.menu__menuItem}
            customTextClass={s.menu__menuItemText}
            customActiveLineClass={s.menu__menuItemActiveLine}
          />
        </li>
        <li className={s.menu__listItem}>
          <MenuItem
            activeNum={activeNum}
            text="Settings"
            neededNum={5}
            icon={<IoSettingsSharp className={s.menu__icon} />}
            urlPath="/Todo-Social-Network-Client/settings"
            customClass={s.menu__menuItem}
            customTextClass={s.menu__menuItemText}
            customActiveLineClass={s.menu__menuItemActiveLine}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
