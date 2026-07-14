import { Navigate } from 'react-router-dom';
import GoBack from '../../components/common/GoBack/GoBack';
import LoginForm from '../../components/common/LoginForm/LoginForm';
import Logo from '../../components/common/Logo/Logo';
import TextError from '../../components/common/TextError/TextError';
import { useAppSelector } from '../../hooks/reduxToolkitHooks';
import s from './LoginPage.module.scss';


const LoginPage: React.FC = () => {
  const { errorMsg, user } = useAppSelector((state) => state.auth);

  if (user) return <Navigate to="/" />;

  return (
    <div className={s.loginPage}>
      <GoBack />
      <Logo styleClass={s.logoLogin__text} overallClass={s.logoLogin} />
      <h1 className={s.loginPage__title}>Log In!</h1>
      <LoginForm />
      {errorMsg ? (
        <TextError customClass={s.textError}>{errorMsg}</TextError>
      ) : (
        ''
      )}
    </div>
  );
};

export default LoginPage;
