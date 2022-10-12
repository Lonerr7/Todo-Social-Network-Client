import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Preloader from '../../components/common/Preloader/Preloader';
import withActiveMenuNum from '../../hoc/withActiveMenuNum';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchCurrentUser, removeCurrentUser } from '../../redux/usersSlice';
import UserPage from './UserPage';
import s from './UserPage.module.scss';

const UserPageContainer = () => {
  const { userId } = useParams();
  const {
    currentUser: user,
    isCurrentUserFetching: isFetching,
    errorMsg,
  } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

  const [isAdditionalInfoVisible, setIsAdditionalInfoVisible] = useState(false);

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
    <UserPage
      user={user}
      isAdditionalInfoVisible={isAdditionalInfoVisible}
      setIsAdditionalInfoVisible={setIsAdditionalInfoVisible}
    />
  );
};

export default withActiveMenuNum(UserPageContainer, 2);
