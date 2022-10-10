import { User } from '../../../../types/reduxTypes';
import { uppercaseFirstLetter } from '../../../../utils/appHelpers';
import UserInfoRow from '../UserInfoRow/UserInfoRow';
import s from './UserMainInfo.module.scss';

type Props = {
  user: User;
};

const UserMainInfo: React.FC<Props> = ({ user }) => {
  const correctcurrentCity = uppercaseFirstLetter(user.currentCity);

  return (
    <div className={s.info}>
      <UserInfoRow
        title="Birthday"
        value={new Date(user.dateOfBirth).toLocaleDateString()}
      />
      <UserInfoRow title="City" value={correctcurrentCity} />
    </div>
  );
};

export default UserMainInfo;
