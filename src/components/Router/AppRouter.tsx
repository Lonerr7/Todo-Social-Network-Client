import { Route, Routes } from 'react-router-dom';
import RegisterForm from '../common/RegisterForm/RegisterForm';
import LoginForm from '../common/LoginForm/LoginForm';
import MessagesPage from '../../pages/MessagesPage/MessagesPage';
import TodosPage from '../../pages/TodosPage/TodosPage';
import SettingsPage from '../../pages/SettingsPage/SettingsPage';
import Layout from '../Layout/Layout';
import GeneralSettings from '../Settings/GeneralSettings/GeneralSettings';
import PageContainer from '../../pages/Page/PageContainer';
import SecuritySettings from '../Settings/SecuritySettings/SecuritySettings';
import MyPage from '../../pages/MyPage/MyPage';
import UsersPageContainer from '../../pages/UsersPage/UsersPageContainer';
import UserPage from '../../pages/UserPage/UserPage';

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
        <Route index element={<MyPage />} />
        <Route path="users" element={<UsersPageContainer />} />
        <Route path="/users/:userId" element={<UserPage />} />
        <Route path="messages" element={<MessagesPage />} />
        <Route path="todos" element={<TodosPage />} />
        <Route path="settings" element={<SettingsPage />}>
          <Route index element={<GeneralSettings />} />
          <Route path="security" element={<SecuritySettings />} />
        </Route>
      </Route>
      {/* Is it GOOD?*/}
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
};

export default AppRouter;
