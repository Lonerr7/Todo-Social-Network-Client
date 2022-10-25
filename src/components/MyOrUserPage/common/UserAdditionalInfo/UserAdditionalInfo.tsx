import s from './UserAdditionalInfo.module.scss';
import UserInfoBlock from '../UserInfoBlock/UserInfoBlock';
import { UserInfoFields } from '../../../../types/appTypes';

type Props = {
  mainInfoFields: UserInfoFields;
  contactInfoFields: UserInfoFields;
  beliefsInfoFields: UserInfoFields;
  personalInfoFields: UserInfoFields;
};

const UserAdditionalInfo: React.FC<Props> = ({
  mainInfoFields,
  contactInfoFields,
  beliefsInfoFields,
  personalInfoFields,
}) => {
  return (
    <div className={s.info}>
      <UserInfoBlock
        blockTitle="Main information"
        fieldTitles={mainInfoFields.keys}
        fieldValues={mainInfoFields.values}
        rowElemsType={[]} // don't need it here
      />
      <UserInfoBlock
        blockTitle="Contact information"
        fieldTitles={contactInfoFields.keys}
        fieldValues={contactInfoFields.values}
        rowElemsType={['tel']}
      />
      <UserInfoBlock
        blockTitle="Beliefs"
        fieldTitles={beliefsInfoFields.keys}
        fieldValues={beliefsInfoFields.values}
        rowElemsType={[]}
      />
      <UserInfoBlock
        blockTitle="Personal information"
        fieldTitles={personalInfoFields.keys}
        fieldValues={personalInfoFields.values}
        rowElemsType={[]}
      />
    </div>
  );
};

export default UserAdditionalInfo;
