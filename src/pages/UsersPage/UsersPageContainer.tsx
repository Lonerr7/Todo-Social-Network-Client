import withActiveMenuNum from '../../hoc/withActiveMenuNum';
import { useAppSelector } from '../../hooks/reduxToolkitHooks';
import { usePagination } from '../../hooks/usePagination';
import { selectUsersBySearch } from '../../redux/selectors/usersSelectors';
import { fetchAllUsers } from '../../redux/usersSlice';
import { setUsersSearchText } from '../../redux/usersSlice';
import UsersPage from './UsersPage';

const UsersPageContainer: React.FC = () => {
  const { usersSearchText, totalUsersCount } = useAppSelector(
    (state) => state.users
  );
  const users = useAppSelector(selectUsersBySearch);

  const { pageCount, page, handlePageClick } = usePagination(
    totalUsersCount,
    '/users?page=',
    5,
    null,
    fetchAllUsers
  );

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

export default withActiveMenuNum(UsersPageContainer, 2);
