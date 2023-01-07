import { useEffect } from 'react';
import withActiveSettingsNum from '../../../hoc/withActiveSettingsNum';
import { useAppDispatch } from '../../../hooks/reduxToolkitHooks';
import { resetUserErrorMsgs } from '../../../redux/myselfSlice';
import Accordion from '../../common/Accordion/Accordion';
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
        <Accordion title="Change Password">
          <ChangePasswordForm />
        </Accordion>
        <Accordion title="Delete My Profile">
          <DeleteMyProfileForm />
        </Accordion>
      </div>
    </div>
  );
};

export default withActiveSettingsNum(SecuritySettings, 2);
