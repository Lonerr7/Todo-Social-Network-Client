import AreYouSurePopup from '../../components/common/Popups/AreYouSurePopup/AreYouSurePopup';
import TodoList from '../../components/TodoList/TodoList';
import withActiveMenuNum from '../../hoc/withActiveMenuNum';
import { useAppSelector } from '../../hooks/reduxToolkitHooks';
import { deleteAllUserTodos } from '../../redux/todoSlice';
import s from './TodosPage.module.scss';

const TodosPage: React.FC = () => {
  const isPopupOpen = useAppSelector(
    (state) => state.popup.isAreYouSurePopupOpen
  );
  const { areAllTodosDeleting } = useAppSelector((state) => state.todo);

  return (
    <div className={s.todos}>
      {isPopupOpen ? (
        <AreYouSurePopup
          title="Do you want to delete ALL your todos?"
          isFetching={areAllTodosDeleting}
          thunk={deleteAllUserTodos}
        />
      ) : null}
      <TodoList />
    </div>
  );
};

export default withActiveMenuNum(TodosPage, 5);
