import { User } from '../../../../types/reduxTypes/authSliceTypes';
import { uppercaseFirstLetter } from '../../../../utils/appHelpers';
import UserInfoRow from '../UserInfoRow/UserInfoRow';
import s from './UserGeneralInfo.module.scss';

type Props = {
  user: User;
};

const UserGeneralInfo: React.FC<Props> = ({ user }) => {
  const correctcurrentCity = uppercaseFirstLetter(
    user.generalInfo?.currentCity
  );
  const correctDateOfBirth = user.generalInfo?.dateOfBirth
    ? new Date(user.generalInfo.dateOfBirth).toLocaleDateString()
    : '';
  const correctCountry = uppercaseFirstLetter(user.generalInfo?.country);

  // don't show anything if user has no main info
  if (!correctcurrentCity && !correctDateOfBirth) {
    return <></>;
  }

  return (
    <div className={s.info}>
      <UserInfoRow title="Birthday" value={correctDateOfBirth} />
      <UserInfoRow title="Country" value={correctCountry} />
      <UserInfoRow title="City" value={correctcurrentCity} />
    </div>
  );
};

export default UserGeneralInfo;
