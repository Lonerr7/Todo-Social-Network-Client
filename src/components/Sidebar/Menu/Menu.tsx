import { NavLink } from 'react-router-dom';
import s from './Menu.module.scss';
import { MdOutlineContactPage } from 'react-icons/md';
import { FaUserFriends } from 'react-icons/fa';
import { TiMessages } from 'react-icons/ti';
import { RiTodoFill } from 'react-icons/ri';
import { IoSettingsOutline } from 'react-icons/io5';
import { useState } from 'react';
import MenuItem from './MenuItem';

const Menu: React.FC = () => {
  const [activeNum, setActiveNum] = useState(1);

  return (
    <nav className={s.menu}>
      <ul className={s.menu__list}>
        <MenuItem
          text="My Page"
          activeNum={activeNum}
          setActiveNum={setActiveNum}
          neededNum={1}
          icon={<MdOutlineContactPage className={s.menu__icon} size={24} />}
        />
        <MenuItem
          text="Friends"
          activeNum={activeNum}
          setActiveNum={setActiveNum}
          neededNum={2}
          icon={<FaUserFriends className={s.menu__icon} size={24} />}
        />
        <MenuItem
          text="Messages"
          activeNum={activeNum}
          setActiveNum={setActiveNum}
          neededNum={3}
          icon={<TiMessages className={s.menu__icon} size={24} />}
        />
        <MenuItem
          text="My Todos"
          activeNum={activeNum}
          setActiveNum={setActiveNum}
          neededNum={4}
          icon={<RiTodoFill className={s.menu__icon} size={24} />}
        />
        <MenuItem
          text="Settings"
          activeNum={activeNum}
          setActiveNum={setActiveNum}
          neededNum={5}
          icon={<IoSettingsOutline className={s.menu__icon} size={24} />}
        />
      </ul>
    </nav>
  );
};

export default Menu;
