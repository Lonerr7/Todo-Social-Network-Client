import s from './Menu.module.scss';
import { MdOutlineContactPage } from 'react-icons/md';
import { FaUserFriends } from 'react-icons/fa';
import { TiMessages } from 'react-icons/ti';
import { RiTodoFill } from 'react-icons/ri';
import { IoSettingsOutline } from 'react-icons/io5';
import MenuItem from '../../common/MenuItem/MenuItem';
import { useEffect } from 'react';
import { useAppDispatch } from '../../../hooks/hooks';
import { setActiveMenuNum } from '../../../redux/appSlice';

const Menu: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const isCurrentMenuNum = localStorage.getItem('activeMenuNum');
    const currentMenuNum = isCurrentMenuNum ? +isCurrentMenuNum : 1;
    dispatch(setActiveMenuNum(currentMenuNum));
  }, []);

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
          itemsCount={25}
        />
        <MenuItem
          text="Messages"
          neededNum={3}
          icon={<TiMessages className={s.menu__icon} size={24} />}
          urlPath="/messages"
          itemsCount={123}
        />
        <MenuItem
          text="My Todos"
          neededNum={4}
          icon={<RiTodoFill className={s.menu__icon} size={24} />}
          urlPath="/todos"
          itemsCount={1}
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
