import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import withActiveMenuNum from '../../hoc/withActiveMenuNum';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxToolkitHooks';
import { selectUserTodoByFilter } from '../../redux/selectors/usersSelectors';
import { fetchCurrentUser, removeCurrentUser } from '../../redux/usersSlice';
import { toggleAdditionalInfoVisibilityHelp } from '../../utils/appHelpers';
import UserPage from './UserPage';

const UserPageContainer = () => {
  const { userId } = useParams();
  const {
    currentUser: user,
    isCurrentUserFetching: isFetching,
    errorMsg,
  } = useAppSelector((state) => state.users!);
  const userTodos = user?.todos!;
  const selectedTodos = useAppSelector(selectUserTodoByFilter);
  const activeTodoFilterNum = useAppSelector(
    (state) => state.app.activeUserTodoFilter
  );
  const myRole = useAppSelector((state) => state.auth.user?.role)!;
  const {
    isCurrentUserBeingBanned: isUserBeingBanned,
    isCurrentUserBeingDeleted: isUserBeingDeleted,
  } = useAppSelector((state) => state.users);
  const isPopupOpen = useAppSelector(
    (state) => state.popup.isAreYouSurePopupOpen
  );

  const dispatch = useAppDispatch();

  const [isAdditionalInfoVisible, setIsAdditionalInfoVisible] = useState(false);

  const toggleAdditionalInfoVisibility = toggleAdditionalInfoVisibilityHelp(
    isAdditionalInfoVisible,
    setIsAdditionalInfoVisible
  );

  useEffect(() => {
    dispatch(fetchCurrentUser(userId!));

    return () => {
      dispatch(removeCurrentUser());
    };

    // eslint-disable-next-line
  }, []);

  if (isFetching) {
    return null;
  }

  if (user === undefined) {
    return <p>Success! Go back to users</p>;
  }

  if (!user || errorMsg) {
    return <p>Error: {errorMsg}</p>;
  }

  return (
    <UserPage
      user={user}
      isAdditionalInfoVisible={isAdditionalInfoVisible}
      toggleAdditionalInfoVisibility={toggleAdditionalInfoVisibility}
      userTodos={userTodos}
      selectedTodos={selectedTodos}
      activeTodoFilterNum={activeTodoFilterNum}
      isUserBeingBanned={isUserBeingBanned}
      isUserBeingDeleted={isUserBeingDeleted}
      myRole={myRole}
      isPopupOpen={isPopupOpen}
    />
  );
};

export default withActiveMenuNum(UserPageContainer, 2);
