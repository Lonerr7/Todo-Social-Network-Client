import s from './Menu.module.scss';
import { MdOutlineContactPage } from 'react-icons/md';
import { FaUserFriends } from 'react-icons/fa';
import { TiMessages } from 'react-icons/ti';
import { RiTodoFill } from 'react-icons/ri';
import { IoSettingsOutline } from 'react-icons/io5';
import MenuItem from './MenuItem';

const Menu: React.FC = () => {
  return (
    <nav className={s.menu}>
      <ul className={s.menu__list}>
        <MenuItem
          text="My Page"
          neededNum={1}
          icon={<MdOutlineContactPage className={s.menu__icon} size={24} />}
          urlPath="/"
        />
        <MenuItem
          text="Friends"
          neededNum={2}
          icon={<FaUserFriends className={s.menu__icon} size={24} />}
          urlPath="/friends"
        />
        <MenuItem
          text="Messages"
          neededNum={3}
          icon={<TiMessages className={s.menu__icon} size={24} />}
          urlPath="/messages"
        />
        <MenuItem
          text="My Todos"
          neededNum={4}
          icon={<RiTodoFill className={s.menu__icon} size={24} />}
          urlPath="/todos"
        />
        <MenuItem
          text="Settings"
          neededNum={5}
          icon={<IoSettingsOutline className={s.menu__icon} size={24} />}
          urlPath="/settings"
        />
      </ul>
    </nav>
  );
};

export default Menu;
