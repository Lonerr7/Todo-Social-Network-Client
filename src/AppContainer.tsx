import { useEffect } from 'react';
import App from './App';
import { useAppDispatch, useAppSelector } from './hooks/reduxToolkitHooks';
import { getMe } from './redux/authSlice';
import { updateMyOnlineStatus } from './redux/myselfSlice';
// import { fetchAllUsers } from './redux/usersSlice';
import { OnlineStatusEnum } from './types/reduxTypes/authSliceTypes';

const AppContainer: React.FC = () => {
  const isRegisterLoginPageOpen = useAppSelector(
    (state) => state.app.isRegisterOrLoginPageOpen
  );
  const isMeBanned = useAppSelector((state) => state.auth.user?.isBanned)!;
  const currentTheme = useAppSelector((state) => state.theme.theme);
  const dispatch = useAppDispatch();

  const handleTabClose = (e: BeforeUnloadEvent) => {
    e.preventDefault();

    dispatch(
      updateMyOnlineStatus({
        onlineStatus: OnlineStatusEnum.OFFLINE,
      })
    );
  };

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

  // Registering beforeunload event to log out when we close tab (to send onlineStatus: false when we close the tab)
  useEffect(() => {
    window.addEventListener('beforeunload', handleTabClose);

    return () => {
      dispatch(
        updateMyOnlineStatus({
          onlineStatus: OnlineStatusEnum.OFFLINE,
        })
      );
      window.removeEventListener('beforeunload', handleTabClose);
    };

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
