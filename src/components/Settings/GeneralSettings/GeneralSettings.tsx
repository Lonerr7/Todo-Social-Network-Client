import s from './GeneralSettings.module.scss';
import { useEffect } from 'react';
import { useAppDispatch } from '../../../hooks/hooks';
import UpdateMyRegisterInfoForm from './UpdateMyRegisterInfoForm/UpdateMyRegisterInfoForm';
import { resetUserErrorMsgs } from '../../../redux/myselfSlice';
import withActiveSettingsNum from '../../../hoc/withActiveSettingsNum';
import SettingsBlock from '../SettingsBlock/SettingsBlock';
import UpdateMyMainInfoForm from './UpdateMyMainInfoForm/UpdateMyMainInfoForm';
import UpdateMyGeneralInfoForm from './UpdateMyGeneralInfoForm/UpdateMyGeneralInfoForm';
import UpdateMyContactInfoForm from './UpdateMyContactInfoForm/UpdateMyContactInfoForm';
import UpdateMyBeliefsInfoForm from './UpdateMyBeliefsInfoForm/UpdateMyBeliefsInfoForm';
import UpdateMyPersonalInfoForm from './UpdateMyPersonalInfoForm/UpdateMyPersonalInfoForm';

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
          title="My general information"
          form={<UpdateMyGeneralInfoForm />}
        />
        <SettingsBlock
          title="My main information"
          form={<UpdateMyMainInfoForm />}
        />
        <SettingsBlock
          title="My contact information"
          form={<UpdateMyContactInfoForm />}
        />
        <SettingsBlock title="My beliefs" form={<UpdateMyBeliefsInfoForm />} />
        <SettingsBlock
          title="My personal information"
          form={<UpdateMyPersonalInfoForm />}
        />
      </div>
    </div>
  );
};

export default withActiveSettingsNum(GeneralSettings, 1);
