import { useEffect } from 'react';
import withActiveMenuNum from '../../hoc/withActiveMenuNum';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxToolkitHooks';
import { usePagination } from '../../hooks/usePagination';
import { selectUsersWithSearchWithoutMe } from '../../redux/selectors/usersSelectors';
import { fetchAllUsers, resetUsersErrorMessages } from '../../redux/usersSlice';
import { setUsersSearchText } from '../../redux/usersSlice';
import UsersPage from './UsersPage';
import withBanRedirect from '../../hoc/withBanRedirect';

const UsersPageContainer: React.FC = () => {
  const { usersSearchText, totalUsersCount, errorMsg } = useAppSelector(
    (state) => state.users
  );
  const users = useAppSelector(selectUsersWithSearchWithoutMe);
  const dispatch = useAppDispatch();

  const { pageCount, page, handlePageClick } = usePagination(
    totalUsersCount,
    '/users?page=',
    5,
    null,
    fetchAllUsers
  );

  // Deleting users error message if it exists
  useEffect(() => {
    return () => {
      errorMsg && dispatch(resetUsersErrorMessages());
    };

    // eslint-disable-next-line
  }, []);

  return (
    <UsersPage
      users={users}
      usersSearchText={usersSearchText}
      searchActionCreator={setUsersSearchText}
      pageCount={pageCount}
      handlePageClick={handlePageClick}
      currentPage={page - 1}
    />
  );
};

export default withBanRedirect(withActiveMenuNum(UsersPageContainer, 2));
