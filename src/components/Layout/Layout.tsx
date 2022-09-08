import s from './Layout.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getMe } from '../../redux/authSlice';
import Preloader from '../common/Preloader/Preloader';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Sidebar from '../Sidebar/Sidebar';
import { useEffect } from 'react';

const Layout: React.FC = () => {
  const isGetMeFetching = useAppSelector((state) => state.auth.isGetMeFetching);
  const dispatch = useAppDispatch();

  // Checking if we are logged in or not to then automatically show the content if we are
  useEffect(() => {
    dispatch(getMe());
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {isGetMeFetching ? (
        <div className={s.preloader__page}>
          <Preloader />
        </div>
      ) : (
        <>
          <Header />
          <div className="App__container">
            <Sidebar />
            <Main />
          </div>
        </>
      )}
    </>
  );
};

export default Layout;
