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
import UserPage from './pages/UserPage/UserPage';
import FriendsPage from './pages/FriendsPage/FriendsPage';
import MessagesPage from './pages/MessagesPage/MessagesPage';
import TodosPage from './pages/TodosPage/TodosPage';
import SettingsPage from './pages/SettingsPage/SettingsPage';

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
        >
          <Route index element={<UserPage />} />
          <Route path="friends" element={<FriendsPage />} />
          <Route path="messages" element={<MessagesPage />} />
          <Route path="todos" element={<TodosPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </div>
  );
};

export default App;
