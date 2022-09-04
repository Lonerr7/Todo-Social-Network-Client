import './reset.scss';
import './fonts.scss';
import './App.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Page from './pages/Page/Page';
import RegisterForm from './components/common/RegisterForm/RegisterForm';
import LoginForm from './components/common/LoginForm/LoginForm';

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/register"
          element={<Page form={<RegisterForm />} title="Sign Up" />}
        />
        <Route
          path="/login"
          element={<Page form={<LoginForm />} title="Log in" />}
        />
        <Route
          path="/"
          element={
            <>
              <Header />
              <div className="App__container">
                <Sidebar />
                <Main />
              </div>
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
