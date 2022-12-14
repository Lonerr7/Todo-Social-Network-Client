import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Preloader from '../../components/common/Preloader/Preloader';
import withActiveMenuNum from '../../hoc/withActiveMenuNum';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxToolkitHooks';
import { selectUserTodoByFilter } from '../../redux/selectors/usersSelectors';
import { fetchCurrentUser, removeCurrentUser } from '../../redux/usersSlice';
import { toggleAdditionalInfoVisibilityHelp } from '../../utils/appHelpers';
import UserPage from './UserPage';
import s from './UserPage.module.scss';

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
    return <Preloader customClass={s.page__preloader} />;
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
    />
  );
};

export default withActiveMenuNum(UserPageContainer, 2);
