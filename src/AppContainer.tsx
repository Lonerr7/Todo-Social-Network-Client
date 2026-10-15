import { useEffect } from 'react';
import App from './App';
import { useAppDispatch, useAppSelector } from './hooks/reduxToolkitHooks';
import { getMe } from './redux/authSlice';

const AppContainer: React.FC = () => {
  const isRegisterLoginPageOpen = useAppSelector(
    (state) => state.app.isRegisterOrLoginPageOpen
  );
  const isMeBanned = useAppSelector((state) => state.auth.user?.isBanned)!;
  const currentTheme = useAppSelector((state) => state.theme.theme);
  const dispatch = useAppDispatch();

  // Checking if we are logged in or not to then automatically show the content if we are
  useEffect(() => {
    dispatch(getMe());
    // dispatch(fetchAllUsers());

    // eslint-disable-next-line
  }, []);

  // setting current theme
  useEffect(() => {
    document.body.setAttribute('data-theme', currentTheme);

    // eslint-disable-next-line
  }, []);

  return (
    <App
      isRegisterLoginPageOpen={isRegisterLoginPageOpen}
      isMeBanned={isMeBanned}
    />
  );
};

export default AppContainer;
