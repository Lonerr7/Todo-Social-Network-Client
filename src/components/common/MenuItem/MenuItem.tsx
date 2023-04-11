import { Link } from 'react-router-dom';
import ItemsCounter from '../ItemsCounter/ItemsCounter';
import s from './MenuItem.module.scss';

interface MenuItemProps {
  activeNum: number;
  neededNum: number;
  icon?: React.ReactNode;
  text: string;
  urlPath: string;
  itemsCount?: number;
  activeBgColor?: string;
  customClass?: string;
  customTextClass?: string;
  customActiveLineClass?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({
  activeNum,
  icon,
  neededNum,
  text,
  urlPath,
  itemsCount,
  activeBgColor,
  customClass,
  customTextClass,
  customActiveLineClass,
}) => {
  return (
    <div
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
      <Link
        className={
          activeNum === neededNum
            ? `${s.menuItem__link} ${s.active_link}`
            : s.menuItem__link
        }
        to={urlPath}
      >
        <span
          className={
            activeNum === neededNum
              ? `${s.menuItem__itemline} ${s.activeLine} ${customActiveLineClass}`
              : s.menuItem__itemline
          }
        ></span>
        {icon}
        <span className={customTextClass}>{text}</span>
        {itemsCount ? (
          <ItemsCounter
            customClass={s.menuItem__counter}
            quantity={itemsCount}
          />
        ) : null}
      </Link>
    </div>
  );
};

export default MenuItem;
