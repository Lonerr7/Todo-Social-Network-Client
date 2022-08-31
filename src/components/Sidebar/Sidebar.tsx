import { NavLink } from 'react-router-dom';
import s from './Sidebar.module.scss';

const Sidebar: React.FC = () => {
  const isAuth = false;

  return (
    <div className={s.sidebar}>
      {!isAuth ? (
        <>
          <div className={s.sidebar__quickLogin}>
            <NavLink to="/login" className={s.sidebar__link}>
              Log In
            </NavLink>
            <NavLink to="/register" className={s.sidebar__link}>
              Sign Up
            </NavLink>
          </div>
          <p className={s.sidebar__credits}>
            Made by:{' '}
            <a
              target="_blank"
              rel="noreferrer"
              className={s.sidebar__creditLink}
              href="https://github.com/Lonerr7"
            >
              nic3guy
            </a>
          </p>
        </>
      ) : null}
    </div>
  );
};

export default Sidebar;
