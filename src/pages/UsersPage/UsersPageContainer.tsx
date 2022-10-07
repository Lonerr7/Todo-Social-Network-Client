import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { selectUsersBySearch } from '../../redux/selectors/usersSelectors';
import { fetchAllUsers } from '../../redux/usersSlice';
import { setUsersSearchText } from '../../redux/usersSlice';
import UsersPage from './UsersPage';

const UsersPageContainer: React.FC = () => {
  const { usersSearchText } = useAppSelector((state) => state.users);
  const myId = useAppSelector((state) => state.auth.user!.id);
  const usersWithoutMe =
    useAppSelector(selectUsersBySearch)?.filter((u) => u.id !== myId) || null;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());

    // eslint-disable-next-line
  }, []);

  return (
    <UsersPage
      users={usersWithoutMe}
      usersSearchText={usersSearchText}
      searchActionCreator={setUsersSearchText}
    />
  );
};

export default UsersPageContainer;
