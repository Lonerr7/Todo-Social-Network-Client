import { UserInfoFields } from '../../../../types/appTypes';
import { User } from '../../../../types/reduxTypes/authSliceTypes';
import { createKeysOrValsArr } from '../../../../utils/myPageHelpers';
import UserAdditionalInfo from './UserAdditionalInfo';

type Props = {
  user: User;
  isVisible: boolean;
};

const UserAdditionalInfoContainer: React.FC<Props> = ({ user, isVisible }) => {
  if (!isVisible) return null;

  const mainInfoFields: UserInfoFields = {
    keys: createKeysOrValsArr(user, 'mainInfo', 'keys'),
    values: createKeysOrValsArr(user, 'mainInfo', 'values'),
  };

  const contactInfoFields: UserInfoFields = {
    keys: createKeysOrValsArr(user, 'contactInfo', 'keys'),
    values: createKeysOrValsArr(user, 'contactInfo', 'values'),
  };

  const beliefsInfoFields: UserInfoFields = {
    keys: createKeysOrValsArr(user, 'beliefs', 'keys'),
    values: createKeysOrValsArr(user, 'beliefs', 'values'),
  };

  const personalInfoFields: UserInfoFields = {
    keys: createKeysOrValsArr(user, 'personalInfo', 'keys'),
    values: createKeysOrValsArr(user, 'personalInfo', 'values'),
  };

  return (
    <UserAdditionalInfo
      mainInfoFields={mainInfoFields}
      contactInfoFields={contactInfoFields}
      beliefsInfoFields={beliefsInfoFields}
      personalInfoFields={personalInfoFields}
    />
  );
};

export default UserAdditionalInfoContainer;
