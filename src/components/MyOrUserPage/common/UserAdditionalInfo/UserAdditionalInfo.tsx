import { User } from '../../../../types/reduxTypes';
import s from './UserAdditionalInfo.module.scss';
import UserAdditionalInfoBlock from './UserAdditionalInfoBlock/UserAdditionalInfoBlock';

type Props = {
  user: User;
  isVisible: boolean;
};

const UserAdditionalInfo: React.FC<Props> = ({ user, isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className={s.info}>
      <UserAdditionalInfoBlock
        blockTitle="Main information"
        fieldTitles={['City of birth', 'Languages']}
        fieldValues={[user.mainInfo.cityOfBirth]}
        rowElemsType={['']} // don't need it here
      />
      <UserAdditionalInfoBlock
        blockTitle="Contact information"
        fieldTitles={['Mobile number']}
        fieldValues={[user.contactInfo.phoneNumber]}
        rowElemsType={['tel']}
      />
    </div>
  );
};

export default UserAdditionalInfo;
