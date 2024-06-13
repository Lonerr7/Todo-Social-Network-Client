import { Link } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxToolkitHooks';
import { setProgress } from '../../redux/progressBarSlice';
import Container from '../common/Container/Container';
import Logo from '../common/Logo/Logo';
import ThemeSwitcher from '../common/ThemeSwitcher/ThemeSwitcher';
import s from './Header.module.scss';
import HeaderControls from './HeaderControls';

interface Props {
  customClass?: string;
}

const Header: React.FC<Props> = ({ customClass }) => {
  const user = useAppSelector((state) => state.auth.user);
  const progress = useAppSelector((state) => state.progressBar.progress);
  const dispatch = useAppDispatch();

  return (
    <header className={customClass ? `${s.header} ${customClass}` : s.header}>
      <Container classProp={s.header__container}>
        <div className={s.header__inner}>
          <div className={s.header__box}>
            <Logo overallClass={s.header__logo} />
            <ThemeSwitcher />
          </div>
          {!user ? (
            <Link to="/Todo-Social-Network-Client/register" className={s.header__register}>
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
        loaderSpeed={1000}
        shadow={false}
        color="rgb(84, 92, 246)"
        onLoaderFinished={() => {
          dispatch(setProgress(0));
        }}
      />
    </header>
  );
};

export default Header;
