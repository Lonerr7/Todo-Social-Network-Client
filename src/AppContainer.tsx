import { useEffect } from 'react';
import App from './App';
import ErrorPopup from './components/common/ErrorPopup/ErrorPopup';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { getMe } from './redux/authSlice';

const AppContainer: React.FC = () => {
  const isRegisterLoginPageOpen = useAppSelector(
    (state) => state.app.isRegisterOrLoginPageOpen
  );
  const dispatch = useAppDispatch();

  // Checking if we are logged in or not to then automatically show the content if we are
  useEffect(() => {
    dispatch(getMe());

    // eslint-disable-next-line
  }, []);

  return <App isRegisterLoginPageOpen={isRegisterLoginPageOpen} />;
  return (
    <ul>
      <ErrorPopup />
    </ul>
  );
};

export default AppContainer;
