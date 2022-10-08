import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Avatar from '../../components/MyOrUserPage/common/Avatar/Avatar';
import NameAndBio from '../../components/MyOrUserPage/common/NameAndBio/NameAndBio';
import ProfileInfo from '../../components/MyOrUserPage/common/ProfileInfo/ProfileInfo';
import UserAvatarControls from '../../components/MyOrUserPage/User/UserAvatarControls';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { removeCurrentUser, setCurrentUser } from '../../redux/usersSlice';
import s from './UserPage.module.scss';

const UserPage: React.FC = () => {
  const { userId } = useParams();
  const user = useAppSelector((state) => state.users.currentUser);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCurrentUser(userId!));

    return () => {
      dispatch(removeCurrentUser());
    };

    // eslint-disable-next-line
  }, []);

  if (!user) {
    return <div>No user with this ID!</div>;
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
              nickname={user.nickname}
              BioComponent={user.bio}
            />
          </ProfileInfo>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
