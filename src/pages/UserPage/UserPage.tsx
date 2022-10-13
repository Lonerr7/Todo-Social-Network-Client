import Avatar from '../../components/MyOrUserPage/common/Avatar/Avatar';
import NameAndBio from '../../components/MyOrUserPage/common/NameAndBio/NameAndBio';
import ProfileInfo from '../../components/MyOrUserPage/common/ProfileInfo/ProfileInfo';
import ProfileTopInfo from '../../components/MyOrUserPage/common/ProfileTopInfo/ProfileTopInfo';
import UserAdditionalInfo from '../../components/MyOrUserPage/common/UserAdditionalInfo/UserAdditionalInfo';
import UserMainInfo from '../../components/MyOrUserPage/common/UserGeneralInfo/UserGeneralInfo';
import UserAvatarControls from '../../components/MyOrUserPage/User/UserAvatarControls/UserAvatarControls';
import UserBio from '../../components/MyOrUserPage/User/UserBio/UserBio';
import { User } from '../../types/reduxTypes';
import s from './UserPage.module.scss';

type Props = {
  user: User;
  isAdditionalInfoVisible: boolean;
  setIsAdditionalInfoVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const UserPage: React.FC<Props> = ({
  user,
  isAdditionalInfoVisible,
  setIsAdditionalInfoVisible,
}) => {
  return (
    <div className={s.page}>
      <div className={s.page__inner}>
        <div className={s.page__left}>
          <div className={s.page__avatarBox}>
            <Avatar avatar={user?.img} wrapperClass={s.page__avatarWrapper} />
            <UserAvatarControls />
          </div>
        </div>
        <div className={s.page__right}>
          <ProfileInfo>
            <NameAndBio
              fName={user.firstName}
              lName={user.lastName}
              nickname={user!.nickname}
              BioComponent={<UserBio bio={user.bio} />}
            />
            <UserMainInfo
              user={user}
              isAdditionalInfoVisible={isAdditionalInfoVisible}
            />
            <UserAdditionalInfo
              user={user}
              isVisible={isAdditionalInfoVisible}
            />
            <ProfileTopInfo todos={user.todos} />
          </ProfileInfo>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
