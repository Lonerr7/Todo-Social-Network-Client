import { NavLink } from 'react-router-dom';
import Container from '../common/Container/Container';
import Logo from '../common/Logo/Logo';
import s from './Header.module.scss';

const Header: React.FC = () => {
  const isAuth = false;

  return (
    <header className={s.header}>
      <Container classProp={s.header__container}>
        <div className={s.header__inner}>
          <Logo />
          {!isAuth ? (
            <NavLink to="/register" className={s.header__register}>
              Sign up
            </NavLink>
          ) : null}
        </div>
      </Container>
    </header>
  );
};

export default Header;
