import GoBack from '../../components/common/GoBack/GoBack';
import LoginForm from '../../components/common/LoginForm/LoginForm';
import Logo from '../../components/common/Logo/Logo';
import Preloader from '../../components/common/Preloader/Preloader';
import TextError from '../../components/common/TextError/TextError';
import { useAppSelector } from '../../hooks/hooks';
import s from './LoginPage.module.scss';

const LoginPage: React.FC = () => {
  const { errorMsg, isFetching, user } = useAppSelector((state) => state.auth);

  return (
    <div className={s.loginPage}>
      <GoBack />
      <Logo styleClass={s.logoLogin__text} overallClass={s.logoLogin} />
      <h1 className={s.loginPage__title}>Log In!</h1>
      <LoginForm />
      {isFetching ? <Preloader customClass={s.preloader} /> : ''}
      {user ? <p>LOGGED IN!</p> : ''}
      {errorMsg ? (
        <TextError customClass={s.textError}>{errorMsg}</TextError>
      ) : (
        ''
      )}
    </div>
  );
};

export default LoginPage;
