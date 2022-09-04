import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import GoBack from '../../components/common/GoBack/GoBack';
import Logo from '../../components/common/Logo/Logo';
import Preloader from '../../components/common/Preloader/Preloader';
import TextError from '../../components/common/TextError/TextError';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { clearErrorMsg } from '../../redux/authSlice';
import s from './Page.module.scss';

type PageProps = {
  title: string;
  form: React.ReactNode;
};

const Page: React.FC<PageProps> = ({ title, form }) => {
  const { isFetching, user, errorMsg } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  // deleting error message when exiting register || login page
  useEffect(() => {
    return () => {
      dispatch(clearErrorMsg());
    };

    // eslint-disable-next-line
  }, []);

  if (user) {
    return <Navigate to="/" />;
  }

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
