import './reset.scss';
import './fonts.scss';
import './App.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';
import { Navigate, Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
  const isAuth = true;

  return (
    <div className="App">
      <Routes>
        <Route
          path="/register"
          element={<div className="App">REGISTER FORM</div>}
        />
        <Route path="/login" element={<div className="App">LOGIN FORM</div>} />
        <Route
          path="/"
          element={
            isAuth ? (
              <>
                <Header />
                <div className="App__container">
                  <Sidebar></Sidebar>
                  <Main></Main>
                </div>
              </>
            ) : (
              <Navigate to="/register" />
            )
          }
        />
      </Routes>
    </div>
  );
};

export default App;
