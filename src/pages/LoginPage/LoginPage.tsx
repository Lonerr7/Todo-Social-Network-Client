import GoBack from '../../components/common/GoBack/GoBack';
import LoginForm from '../../components/common/LoginForm/LoginForm';
import Logo from '../../components/common/Logo/Logo';
import s from './LoginPage.module.scss';

const LoginPage: React.FC = () => {
  return (
    <div className={s.loginPage}>
      <GoBack />
      <Logo styleClass={s.logoLogin__text} overallClass={s.logoLogin} />
      <h1 className={s.loginPage__title}>Log In!</h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
