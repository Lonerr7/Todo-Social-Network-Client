import { useEffect } from 'react';
import App from './App';

import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { getMe } from './redux/authSlice';
import { fetchAllUsers } from './redux/usersSlice';

const AppContainer: React.FC = () => {
  const isRegisterLoginPageOpen = useAppSelector(
    (state) => state.app.isRegisterOrLoginPageOpen
  );
  const dispatch = useAppDispatch();

  // Checking if we are logged in or not to then automatically show the content if we are
  useEffect(() => {
    dispatch(getMe());
    dispatch(fetchAllUsers());

    // eslint-disable-next-line
  }, []);

  return <App isRegisterLoginPageOpen={isRegisterLoginPageOpen} />;
};

export default AppContainer;
