import s from './GeneralSettings.module.scss';
import { useEffect } from 'react';
import { useAppDispatch } from '../../../hooks/hooks';
import UpdateUserInfoForm from './UpdateUserInfoForm/UpdateUserInfoForm';
import { resetUserErrorMsgs } from '../../../redux/myselfSlice';

const GeneralSettings: React.FC = () => {
  const dispatch = useAppDispatch();

  // reset errorMsg in settings
  useEffect(() => {
    dispatch(resetUserErrorMsgs());
    // eslint-disable-next-line
  }, []);

  return (
    <div className={s.general}>
      <h1 className={s.general__title}>General</h1>
      <div className={s.general__inner}>
        <h2 className={s.general__subtitle}>Profile</h2>
        <UpdateUserInfoForm />
      </div>
    </div>
  );
};

export default GeneralSettings;
