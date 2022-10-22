import { User } from '../../../../types/reduxTypes/authSliceTypes';
import s from './UserAdditionalInfo.module.scss';
import UserInfoBlock from '../UserInfoBlock/UserInfoBlock';

type Props = {
  user: User;
  isVisible: boolean;
};

const UserAdditionalInfo: React.FC<Props> = ({ user, isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className={s.info}>
      <UserInfoBlock
        blockTitle="Main information"
        fieldTitles={['City of birth', 'Native language']}
        fieldValues={[
          user.mainInfo?.cityOfBirth,
          user.mainInfo?.nativeLanguage,
        ]}
        rowElemsType={['']} // don't need it here
      />
      <UserInfoBlock
        blockTitle="Contact information"
        fieldTitles={['Mobile number']}
        fieldValues={[user.contactInfo?.phoneNumber]}
        rowElemsType={['tel']}
      />
    </div>
  );
};

export default UserAdditionalInfo;
