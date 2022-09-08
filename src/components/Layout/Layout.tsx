import s from './Layout.module.scss';
import { useAppSelector } from '../../hooks/hooks';
import Preloader from '../common/Preloader/Preloader';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Sidebar from '../Sidebar/Sidebar';

const Layout: React.FC = () => {
  const isGetMeFetching = useAppSelector((state) => state.auth.isGetMeFetching);

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
