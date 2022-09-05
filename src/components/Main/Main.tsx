import { Outlet } from 'react-router-dom';
import { useAppSelector } from '../../hooks/hooks';
import Container from '../common/Container/Container';
import s from './Main.module.scss';

const Main: React.FC = () => {
  const user = useAppSelector((state) => state.auth.user);

  return (
    <div className={s.main}>
      <Container classProp={s.container}>
        {user ? <Outlet /> : 'Welcome!'}
      </Container>
    </div>
  );
};

export default Main;
