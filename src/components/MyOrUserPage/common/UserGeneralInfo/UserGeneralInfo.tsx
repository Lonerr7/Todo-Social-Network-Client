import { User } from '../../../../types/reduxTypes';
import { uppercaseFirstLetter } from '../../../../utils/appHelpers';
import UserInfoRow from '../UserInfoRow/UserInfoRow';
import s from './UserGeneralInfo.module.scss';

type Props = {
  user: User;
};

const UserGeneralInfo: React.FC<Props> = ({ user }) => {
  const correctcurrentCity = uppercaseFirstLetter(user.currentCity);
  const correctDateOfBirth = user.dateOfBirth
    ? new Date(user.dateOfBirth).toLocaleDateString()
    : '';

  // don't show anything if user has no main info
  if (!correctcurrentCity && !correctDateOfBirth) {
    return <></>;
  }

  return (
    <div className={s.info}>
      <UserInfoRow title="Birthday" value={correctDateOfBirth} />
      <UserInfoRow title="City" value={correctcurrentCity} />
    </div>
  );
};

export default UserGeneralInfo;