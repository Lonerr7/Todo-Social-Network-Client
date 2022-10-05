import Avatar from '../../components/MyOrUserPage/common/Avatar/Avatar';
import MyAvatarControls from '../../components/MyOrUserPage/Myslef/MyAvatarControls/MyAvatarControls';
import MyProfileInfo from '../../components/MyOrUserPage/Myslef/MyProfileInfo/MyProfileInfo';
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
          <MyProfileInfo myself={myself} />
        </div>
      </div>
    </div>
  );
};

export default MyPage;
