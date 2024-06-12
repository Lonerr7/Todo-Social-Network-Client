import s from './HeaderNav.module.scss';
import { IoExitOutline } from 'react-icons/io5';
import { useAppDispatch } from '../../../hooks/reduxToolkitHooks';
import { logOut } from '../../../redux/authSlice';

const HeaderNav: React.FC = () => {
  const dispatch = useAppDispatch();

  const onLogout = () => {
    dispatch(logOut());
  };

  return (
    <nav className={s.nav}>
      <ul className={s.nav__list}>
        <li className={s.nav__item}>
          <button className={s.nav__btn} onClick={onLogout}>
            <IoExitOutline className={s.nav__icon} size={24} />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
