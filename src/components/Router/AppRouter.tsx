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
import UsersPageContainer from '../../pages/UsersPage/UsersPageContainer';
import UserPageContainer from '../../pages/UserPage/UserPageContainer';
import MyPageContainer from '../../pages/MyPage/MyPageContainer';
import ChatPage from '../../pages/ChatPage/ChatPage';
import ForgotPasswordForm from '../common/ForgotPasswordForm/ForgotPasswordForm';

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
      <Route
        path="/forgotPassword"
        element={
          <PageContainer
            form={<ForgotPasswordForm />}
            title="Forgot password?"
          />
        }
      />
      <Route path="/" element={<Layout />}>
        <Route index element={<MyPageContainer />} />
        <Route path="users" element={<UsersPageContainer />} />
        <Route path="users/:userId" element={<UserPageContainer />} />
        <Route path="messages" element={<MessagesPage />} />
        <Route path="chat" element={<ChatPage />} />
        <Route path="todos" element={<TodosPage />} />
        <Route path="settings" element={<SettingsPage />}>
          <Route index element={<GeneralSettings />} />
          <Route path="security" element={<SecuritySettings />} />
        </Route>
      </Route>
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
};

export default AppRouter;
