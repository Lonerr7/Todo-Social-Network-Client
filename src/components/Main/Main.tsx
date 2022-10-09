import { Outlet } from 'react-router-dom';
import { useAppSelector } from '../../hooks/hooks';
import AdditionalInfoEnterPage from '../../pages/AdditionalInfoEnterPage/AdditionalInfoEnterPage';
import Container from '../common/Container/Container';
import s from './Main.module.scss';

const Main: React.FC = () => {
  const { user: myself, afterSignUp } = useAppSelector((state) => state.auth);

  if (myself && afterSignUp) {
    return <AdditionalInfoEnterPage />;
  }

  return (
    <main className={s.main}>
      <Container classProp={s.container}>
        {myself ? <Outlet /> : 'Welcome'}
      </Container>
    </main>
  );
};

export default Main;
