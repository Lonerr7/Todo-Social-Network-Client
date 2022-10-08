import Avatar from '../../components/MyOrUserPage/common/Avatar/Avatar';
import NameAndBio from '../../components/MyOrUserPage/common/NameAndBio/NameAndBio';
import ProfileInfo from '../../components/MyOrUserPage/common/ProfileInfo/ProfileInfo';
import MyAvatarControls from '../../components/MyOrUserPage/Myslef/MyAvatarControls/MyAvatarControls';
import MyBio from '../../components/MyOrUserPage/Myslef/MyProfileInfo/MyBio/MyBio';
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
            <NameAndBio
              fName={myself.firstName}
              lName={myself.lastName}
              nickname={myself.nickname}
              BioComponent={<MyBio bio={myself.bio} />}
            />
            <MyProfileTopInfo />
          </ProfileInfo>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
