import s from './GeneralSettings.module.scss';
import { useEffect } from 'react';
import { useAppDispatch } from '../../../hooks/hooks';
import UpdateMyRegisterInfoForm from './UpdateMyRegisterInfoForm/UpdateMyRegisterInfoForm';
import { resetUserErrorMsgs } from '../../../redux/myselfSlice';
import withActiveSettingsNum from '../../../hoc/withActiveSettingsNum';
import UpdateMyMainInfoForm from './UpdateMyMainInfoForm/UpdateMyMainInfoForm';
import UpdateMyGeneralInfoFormContainer from './UpdateMyGeneralInfoForm/UpdateMyGeneralInfoFormContainer';
import UpdateMyContactInfoForm from './UpdateMyContactInfoForm/UpdateMyContactInfoForm';
import UpdateMyPersonalInfoForm from './UpdateMyPersonalInfoForm/UpdateMyPersonalInfoForm';
import Accordion from '../../common/Accordion/Accordion';
import UpdateMyBeliefsInfoFormContainer from './UpdateMyBeliefsInfoForm/UpdateMyBeliefsInfoFormContainer';

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
        <Accordion title="My register information">
          <UpdateMyRegisterInfoForm />
        </Accordion>
        <Accordion title="My general information">
          <UpdateMyGeneralInfoFormContainer />
        </Accordion>
        <Accordion title="My main information">
          <UpdateMyMainInfoForm />
        </Accordion>
        <Accordion title="My contact information">
          <UpdateMyContactInfoForm />
        </Accordion>
        <Accordion title="My beliefs">
          <UpdateMyBeliefsInfoFormContainer />
        </Accordion>
        <Accordion title="My personal information">
          <UpdateMyPersonalInfoForm />
        </Accordion>
      </div>
    </div>
  );
};

export default withActiveSettingsNum(GeneralSettings, 1);
