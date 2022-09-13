import { Route, Routes } from 'react-router-dom';
import RegisterForm from '../common/RegisterForm/RegisterForm';
import LoginForm from '../common/LoginForm/LoginForm';
import UserPage from '../../pages/UserPage/UserPage';
import FriendsPage from '../../pages/FriendsPage/FriendsPage';
import MessagesPage from '../../pages/MessagesPage/MessagesPage';
import TodosPage from '../../pages/TodosPage/TodosPage';
import SettingsPage from '../../pages/SettingsPage/SettingsPage';
import Layout from '../Layout/Layout';
import GeneralSettings from '../Settings/GeneralSettings/GeneralSettings';
import PageContainer from '../../pages/Page/PageContainer';

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/register"
        element={<PageContainer form={<RegisterForm />} title="Sign Up" />}
      />
      <Route
        path="/login"
        element={<PageContainer form={<LoginForm />} title="Log in" />}
      />
      <Route path="/" element={<Layout />}>
        <Route index element={<UserPage />} />
        <Route path="friends" element={<FriendsPage />} />
        <Route path="messages" element={<MessagesPage />} />
        <Route path="todos" element={<TodosPage />} />
        <Route path="settings" element={<SettingsPage />}>
          <Route index element={<GeneralSettings />} />
          <Route path="security" element={<div>Security</div>} />
        </Route>
      </Route>
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
};

export default AppRouter;
