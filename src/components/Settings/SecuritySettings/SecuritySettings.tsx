import { useEffect } from 'react';
import { useAppDispatch } from '../../../hooks/hooks';
import { resetUserErrorMsgs } from '../../../redux/userSlice';
import ChangePasswordForm from './ChangePasswordForm/ChangePasswordForm';
import DeleteMyProfileForm from './DeleteMyProfileForm/DeleteMyProfileForm';
import s from './SecuritySettings.module.scss';

const SecuritySettings: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resetUserErrorMsgs());

    // eslint-disable-next-line
  }, []);

  return (
    <div className={s.security}>
      <h1 className={s.security__title}>Security</h1>
      <div className={s.security__inner}>
        <h2 className={s.security__subtitle}>Change Password</h2>
        <ChangePasswordForm />
        <h2 className={s.security__subtitle}>Delete My Profile</h2>
        <DeleteMyProfileForm />
      </div>
    </div>
  );
};

export default SecuritySettings;
