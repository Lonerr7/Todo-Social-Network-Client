import './reset.scss';
import './fonts.scss';
import './App.scss';
import AppRouter from './components/Router/AppRouter';
import { getMe } from './redux/authSlice';
import { useEffect } from 'react';
import { useAppDispatch } from './hooks/hooks';

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  // Checking if we are logged in or not to then automatically show the content if we are
  useEffect(() => {
    dispatch(getMe());
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <AppRouter />
    </div>
  );
};

export default App;
