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
            to="/Todo-Social-Network-Client/login"
            className={`${s.quickLogin__link} ${customLinkClass}`}
          >
            Log In
          </NavLink>
        </li>
        <li className={s.quickLogin__listItem}>
          <NavLink
            to="/Todo-Social-Network-Client/register"
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
