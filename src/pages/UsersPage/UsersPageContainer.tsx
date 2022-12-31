import { useEffect, useState } from 'react';
import withActiveMenuNum from '../../hoc/withActiveMenuNum';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { selectUsersBySearch } from '../../redux/selectors/usersSelectors';
import { fetchAllUsers } from '../../redux/usersSlice';
import { setUsersSearchText } from '../../redux/usersSlice';
import UsersPage from './UsersPage';

const UsersPageContainer: React.FC = () => {
  const { usersSearchText, totalUsersCount } = useAppSelector(
    (state) => state.users
  );
  const users = useAppSelector(selectUsersBySearch);
  const pageCount = Math.ceil(totalUsersCount / 5); // 5 is a limit
  const [page, setCurrentPage] = useState(1);

  const dispatch = useAppDispatch();

  const handlePageClick = (selectedItem: { selected: number }) => {
    const selectedPage = selectedItem.selected + 1;

    setCurrentPage(selectedPage);
  };

  useEffect(() => {
    (async () => {
      await dispatch(fetchAllUsers(page));

      window.scrollTo(0, 0);
    })();

    // eslint-disable-next-line
  }, [page]);

  return (
    <UsersPage
      users={users}
      usersSearchText={usersSearchText}
      searchActionCreator={setUsersSearchText}
      pageCount={pageCount}
      handlePageClick={handlePageClick}
    />
  );
};

export default withActiveMenuNum(UsersPageContainer, 2);
