import { NavLink } from 'react-router-dom';
import s from './QuckLogin.module.scss';

const QuckLogin: React.FC = () => {
  return (
    <nav className={s.quickLogin}>
      <ul className={s.quickLogin__list}>
        <li className={s.quickLogin__listItem}>
          <NavLink to="/login" className={s.quickLogin__link}>
            Log In
          </NavLink>
        </li>
        <li className={s.quickLogin__listItem}>
          <NavLink to="/register" className={s.quickLogin__link}>
            Sign Up
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default QuckLogin;
