import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getMe } from '../../redux/authSlice';
import Container from '../common/Container/Container';
import s from './Main.module.scss';

const Main: React.FC = () => {
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();

  // Checking if we are logged in or not to then automatically show the content if we are
  useEffect(() => {
    dispatch(getMe());
    // eslint-disable-next-line
  }, []);

  return (
    <div className={s.main}>
      <Container classProp={s.container}>
        {user ? <Outlet /> : 'Welcome!'}
      </Container>
    </div>
  );
};

export default Main;
