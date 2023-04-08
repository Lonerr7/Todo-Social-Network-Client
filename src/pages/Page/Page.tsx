import GoBack from '../../components/common/GoBack/GoBack';
import GoHome from '../../components/common/GoHome/GoHome';
import Logo from '../../components/common/Logo/Logo';
import TextError from '../../components/common/TextError/TextError';
import s from './Page.module.scss';

interface PageProps {
  errorMsg: string;
  title: string;
  subtitle?: string;
  form: React.ReactNode;
}

const Page: React.FC<PageProps> = ({ title, form, errorMsg, subtitle }) => {
  return (
    <div className={s.page}>
      <div className={s.page__box}>
        <GoBack customClass={s.page__goBack} />
        <GoHome customClass={s.page__goHome} />
      </div>
      <Logo overallClass={s.logo} styleClass={s.logo__text} />
      <h1 className={s.page__title}>{title}</h1>
      {subtitle && <h2 className={s.page__subtitle}>{subtitle}</h2>}

      {form}
      {errorMsg ? (
        <TextError customClass={s.textError}>{errorMsg}</TextError>
      ) : (
        ''
      )}
    </div>
  );
};

export default Page;
