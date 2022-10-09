import GoBack from '../../components/common/GoBack/GoBack';
import Logo from '../../components/common/Logo/Logo';
import TextError from '../../components/common/TextError/TextError';
import s from './Page.module.scss';

type PageProps = {
  errorMsg: string;
  title: string;
  form: React.ReactNode;
  backBtnClass?: string;
};

const Page: React.FC<PageProps> = ({ title, form, errorMsg, backBtnClass }) => {
  return (
    <div className={s.page}>
      <GoBack  />
      <Logo overallClass={s.logo} styleClass={s.logo__text} />
      <h1 className={s.page__title}>{title}</h1>
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
