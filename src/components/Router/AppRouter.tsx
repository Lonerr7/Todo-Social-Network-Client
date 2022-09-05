import Header from '../Header/Header';
import Main from '../Main/Main';
import Sidebar from '../Sidebar/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Page from '../../pages/Page/Page';
import RegisterForm from '../common/RegisterForm/RegisterForm';
import LoginForm from '../common/LoginForm/LoginForm';
import UserPage from '../../pages/UserPage/UserPage';
import FriendsPage from '../../pages/FriendsPage/FriendsPage';
import MessagesPage from '../../pages/MessagesPage/MessagesPage';
import TodosPage from '../../pages/TodosPage/TodosPage';
import SettingsPage from '../../pages/SettingsPage/SettingsPage';

const AppRouter = () => {
  return (
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
  );
};

export default AppRouter;
