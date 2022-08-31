import './reset.scss';
import './fonts.scss';
import './App.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';

const App: React.FC = () => {
  // const isAuth = false;

  return (
    <div className="App">
      <Header />
      <div className="App__container">
        <Sidebar></Sidebar>
        <Main></Main>
      </div>
    </div>
  );
};

export default App;
