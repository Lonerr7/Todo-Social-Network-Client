import Search from '../../components/common/Search/Search';
import UserSmall from '../../components/Users/UserSmall/UserSmall';
import { UsersList } from '../../types/reduxTypes';
import s from './UsersPage.module.scss';

type Props = {
  users: UsersList | null;
};

const UsersPage: React.FC<Props> = ({ users }) => {
  const usersElements = users?.map((u) => (
    <UserSmall
      key={u.id}
      id={u.id}
      img={u.img}
      firstName={u.firstName}
      lastName={u.lastName}
      nickname={u.nickname}
    />
  ));

  return (
    <div className={s.page}>
      <div className={s.page__inner}>
        {/* <Search /> */}
        {usersElements ? <ul>{usersElements}</ul> : <p>No users</p>}
      </div>
    </div>
  );
};

export default UsersPage;
