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
import ResetPasswordForm from '../common/ResetPasswordForm/ResetPasswordForm';
import UserTodoPageWithCommentsContainer from '../../pages/UserTodoWithCommentsPage/UserTodoWithCommentsPageContainer';
import AppearanceSettings from '../Settings/AppearanceSettings/AppearanceSettings';

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
            subtitle="Step 1: Enter your email. We will send there password reset token."
          />
        }
      />
      <Route
        path="/resetPassword"
        element={
          <PageContainer
            form={<ResetPasswordForm />}
            title="Reset your password"
            subtitle="Step 2: Enter your password reset token, new passwrod and confirm it!"
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
        <Route
          path="todo/:todoId"
          element={<UserTodoPageWithCommentsContainer />}
        />
        <Route path="settings" element={<SettingsPage />}>
          <Route index element={<GeneralSettings />} />
          <Route path="security" element={<SecuritySettings />} />
          <Route path="appearance" element={<AppearanceSettings />} />
        </Route>
      </Route>

      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
};

export default AppRouter;
