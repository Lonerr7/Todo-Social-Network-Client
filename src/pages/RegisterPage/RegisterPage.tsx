import { Navigate } from 'react-router-dom';
import GoBack from '../../components/common/GoBack/GoBack';
import Logo from '../../components/common/Logo/Logo';
import Preloader from '../../components/common/Preloader/Preloader';
import RegisterForm from '../../components/common/RegisterForm/RegisterForm';
import TextError from '../../components/common/TextError/TextError';
import { useAppSelector } from '../../hooks/hooks';
import s from './RegisterPage.module.scss';

const RegisterPage: React.FC = () => {
  const { isFetching, user, errorMsg } = useAppSelector((state) => state.auth);

  if (user) return <Navigate to="/user/1" />;

  return (
    <div className={s.register}>
      <GoBack />
      <Logo styleClass={s.logoRegister__text} overallClass={s.logoRegister} />
      <h1 className={s.register__title}>Sign Up!</h1>
      <RegisterForm />
      {isFetching ? <Preloader customClass={s.preloader} /> : ''}
      {user ? <p>REGISTERED!</p> : ''}
      {errorMsg ? (
        <TextError customClass={s.textError}>{errorMsg}</TextError>
      ) : (
        ''
      )}
    </div>
  );
};

export default RegisterPage;
