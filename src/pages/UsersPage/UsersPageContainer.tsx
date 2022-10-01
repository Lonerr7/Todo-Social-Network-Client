import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchAllUsers } from '../../redux/usersSlice';
import UsersPage from './UsersPage';

const UsersPageContainer: React.FC = () => {
  const users = useAppSelector((state) => state.users.users);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());

    // eslint-disable-next-line
  }, []);

  return <UsersPage users={users} />;
};

export default UsersPageContainer;
