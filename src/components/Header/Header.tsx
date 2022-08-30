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
            <a className={s.header__register} href="#ds">
              Sign up
            </a>
          ) : null}
        </div>
      </Container>
    </header>
  );
};

export default Header;
