import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { setActiveMenuNum } from '../../../redux/appSlice';
import s from './Menu.module.scss';

type MenuItemProps = {
  neededNum: number;
  setActiveNum?: (newActiveNum: number) => void;
  icon: React.ReactNode;
  text: string;
  urlPath: string;
};

const MenuItem: React.FC<MenuItemProps> = ({
  icon,
  neededNum,
  setActiveNum,
  text,
  urlPath,
}) => {
  const activeNum = useAppSelector((state) => state.app.activeMenuNum);
  const dispatch = useAppDispatch();

  return (
    <li
      className={
        activeNum === neededNum ? `${s.menu__item} ${s.active}` : s.menu__item
      }
    >
      <NavLink
        className={
          activeNum === neededNum
            ? `${s.menu__link} ${s.active_link}`
            : s.menu__link
        }
        to={urlPath}
        onClick={() => dispatch(setActiveMenuNum(neededNum))}
      >
        {icon}
        {text}
      </NavLink>
    </li>
  );
};

export default MenuItem;
