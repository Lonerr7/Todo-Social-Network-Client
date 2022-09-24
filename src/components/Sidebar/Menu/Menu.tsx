import s from './Menu.module.scss';
import { MdOutlineContactPage } from 'react-icons/md';
import { FaUserFriends } from 'react-icons/fa';
import { TiMessages } from 'react-icons/ti';
import { RiTodoFill } from 'react-icons/ri';
import { IoSettingsOutline } from 'react-icons/io5';
import MenuItem from '../../common/MenuItem/MenuItem';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import {
  setActiveMenuNum,
  setActiveSettingsNum,
} from '../../../redux/appSlice';
import { getSetCurrentNumFromLS } from '../../../utils/appHelpers';
import { activeLsNumbers } from '../../../types/appTypes';

const Menu: React.FC = () => {
  const activeNum = useAppSelector((state) => state.app.activeMenuNum);
  const uncompletedTodosCount = useAppSelector(
    (state) => state.todo.todos
  ).filter((t) => !t.isCompleted).length;
  const dispatch = useAppDispatch();

  const setActiveMenuNumber = (neededNum: number) => {
    dispatch(setActiveMenuNum(neededNum));
  };

  const resetActiveSettingsNum = () => {
    dispatch(setActiveSettingsNum(1));
  };

  useEffect(() => {
    getSetCurrentNumFromLS(activeLsNumbers.MENU_NUM, setActiveMenuNumber);
    // eslint-disable-next-line
  }, []);

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
            setActiveNum={setActiveMenuNumber}
          />
        </li>
        <li className={s.menu__listItem}>
          <MenuItem
            activeNum={activeNum}
            text="Friends"
            neededNum={2}
            icon={<FaUserFriends className={s.menu__icon} size={24} />}
            urlPath="/friends"
            itemsCount={25}
            setActiveNum={setActiveMenuNumber}
          />
        </li>
        <li className={s.menu__listItem}>
          <MenuItem
            activeNum={activeNum}
            text="Messages"
            neededNum={3}
            icon={<TiMessages className={s.menu__icon} size={24} />}
            urlPath="/messages"
            itemsCount={123}
            setActiveNum={setActiveMenuNumber}
          />
        </li>
        <li className={s.menu__listItem}>
          {' '}
          <MenuItem
            activeNum={activeNum}
            text="My Todos"
            neededNum={4}
            icon={<RiTodoFill className={s.menu__icon} size={24} />}
            urlPath="/todos"
            itemsCount={uncompletedTodosCount}
            setActiveNum={setActiveMenuNumber}
          />
        </li>
        <li className={s.menu__listItem}>
          <MenuItem
            activeNum={activeNum}
            text="Settings"
            neededNum={5}
            icon={<IoSettingsOutline className={s.menu__icon} size={24} />}
            urlPath="/settings"
            setActiveNum={setActiveMenuNumber}
            resetActiveSettingsNum={resetActiveSettingsNum}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
