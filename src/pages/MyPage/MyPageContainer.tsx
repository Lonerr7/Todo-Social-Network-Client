import { useEffect, useState } from 'react';
import withActiveMenuNum from '../../hoc/withActiveMenuNum';
import { useAppSelector } from '../../hooks/reduxToolkitHooks';
import { selectTodosByFilter } from '../../redux/selectors/todoSelectors';
import { toggleAdditionalInfoVisibilityHelp } from '../../utils/appHelpers';
import MyPage from './MyPage';
import withBanRedirect from '../../hoc/withBanRedirect';

const MyPageContainer: React.FC = () => {
  const myself = useAppSelector((state) => state.auth.user); //! Todos are not synced
  const todos = useAppSelector((state) => state.todo.todos);
  const selectedTodos = useAppSelector(selectTodosByFilter);
  const activeTodoFilter = useAppSelector(
    (state) => state.app.activeTodoFilter
  );

  const [isAdditionalInfoVisible, setIsAdditionalInfoVisible] = useState(false);

  const toggleAdditionalInfoVisibility = toggleAdditionalInfoVisibilityHelp(
    isAdditionalInfoVisible,
    setIsAdditionalInfoVisible
  );

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

export default withBanRedirect(withActiveMenuNum(MyPageContainer, 1));
