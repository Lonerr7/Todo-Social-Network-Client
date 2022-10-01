import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/hooks';
import { fetchAllUsers } from '../../redux/usersSlice';
import UsersPage from './UsersPage';

const UsersPageContainer: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());

    // eslint-disable-next-line
  }, []);

  return <UsersPage />;
};

export default UsersPageContainer;
