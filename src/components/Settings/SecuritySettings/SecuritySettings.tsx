import ChangePasswordForm from './ChangePasswordForm/ChangePasswordForm';
import s from './SecuritySettings.module.scss';

const SecuritySettings: React.FC = () => {
  return (
    <div className={s.security}>
      <h1 className={s.security__title}>Security</h1>
      <div className={s.security__inner}>
        <h2 className={s.security__subtitle}>Change Password</h2>
        <ChangePasswordForm />
        <h2 className={s.security__subtitle}>Delete My Profile</h2>
      </div>
    </div>
  );
};

export default SecuritySettings;
