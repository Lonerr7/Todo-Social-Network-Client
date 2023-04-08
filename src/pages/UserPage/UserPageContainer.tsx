import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import withActiveMenuNum from '../../hoc/withActiveMenuNum';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxToolkitHooks';
import { resetUsersErrorMessages } from '../../redux/usersSlice';
import { selectUserTodoByFilter } from '../../redux/selectors/usersSelectors';
import { fetchCurrentUser, removeCurrentUser } from '../../redux/usersSlice';
import { toggleAdditionalInfoVisibilityHelp } from '../../utils/appHelpers';
import UserPage from './UserPage';
import FinishProgressBarIfError from '../../components/MyOrUserPage/common/FinishProgressBarIfError/FinishProgressBarIfError';

const UserPageContainer: React.FC = () => {
  const { userId } = useParams();
  const {
    currentUser: user,
    isCurrentUserFetching: isFetching,
    errorMsg,
    isCurrentUserBeingDeleted: isUserBeingDeleted,
  } = useAppSelector((state) => state.users!);
  const userTodos = user?.todos!;
  const selectedTodos = useAppSelector(selectUserTodoByFilter);
  const activeTodoFilterNum = useAppSelector(
    (state) => state.app.activeUserTodoFilter
  );
  const myRole = useAppSelector((state) => state.auth.user?.role)!;
  const isPopupOpen = useAppSelector(
    (state) => state.popup.isAreYouSurePopupOpen
  );

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [isAdditionalInfoVisible, setIsAdditionalInfoVisible] = useState(false);

  const toggleAdditionalInfoVisibility = toggleAdditionalInfoVisibilityHelp(
    isAdditionalInfoVisible,
    setIsAdditionalInfoVisible
  );

  useEffect(() => {
    dispatch(fetchCurrentUser(userId!));

    return () => {
      dispatch(removeCurrentUser());
      dispatch(resetUsersErrorMessages());
    };

    // eslint-disable-next-line
  }, []);

  if (isFetching) {
    return null;
  }

  if (user === undefined) {
    setTimeout(() => {
      navigate('/users?page=1');
    }, 2300);

    return <p>Success! Returning you back...</p>;
  }

  if (!user || errorMsg) {
    return <FinishProgressBarIfError errorMsg={errorMsg} />;
  }

  return (
    <UserPage
      user={user}
      isAdditionalInfoVisible={isAdditionalInfoVisible}
      toggleAdditionalInfoVisibility={toggleAdditionalInfoVisibility}
      userTodos={userTodos}
      selectedTodos={selectedTodos}
      activeTodoFilterNum={activeTodoFilterNum}
      isUserBeingDeleted={isUserBeingDeleted}
      myRole={myRole}
      isPopupOpen={isPopupOpen}
    />
  );
};

export default withActiveMenuNum(UserPageContainer, 2);
