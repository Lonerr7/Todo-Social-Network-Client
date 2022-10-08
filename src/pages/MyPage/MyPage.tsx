import Avatar from '../../components/MyOrUserPage/common/Avatar/Avatar';
import ProfileInfo from '../../components/MyOrUserPage/common/ProfileInfo/ProfileInfo';
import MyAvatarControls from '../../components/MyOrUserPage/Myslef/MyAvatarControls/MyAvatarControls';
import MyNameAndBio from '../../components/MyOrUserPage/Myslef/MyProfileInfo/MyNameAndBio/MyNameAndBio';
import MyProfileTopInfo from '../../components/MyOrUserPage/Myslef/MyProfileInfo/MyProfileTopInfo/MyProfileTopInfo';
import { useAppSelector } from '../../hooks/hooks';
import s from './MyPage.module.scss';

const MyPage: React.FC = () => {
  const myself = useAppSelector((state) => state.auth.user)!; //!

  return (
    <div className={s.myPage}>
      <div className={s.myPage__inner}>
        <div className={s.myPage__left}>
          <div className={s.myPage__avatarBox}>
            <Avatar avatar={myself?.img} />
            <MyAvatarControls />
          </div>
        </div>
        <div className={s.myPage__right}>
          <ProfileInfo>
            <MyNameAndBio
              fName={myself.firstName}
              lName={myself.lastName}
              nickname={myself.nickname}
              bio={myself.bio}
            />
            <MyProfileTopInfo />
          </ProfileInfo>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
