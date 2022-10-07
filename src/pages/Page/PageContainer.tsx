import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { toggleRegisterLoginPageOpening } from '../../redux/appSlice';
import { clearErrorMsg } from '../../redux/authSlice';
import Page from './Page';

type PageContainerProps = {
  title: string;
  form: React.ReactNode;
};

const PageContainer: React.FC<PageContainerProps> = ({ title, form }) => {
  const { user, errorMsg } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  // deleting error message when exiting register || login page
  useEffect(() => {
    dispatch(toggleRegisterLoginPageOpening(true));

    return () => {
      dispatch(clearErrorMsg());

      dispatch(toggleRegisterLoginPageOpening(false));
    };

    // eslint-disable-next-line
  }, []);

  if (user) {
    return <Navigate to="/" />;
  }

  return <Page title={title} form={form} errorMsg={errorMsg} />;
};

export default PageContainer;
