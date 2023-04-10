import { NavLink } from 'react-router-dom';
import s from './QuckLogin.module.scss';

interface Props {
  customClass?: string;
  customLinkClass?: string;
}

const QuckLogin: React.FC<Props> = ({ customClass, customLinkClass }) => {
  return (
    <nav className={`${s.quickLogin} ${customClass}`}>
      <ul className={s.quickLogin__list}>
        <li className={s.quickLogin__listItem}>
          <NavLink
            to="/login"
            className={`${s.quickLogin__link} ${customLinkClass}`}
          >
            Log In
          </NavLink>
        </li>
        <li className={s.quickLogin__listItem}>
          <NavLink
            to="/register"
            className={`${s.quickLogin__link} ${customLinkClass}`}
          >
            Sign Up
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default QuckLogin;
