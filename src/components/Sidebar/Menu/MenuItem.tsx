import { NavLink } from 'react-router-dom';
import s from './Menu.module.scss';

type MenuItemProps = {
  activeNum: number;
  neededNum: number;
  setActiveNum: React.Dispatch<React.SetStateAction<number>>;
  icon: React.ReactNode;
  text: string;
  urlPath: string;
};

const MenuItem: React.FC<MenuItemProps> = ({
  activeNum,
  icon,
  neededNum,
  setActiveNum,
  text,
  urlPath,
}) => {
  return (
    <li
      className={
        activeNum === neededNum ? `${s.menu__item} ${s.active}` : s.menu__item
      }
    >
      <NavLink
        className={s.menu__link}
        to={urlPath}
        onClick={() => setActiveNum(neededNum)}
      >
        {icon}
        {text}
      </NavLink>
    </li>
  );
};

export default MenuItem;
