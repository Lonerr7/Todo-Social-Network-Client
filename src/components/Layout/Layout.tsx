import {FC} from 'react';
import s from './Layout.module.scss';
import {useAppSelector} from '../../hooks/reduxToolkitHooks';
import Preloader from '../common/Preloader/Preloader';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Sidebar from '../Sidebar/Sidebar';
import {Toaster} from 'sonner';

const Layout: FC = () => {
  const isGetMeFetching = useAppSelector((state) => state.auth.isGetMeFetching);
  const currentTheme = useAppSelector((state) => state.theme.theme);

  return (
    <>
      {isGetMeFetching ? (
        <div className={s.preloader__page}>
          <Preloader />
        </div>
      ) : (
        <>
          <Toaster
            toastOptions={{
              classNames: {
                closeButton: s.toast__closeButton,
              },
            }}
            closeButton={true}
            duration={8000}
            theme={currentTheme === 'light' ? 'light' : 'dark'}
          />
          <Header customClass={s.animated} />
          <div className={`App__container ${s.animated}`}>
            <Sidebar />
            <Main />
          </div>
        </>
      )}
    </>
  );
};

export default Layout;
