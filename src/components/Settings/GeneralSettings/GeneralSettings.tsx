import s from './GeneralSettings.module.scss';
import { useEffect } from 'react';
import { useAppDispatch } from '../../../hooks/hooks';
import UpdateMyRegisterInfoForm from './UpdateMyRegisterInfoForm/UpdateMyRegisterInfoForm';
import { resetUserErrorMsgs } from '../../../redux/myselfSlice';
import withActiveSettingsNum from '../../../hoc/withActiveSettingsNum';
import SettingsBlock from '../SettingsBlock/SettingsBlock';
import UpdateMyMainInfoForm from './UpdateMyMainInfoForm/UpdateMyMainInfoForm';

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
          title="My register information"
          form={<UpdateMyRegisterInfoForm />}
        />
        <SettingsBlock
          title="My main information"
          form={<UpdateMyMainInfoForm />}
        />
      </div>
    </div>
  );
};

export default withActiveSettingsNum(GeneralSettings, 1);
