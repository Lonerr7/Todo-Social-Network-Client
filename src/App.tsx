import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header>Header</Header>
      <div className="App__inner">
        <Sidebar></Sidebar>
        <Main></Main>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;
