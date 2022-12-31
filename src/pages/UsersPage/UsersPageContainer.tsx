import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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

  const navigate = useNavigate();
  const location = useLocation();
  const searchURLArr = location.search.split('');
  const page = +searchURLArr[searchURLArr.length - 1];

  const dispatch = useAppDispatch();

  const handlePageClick = (selectedItem: { selected: number } | number) => {
    let selectedPage;
    if (typeof selectedItem === 'object') {
      selectedPage = selectedItem.selected + 1;
    } else {
      selectedPage = selectedItem;
    }

    navigate(`/users?page=${selectedPage}`);
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
      currentPage={page - 1}
    />
  );
};

export default withActiveMenuNum(UsersPageContainer, 2);
