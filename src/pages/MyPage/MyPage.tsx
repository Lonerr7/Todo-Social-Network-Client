import Avatar from '../../components/common/MyOrUserPage/common/Avatar/Avatar';
import MyAvatarControls from '../../components/common/MyOrUserPage/Myslef/MyAvatarControls/MyAvatarControls';
import { useAppSelector } from '../../hooks/hooks';
import s from './MyPage.module.scss';

const MyPage: React.FC = () => {
  const myself = useAppSelector((state) => state.auth.user);

  return (
    <div className={s.myPage}>
      <div className={s.myPage__inner}>
        <div className={s.myPage__left}>
          <div className={s.myPage__avatarBox}>
            <Avatar avatar={myself?.img} />
            <MyAvatarControls />
          </div>
        </div>
        <div className={s.myPage__right}></div>
      </div>
    </div>
  );
};

export default MyPage;
