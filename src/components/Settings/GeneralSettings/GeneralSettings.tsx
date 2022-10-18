import s from './GeneralSettings.module.scss';
import { useEffect } from 'react';
import { useAppDispatch } from '../../../hooks/hooks';
import UpdateUserInfoForm from './UpdateUserInfoForm/UpdateUserInfoForm';
import { resetUserErrorMsgs } from '../../../redux/myselfSlice';
import withActiveSettingsNum from '../../../hoc/withActiveSettingsNum';
import SettingsBlock from '../SettingsBlock/SettingsBlock';

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
        <SettingsBlock
          title="My general information"
          form={<UpdateUserInfoForm />}
        />
      </div>
    </div>
  );
};

export default withActiveSettingsNum(GeneralSettings, 1);
