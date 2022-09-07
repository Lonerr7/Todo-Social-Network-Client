import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../hooks/hooks';
import Container from '../common/Container/Container';
import Logo from '../common/Logo/Logo';
import s from './Header.module.scss';
import HeaderNav from './HeaderNav/HeaderNav';

const Header: React.FC = () => {
  const user = useAppSelector((state) => state.auth.user);

  return (
    <header className={s.header}>
      <Container classProp={s.header__container}>
        <div className={s.header__inner}>
          <Logo />
          {!user ? (
            <NavLink to="/register" className={s.header__register}>
              Sign up
            </NavLink>
          ) : (
            <div className={s.header__box}>
              <p className={s.header__user}>Hello, {user.nickname}</p>
              <HeaderNav />
            </div>
          )}
        </div>
      </Container>
    </header>
  );
};

export default Header;
