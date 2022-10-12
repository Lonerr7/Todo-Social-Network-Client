import { User } from '../../../../types/reduxTypes';
import { uppercaseFirstLetter } from '../../../../utils/appHelpers';
import UserInfoRow from '../UserInfoRow/UserInfoRow';
import s from './UserGeneralInfo.module.scss';

type Props = {
  user: User;
  isAdditionalInfoVisible: boolean;
  setIsAdditionalInfoVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const UserGeneralInfo: React.FC<Props> = ({
  user,
  isAdditionalInfoVisible: isVisible,
  setIsAdditionalInfoVisible,
}) => {
  const correctcurrentCity = uppercaseFirstLetter(user.currentCity);
  const correctDateOfBirth = user.dateOfBirth
    ? new Date(user.dateOfBirth).toLocaleDateString()
    : '';

  const toggleAdditionalInfoVisibility = () => {
    setIsAdditionalInfoVisible(!isVisible);
  };

  // don't show anything if user has no main info
  if (!correctcurrentCity && !correctDateOfBirth) {
    return <></>;
  }

  return (
    <div className={s.info}>
      <UserInfoRow title="Birthday" value={correctDateOfBirth} />
      <UserInfoRow title="City" value={correctcurrentCity} />
      <button onClick={toggleAdditionalInfoVisibility}>
        Show full information
      </button>
    </div>
  );
};

export default UserGeneralInfo;
