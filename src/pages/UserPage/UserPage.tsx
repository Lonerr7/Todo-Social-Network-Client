import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Preloader from '../../components/common/Preloader/Preloader';
import Avatar from '../../components/MyOrUserPage/common/Avatar/Avatar';
import NameAndBio from '../../components/MyOrUserPage/common/NameAndBio/NameAndBio';
import ProfileInfo from '../../components/MyOrUserPage/common/ProfileInfo/ProfileInfo';
import ProfileTopInfo from '../../components/MyOrUserPage/common/ProfileTopInfo/ProfileTopInfo';
import UserAvatarControls from '../../components/MyOrUserPage/User/UserAvatarControls/UserAvatarControls';
import UserBio from '../../components/MyOrUserPage/User/UserBio/UserBio';
import withActiveMenuNum from '../../hoc/withActiveMenuNum';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchCurrentUser, removeCurrentUser } from '../../redux/usersSlice';
import s from './UserPage.module.scss';

const UserPage: React.FC = () => {
  const { userId } = useParams();
  const {
    currentUser: user,
    isCurrentUserFetching: isFetching,
    errorMsg,
  } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser(userId!));

    return () => {
      dispatch(removeCurrentUser());
    };

    // eslint-disable-next-line
  }, []);

  if (isFetching) {
    return <Preloader customClass={s.page__preloader} />;
  }

  if (!user || errorMsg) {
    return <p>{errorMsg}</p>;
  }

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
            <ProfileTopInfo todos={user.todos} />
          </ProfileInfo>
        </div>
      </div>
    </div>
  );
};

export default withActiveMenuNum(UserPage, 2);
