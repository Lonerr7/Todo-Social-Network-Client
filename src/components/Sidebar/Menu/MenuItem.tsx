import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { setActiveMenuNum } from '../../../redux/appSlice';
import ItemsCounter from '../../common/ItemsCounter/ItemsCounter';
import s from './Menu.module.scss';

type MenuItemProps = {
  neededNum: number;
  icon: React.ReactNode;
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
        <span
          className={
            activeNum === neededNum
              ? `${s.menu__itemline} ${s.activeLine}`
              : s.menu__itemline
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
