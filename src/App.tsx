import './reset.scss';
import './fonts.scss';
import './App.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';
import Container from './components/common/Container/Container';

const App: React.FC = () => {
  // const isAuth = false;

  return (
    <div className="App">
      <Header />
      <Container classProp="App__container">
        <Sidebar></Sidebar>
        <Main></Main>
      </Container>
    </div>
  );
};

export default App;
