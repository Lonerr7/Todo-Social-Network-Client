import ReactPaginate from 'react-paginate';
import Search from '../../components/common/Search/Search';
import UserSmall from '../../components/Users/UserSmall/UserSmall';
import { UsersList } from '../../types/reduxTypes/usersSliceTypes';
import s from './UsersPage.module.scss';

interface Props {
  users: UsersList | null | undefined;
  usersSearchText: string;
  pageCount: number;
  searchActionCreator: (payload: string) => {
    payload: string;
    type: string;
  };
  handlePageClick: (selectedItem: { selected: number }) => void;
}

const UsersPage: React.FC<Props> = ({
  users,
  usersSearchText,
  pageCount,
  searchActionCreator,
  handlePageClick,
}) => {
  const usersElements = users?.map((u) => (
    <UserSmall
      key={u.id}
      id={u.id}
      img={u.photo}
      firstName={u.firstName}
      lastName={u.lastName}
      nickname={u.nickname}
      bio={u.bio}
    />
  ));

  return (
    <div className={s.page}>
      <div className={s.page__inner}>
        {usersElements ? (
          <>
            <Search
              text={usersSearchText}
              actionCreator={searchActionCreator}
              placeholder="Search by user's nickname"
            />
            <ul>{usersElements}</ul>
            <ReactPaginate
              pageCount={pageCount}
              onPageChange={handlePageClick}
              activeClassName={s.active}
            />
          </>
        ) : (
          <p>No users</p>
        )}
      </div>
    </div>
  );
};

export default UsersPage;
