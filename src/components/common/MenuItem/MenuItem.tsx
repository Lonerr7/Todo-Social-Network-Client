import { NavLink } from 'react-router-dom';
import ItemsCounter from '../ItemsCounter/ItemsCounter';
import s from './MenuItem.module.scss';

type MenuItemProps = {
  activeNum: number;
  neededNum: number;
  setActiveNum: (neededNum: number) => void;
  icon?: React.ReactNode;
  text: string;
  urlPath: string;
  itemsCount?: number;
  activeBgColor?: string;
  customClass?: string;
};

const MenuItem: React.FC<MenuItemProps> = ({
  activeNum,
  icon,
  neededNum,
  text,
  urlPath,
  itemsCount,
  activeBgColor,
  customClass,
  setActiveNum,
}) => {
  return (
    <li
      className={
        activeNum === neededNum
          ? `${s.menuItem} ${s.active} ${customClass}`
          : `${s.menuItem} ${customClass}`
      }
      style={
        activeBgColor && activeNum === neededNum
          ? { backgroundColor: activeBgColor }
          : {}
      }
    >
      <NavLink
        className={
          activeNum === neededNum
            ? `${s.menuItem__link} ${s.active_link}`
            : s.menuItem__link
        }
        to={urlPath}
        onClick={() => setActiveNum(neededNum)}
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
