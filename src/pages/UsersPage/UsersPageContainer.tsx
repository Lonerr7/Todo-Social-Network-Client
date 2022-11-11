import { useEffect } from 'react';
import withActiveMenuNum from '../../hoc/withActiveMenuNum';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { selectUsersWithSearchWithoutMe } from '../../redux/selectors/usersSelectors';
import { fetchAllUsers } from '../../redux/usersSlice';
import { setUsersSearchText } from '../../redux/usersSlice';
import UsersPage from './UsersPage';

const UsersPageContainer: React.FC = () => {
  const { usersSearchText } = useAppSelector((state) => state.users);
  const usersWithoutMe = useAppSelector(selectUsersWithSearchWithoutMe);
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

export default withActiveMenuNum(UsersPageContainer, 2);
