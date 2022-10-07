import './App.scss';
import AppRouter from './components/Router/AppRouter';

type AppProps = {
  isRegisterLoginPageOpen: boolean;
};

const App: React.FC<AppProps> = ({ isRegisterLoginPageOpen }) => {
  return (
    <div className={isRegisterLoginPageOpen ? '' : 'App'}>
      <AppRouter />
    </div>
  );
};

export default App;
