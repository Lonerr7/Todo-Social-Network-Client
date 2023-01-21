import ShowInfoBtn from '../../components/common/ShowInfoBtn/ShowInfoBtn';
import Avatar from '../../components/MyOrUserPage/common/Avatar/Avatar';
import NameAndBio from '../../components/MyOrUserPage/common/NameAndBio/NameAndBio';
import ProfileInfo from '../../components/MyOrUserPage/common/ProfileInfo/ProfileInfo';
import ProfileTopInfo from '../../components/MyOrUserPage/common/ProfileTopInfo/ProfileTopInfo';
import UserAdditionalInfoContainer from '../../components/MyOrUserPage/common/UserAdditionalInfo/UserAdditionalInfoContainer';
import UserMainInfo from '../../components/MyOrUserPage/common/UserGeneralInfo/UserGeneralInfo';
import UserTodos from '../../components/MyOrUserPage/common/UserTodos/UserTodos';
import UserAvatarControls from '../../components/MyOrUserPage/User/UserAvatarControls/UserAvatarControls';
import UserBio from '../../components/MyOrUserPage/User/UserBio/UserBio';
import TodoFilters from '../../components/TodoList/TodoFilters/TodoFilters';
import { setActiveUserTodoFilter } from '../../redux/appSlice';
import { setUserActiveTodoFilterWord } from '../../redux/usersSlice';
import { User } from '../../types/reduxTypes/authSliceTypes';
import { Todo } from '../../types/reduxTypes/todoSliceTypes';
import s from './UserPage.module.scss';

interface Props {
  user: User;
  isAdditionalInfoVisible: boolean;
  userTodos: Todo[];
  selectedTodos: Todo[];
  activeTodoFilterNum: number;
  toggleAdditionalInfoVisibility: () => void;
}

const UserPage: React.FC<Props> = ({
  user,
  isAdditionalInfoVisible,
  userTodos,
  selectedTodos,
  activeTodoFilterNum,
  toggleAdditionalInfoVisibility,
}) => {
  return (
    <div className={s.page}>
      <div className={s.page__inner}>
        <div className={s.page__left}>
          <div className={s.page__avatarBox}>
            <Avatar
              avatar={user.photo}
              wrapperClass={s.page__avatarWrapper}
              canViewerBeOpened={true}
            />
            <UserAvatarControls />
          </div>
        </div>
        <div className={s.page__right}>
          <ProfileInfo>
            <NameAndBio
              fName={user.firstName}
              lName={user.lastName}
              nickname={user.nickname}
              BioComponent={<UserBio bio={user.bio} />}
              isOnline={user.onlineStatus}
            />
            <UserMainInfo user={user} />
            <ShowInfoBtn
              toggleAdditionalInfoVisibility={toggleAdditionalInfoVisibility}
              isVisible={isAdditionalInfoVisible}
            />
            <UserAdditionalInfoContainer
              user={user}
              isVisible={isAdditionalInfoVisible}
            />
            <ProfileTopInfo todos={user.todos} />
          </ProfileInfo>
          {userTodos.length ? (
            <ProfileInfo customClass={s.profileInfo__todos}>
              <TodoFilters
                wrapperClass={s.page__todoFilters}
                todos={userTodos}
                activeTodoFilter={activeTodoFilterNum}
                changeActiveTodoFilterWord={setUserActiveTodoFilterWord}
                setActiveTodoFilter={setActiveUserTodoFilter}
              />
              <UserTodos todos={selectedTodos} />
            </ProfileInfo>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default UserPage;
