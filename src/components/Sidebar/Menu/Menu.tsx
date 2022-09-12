import s from './Menu.module.scss';
import { MdOutlineContactPage } from 'react-icons/md';
import { FaUserFriends } from 'react-icons/fa';
import { TiMessages } from 'react-icons/ti';
import { RiTodoFill } from 'react-icons/ri';
import { IoSettingsOutline } from 'react-icons/io5';
import MenuItem from '../../common/MenuItem/MenuItem';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { setActiveMenuNum } from '../../../redux/appSlice';
import { getSetCurrentNumFromLS } from '../../../utils/appHelpers';
import { activeLsNumbers } from '../../../types/appTypes';

const Menu: React.FC = () => {
  const activeNum = useAppSelector((state) => state.app.activeMenuNum);
  const dispatch = useAppDispatch();

  const setActiveMenuNumber = (neededNum: number) => {
    dispatch(setActiveMenuNum(neededNum));
  };

  useEffect(() => {
    getSetCurrentNumFromLS(activeLsNumbers.MENU_NUM, setActiveMenuNumber);
    // eslint-disable-next-line
  }, []);

  return (
    <nav className={s.menu}>
      <ul className={s.menu__list}>
        <MenuItem
          activeNum={activeNum}
          text="My Page"
          neededNum={1}
          icon={<MdOutlineContactPage className={s.menu__icon} size={24} />}
          urlPath="/"
          setActiveNum={setActiveMenuNumber}
        />
        <MenuItem
          activeNum={activeNum}
          text="Friends"
          neededNum={2}
          icon={<FaUserFriends className={s.menu__icon} size={24} />}
          urlPath="/friends"
          itemsCount={25}
          setActiveNum={setActiveMenuNumber}
        />
        <MenuItem
          activeNum={activeNum}
          text="Messages"
          neededNum={3}
          icon={<TiMessages className={s.menu__icon} size={24} />}
          urlPath="/messages"
          itemsCount={123}
          setActiveNum={setActiveMenuNumber}
        />
        <MenuItem
          activeNum={activeNum}
          text="My Todos"
          neededNum={4}
          icon={<RiTodoFill className={s.menu__icon} size={24} />}
          urlPath="/todos"
          itemsCount={1}
          setActiveNum={setActiveMenuNumber}
        />
        <MenuItem
          activeNum={activeNum}
          text="Settings"
          neededNum={5}
          icon={<IoSettingsOutline className={s.menu__icon} size={24} />}
          urlPath="/settings"
          setActiveNum={setActiveMenuNumber}
        />
      </ul>
    </nav>
  );
};

export default Menu;
