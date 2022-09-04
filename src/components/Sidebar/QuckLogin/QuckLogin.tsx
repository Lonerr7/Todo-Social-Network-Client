import { NavLink } from 'react-router-dom';
import s from './QuckLogin.module.scss';

const QuckLogin: React.FC = () => {
  return (
    <nav className={s.quickLogin}>
      <NavLink to="/login" className={s.quickLogin__link}>
        Log In
      </NavLink>
      <NavLink to="/register" className={s.quickLogin__link}>
        Sign Up
      </NavLink>
    </nav>
  );
};

export default QuckLogin;
