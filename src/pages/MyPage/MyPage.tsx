import Avatar from '../../components/MyOrUserPage/common/Avatar/Avatar';
import NameAndBio from '../../components/MyOrUserPage/common/NameAndBio/NameAndBio';
import ProfileInfo from '../../components/MyOrUserPage/common/ProfileInfo/ProfileInfo';
import MyAvatarControls from '../../components/MyOrUserPage/Myslef/MyAvatarControls/MyAvatarControls';
import MyBio from '../../components/MyOrUserPage/Myslef/MyProfileInfo/MyBio/MyBio';
import ProfileTopInfo from '../../components/MyOrUserPage/common/ProfileTopInfo/ProfileTopInfo';
import withActiveMenuNum from '../../hoc/withActiveMenuNum';
import s from './MyPage.module.scss';
// import FriendsBlock from '../../components/MyOrUserPage/common/FriendsBlock/FriendsBlock';
import UserGeneralInfo from '../../components/MyOrUserPage/common/UserGeneralInfo/UserGeneralInfo';
import ShowInfoBtn from '../../components/common/ShowInfoBtn/ShowInfoBtn';
import { Todo } from '../../types/reduxTypes/todoSliceTypes';
import { User } from '../../types/reduxTypes/authSliceTypes';
import UserAdditionalInfoContainer from '../../components/MyOrUserPage/common/UserAdditionalInfo/UserAdditionalInfoContainer';
import UserTodos from '../../components/MyOrUserPage/common/UserTodos/UserTodos';
import TodoFilters from '../../components/TodoList/TodoFilters/TodoFilters';
import { changeActiveTodoFilterWord } from '../../redux/todoSlice';
import { setActiveTodoFilter } from '../../redux/appSlice';

type Props = {
  myself: User;
  isAdditionalInfoVisible: boolean;
  todos: Array<Todo>;
  toggleAdditionalInfoVisibility: () => void;
  selectedTodos: Todo[];
  activeTodoFilter: number;
};

const MyPage: React.FC<Props> = ({
  myself,
  isAdditionalInfoVisible,
  todos,
  toggleAdditionalInfoVisibility,
  selectedTodos,
  activeTodoFilter,
}) => {
  return (
    <div className={s.myPage}>
      <div className={s.myPage__inner}>
        <div className={s.myPage__left}>
          <div className={s.myPage__avatarBox}>
            <Avatar avatar={myself.photo} canViewerBeOpened={true} />
            <MyAvatarControls />
          </div>
          {/* <FriendsBlock /> */}
        </div>
        <div className={s.myPage__right}>
          <ProfileInfo>
            <NameAndBio
              fName={myself.firstName}
              lName={myself.lastName}
              nickname={myself.nickname}
              BioComponent={<MyBio bio={myself.bio} />}
              isOnline={myself.onlineStatus}
              isVerified={myself.isVerified}
            />
            <UserGeneralInfo user={myself} />
            <ShowInfoBtn
              toggleAdditionalInfoVisibility={toggleAdditionalInfoVisibility}
              isVisible={isAdditionalInfoVisible}
            />
            <UserAdditionalInfoContainer
              user={myself}
              isVisible={isAdditionalInfoVisible}
            />
            <ProfileTopInfo todos={todos} />
          </ProfileInfo>

          <ProfileInfo customClass={s.profileInfo__todos}>
            {todos.length ? (
              <>
                <TodoFilters
                  wrapperClass={s.myPage__todoFilters}
                  todos={todos}
                  activeTodoFilter={activeTodoFilter}
                  changeActiveTodoFilterWord={changeActiveTodoFilterWord}
                  setActiveTodoFilter={setActiveTodoFilter}
                />
                <UserTodos todos={selectedTodos} />
              </>
            ) : null}
          </ProfileInfo>
        </div>
      </div>
    </div>
  );
};

export default withActiveMenuNum(MyPage, 1);
