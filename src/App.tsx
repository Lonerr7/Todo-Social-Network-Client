import './App.scss';
import AppRouter from './components/Router/AppRouter';

interface AppProps {
  isRegisterLoginPageOpen: boolean;
  isMeBanned: boolean;
}

const App: React.FC<AppProps> = ({ isRegisterLoginPageOpen, isMeBanned }) => {
  return (
    <div className={(isRegisterLoginPageOpen || isMeBanned) ? '' : 'App'}>
      <AppRouter />
    </div>
  );
};

export default App;
