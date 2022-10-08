import { Outlet } from 'react-router-dom';
import { useAppSelector } from '../../hooks/hooks';
import Container from '../common/Container/Container';
import s from './Main.module.scss';

const Main: React.FC = () => {
  const myself = useAppSelector((state) => state.auth.user);

  return (
    <main className={s.main}>
      <Container classProp={s.container}>
        {myself ? <Outlet /> : 'Welcome'}
      </Container>
    </main>
  );
};

export default Main;
