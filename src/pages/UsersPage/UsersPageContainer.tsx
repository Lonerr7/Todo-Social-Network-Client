import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { selectUsersBySearch } from '../../redux/selectors/usersSelectors';
import { fetchAllUsers } from '../../redux/usersSlice';
import { setUsersSearchText } from '../../redux/usersSlice';
import UsersPage from './UsersPage';

const UsersPageContainer: React.FC = () => {
  const users = useAppSelector(selectUsersBySearch);
  const { usersSearchText } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());

    // eslint-disable-next-line
  }, []);

  return (
    <UsersPage
      users={users}
      usersSearchText={usersSearchText}
      searchActionCreator={setUsersSearchText}
    />
  );
};

export default UsersPageContainer;
