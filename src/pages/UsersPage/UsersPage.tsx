import Search from '../../components/common/Search/Search';
import UserSmall from '../../components/Users/UserSmall/UserSmall';
import { UsersList } from '../../types/reduxTypes';
import s from './UsersPage.module.scss';

type Props = {
  users: UsersList | null;
  usersSearchText: string;
  searchActionCreator: (payload: string) => {
    payload: string;
    type: string;
  };
};

const UsersPage: React.FC<Props> = ({
  users,
  usersSearchText,
  searchActionCreator,
}) => {
  const usersElements = users?.map((u) => (
    <UserSmall
      key={u.id}
      id={u.id}
      img={u.img}
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
          </>
        ) : (
          <p>No users</p>
        )}
      </div>
    </div>
  );
};

export default UsersPage;
