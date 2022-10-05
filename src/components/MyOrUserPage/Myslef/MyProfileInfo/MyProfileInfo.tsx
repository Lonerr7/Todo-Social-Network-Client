import { User } from '../../../../types/reduxTypes';
import MyProfileTopInfo from './MyProfileTopInfo/MyProfileTopInfo';
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
      <MyProfileTopInfo/>
    </div>
  );
};

export default MyProfileInfo;
