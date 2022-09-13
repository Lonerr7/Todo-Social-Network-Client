import GoBack from '../../components/common/GoBack/GoBack';
import Logo from '../../components/common/Logo/Logo';
import Preloader from '../../components/common/Preloader/Preloader';
import TextError from '../../components/common/TextError/TextError';
import s from './Page.module.scss';

type PageProps = {
  isFetching: boolean;
  errorMsg: string;
  title: string;
  form: React.ReactNode;
};

const Page: React.FC<PageProps> = ({ title, form, errorMsg, isFetching }) => {
  return (
    <div className={s.page}>
      <GoBack />
      <Logo overallClass={s.logo} styleClass={s.logo__text} />
      <h1 className={s.page__title}>{title}</h1>
      {form}
      {isFetching ? <Preloader customClass={s.preloader} /> : ''}
      {errorMsg ? (
        <TextError customClass={s.textError}>{errorMsg}</TextError>
      ) : (
        ''
      )}
    </div>
  );
};

export default Page;
