import { User } from '../../../../types/reduxTypes';
import ProfileInfo from '../../common/ProfileInfo/ProfileInfo';
import MyNameAndBio from './MyNameAndBio/MyNameAndBio';
import s from './MyProfileInfo.module.scss';

type Props = {
  myself: User;
};

const MyProfileInfo: React.FC<Props> = ({ myself }) => {
  return (
    <div className={s.info}>
      <MyNameAndBio
        fName={myself.firstName}
        lName={myself.lastName}
        nickname={myself.nickname}
        bio={myself.bio}
      />
      <ProfileInfo />
    </div>
  );
};

export default MyProfileInfo;
