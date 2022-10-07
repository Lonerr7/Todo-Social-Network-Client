import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { removeCurrentUser, setCurrentUser } from '../../redux/usersSlice';
import s from './UserPage.module.scss';

const UserPage: React.FC = () => {
  const { userId } = useParams();
  const { currentUser } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCurrentUser(userId!));

    return () => {
      dispatch(removeCurrentUser());
    };

    // eslint-disable-next-line
  }, []);

  return (
    <div className={s.page}>
      <div className={s.page__inner}>
        User's page {currentUser?.nickname}: {currentUser?.id}
      </div>
    </div>
  );
};

export default UserPage;
