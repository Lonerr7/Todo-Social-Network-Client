import './reset.scss';
import './fonts.scss';
import './App.scss';
import AppRouter from './components/Router/AppRouter';

const App: React.FC = () => {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
};

export default App;
