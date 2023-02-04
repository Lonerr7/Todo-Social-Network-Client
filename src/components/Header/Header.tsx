import { Link } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxToolkitHooks';
import { setProgress } from '../../redux/progressBarSlice';
import Container from '../common/Container/Container';
import Logo from '../common/Logo/Logo';
import s from './Header.module.scss';
import HeaderControls from './HeaderControls';

const Header: React.FC = () => {
  const user = useAppSelector((state) => state.auth.user);
  const progress = useAppSelector((state) => state.progressBar.progress);
  const dispatch = useAppDispatch();

  return (
    <header className={s.header}>
      <Container classProp={s.header__container}>
        <div className={s.header__inner}>
          <Logo />
          {!user ? (
            <Link to="/register" className={s.header__register}>
              Sign up
            </Link>
          ) : (
            <HeaderControls user={user} />
          )}
        </div>
      </Container>
      <LoadingBar
        className={s.header__loadingBar}
        progress={progress}
        loaderSpeed={500}
        shadow={false}
        color="rgb(98, 100, 152)"
        onLoaderFinished={() => {
          dispatch(setProgress(0));
        }}
      />
    </header>
  );
};

export default Header;
