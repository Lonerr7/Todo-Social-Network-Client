import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { setActiveMenuNum } from '../../../redux/appSlice';
import ItemsCounter from '../ItemsCounter/ItemsCounter';
import s from './MenuItem.module.scss';

type MenuItemProps = {
  neededNum: number;
  icon?: React.ReactNode;
  text: string;
  urlPath: string;
  itemsCount?: number;
};

const MenuItem: React.FC<MenuItemProps> = ({
  icon,
  neededNum,
  text,
  urlPath,
  itemsCount,
}) => {
  const activeNum = useAppSelector((state) => state.app.activeMenuNum);
  const dispatch = useAppDispatch();

  return (
    <li
      className={
        activeNum === neededNum ? `${s.menuItem} ${s.active}` : s.menuItem
      }
    >
      <NavLink
        className={
          activeNum === neededNum
            ? `${s.menuItem__link} ${s.active_link}`
            : s.menuItem__link
        }
        to={urlPath}
        onClick={() => dispatch(setActiveMenuNum(neededNum))}
      >
        <span
          className={
            activeNum === neededNum
              ? `${s.menuItem__itemline} ${s.activeLine}`
              : s.menuItem__itemline
          }
        ></span>
        {icon}
        {text}
        {itemsCount ? <ItemsCounter quantity={itemsCount} /> : null}
      </NavLink>
    </li>
  );
};

export default MenuItem;
