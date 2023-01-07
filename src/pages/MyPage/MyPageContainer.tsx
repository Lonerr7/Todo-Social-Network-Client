import { useEffect, useState } from 'react';
import withActiveMenuNum from '../../hoc/withActiveMenuNum';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxToolkitHooks';
import { updateMyOnlineStatus } from '../../redux/myselfSlice';
import { selectTodosByFilter } from '../../redux/selectors/todoSelectors';
import { OnlineStatusEnum } from '../../types/reduxTypes/authSliceTypes';
import { toggleAdditionalInfoVisibilityHelp } from '../../utils/appHelpers';
import MyPage from './MyPage';

const MyPageContainer: React.FC = () => {
  const myself = useAppSelector((state) => state.auth.user); //! Todos are not synced
  const todos = useAppSelector((state) => state.todo.todos);
  const selectedTodos = useAppSelector(selectTodosByFilter);
  const activeTodoFilter = useAppSelector(
    (state) => state.app.activeTodoFilter
  );
  const dispatch = useAppDispatch();

  const [isAdditionalInfoVisible, setIsAdditionalInfoVisible] = useState(false);

  const toggleAdditionalInfoVisibility = toggleAdditionalInfoVisibilityHelp(
    isAdditionalInfoVisible,
    setIsAdditionalInfoVisible
  );

  useEffect(() => {
    dispatch(
      updateMyOnlineStatus({
        onlineStatus: OnlineStatusEnum.ONLINE,
      })
    );

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (document.title !== 'Todo Social Network') {
      document.title = 'Todo Social Network';
    }

    // eslint-disable-next-line
  }, []);

  if (!myself) return <></>;

  return (
    <MyPage
      myself={myself}
      isAdditionalInfoVisible={isAdditionalInfoVisible}
      todos={todos}
      selectedTodos={selectedTodos}
      toggleAdditionalInfoVisibility={toggleAdditionalInfoVisibility}
      activeTodoFilter={activeTodoFilter}
    />
  );
};

export default withActiveMenuNum(MyPageContainer, 1);
