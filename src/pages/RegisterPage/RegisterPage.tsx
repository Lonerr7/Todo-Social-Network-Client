import GoBack from '../../components/common/GoBack/GoBack';
import Logo from '../../components/common/Logo/Logo';
import RegisterForm from '../../components/common/RegisterForm/RegisterForm';
import s from './RegisterPage.module.scss';

const RegisterPage: React.FC = () => {
  return (
    <div className={s.register}>
      <GoBack />
      <Logo styleClass={s.logoRegister__text} overallClass={s.logoRegister} />
      <h1 className={s.register__title}>Sign Up!</h1>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
