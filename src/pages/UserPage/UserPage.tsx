import { useEffect } from 'react';
import AreYouSurePopup from '../../components/common/Popups/AreYouSurePopup/AreYouSurePopup';
import ShowInfoBtn from '../../components/common/ShowInfoBtn/ShowInfoBtn';
import Avatar from '../../components/MyOrUserPage/common/Avatar/Avatar';
import NameAndBio from '../../components/MyOrUserPage/common/NameAndBio/NameAndBio';
import ProfileInfo from '../../components/MyOrUserPage/common/ProfileInfo/ProfileInfo';
import ProfileTopInfo from '../../components/MyOrUserPage/common/ProfileTopInfo/ProfileTopInfo';
import UserAdditionalInfoContainer from '../../components/MyOrUserPage/common/UserAdditionalInfo/UserAdditionalInfoContainer';
import UserMainInfo from '../../components/MyOrUserPage/common/UserGeneralInfo/UserGeneralInfo';
import UserTodos from '../../components/MyOrUserPage/common/UserTodos/UserTodos';
import UserAvatarControlsContainer from '../../components/MyOrUserPage/User/UserAvatarControls/UserAvatarControlsContainer';
import UserBio from '../../components/MyOrUserPage/User/UserBio/UserBio';
import TodoFilters from '../../components/TodoList/TodoFilters/TodoFilters';
import { useAppDispatch } from '../../hooks/reduxToolkitHooks';
import { setActiveUserTodoFilter } from '../../redux/appSlice';
import { setProgress } from '../../redux/progressBarSlice';
import {
  deleteUser,
  setUserActiveTodoFilterWord,
} from '../../redux/usersSlice';
import { User, UserRoles } from '../../types/reduxTypes/authSliceTypes';
import { Todo } from '../../types/reduxTypes/todoSliceTypes';
import s from './UserPage.module.scss';

interface Props {
  user: User;
  isAdditionalInfoVisible: boolean;
  userTodos: Todo[];
  selectedTodos: Todo[];
  activeTodoFilterNum: number;
  myRole: UserRoles;
  isPopupOpen: boolean;
  isUserBeingBanned: boolean;
  isUserBeingDeleted: boolean;
  banOrUnbanErrorMsg: string;
  toggleAdditionalInfoVisibility: () => void;
}

const UserPage: React.FC<Props> = ({
  user,
  isAdditionalInfoVisible,
  userTodos,
  selectedTodos,
  activeTodoFilterNum,
  myRole,
  isPopupOpen,
  isUserBeingBanned,
  isUserBeingDeleted,
  banOrUnbanErrorMsg,
  toggleAdditionalInfoVisibility,
}) => {
  const dispatch = useAppDispatch();

  // setting progress loader bar to 100%, then it automatically disappears
  useEffect(() => {
    dispatch(setProgress(100));

    // eslint-disable-next-line
  }, []);

  return (
    <div className={s.page}>
      {isPopupOpen ? (
        <AreYouSurePopup
          isFetching={isUserBeingDeleted}
          thunk={deleteUser}
          title="Are you sure you want to delete this user? This can not be undone!"
        />
      ) : null}
      <div className={s.page__inner}>
        <div className={s.page__left}>
          <div className={s.page__avatarBox}>
            <Avatar
              avatar={user.photo}
              wrapperClass={s.page__avatarWrapper}
              canViewerBeOpened={true}
            />
            {((myRole === UserRoles.ADMIN && user.role === UserRoles.USER) ||
              (myRole === UserRoles.CEO &&
                (user.role === UserRoles.USER ||
                  user.role === UserRoles.ADMIN))) && (
              <UserAvatarControlsContainer
                isUserBeingBanned={isUserBeingBanned}
                isBanned={user.isBanned}
                userId={user.id}
                myRole={myRole}
                userRole={user.role}
                banOrUnbanErrorMsg={banOrUnbanErrorMsg}
              />
            )}
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
              isVerified={user.isVerified}
              isBanned={user.isBanned}
              role={user.role}
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
