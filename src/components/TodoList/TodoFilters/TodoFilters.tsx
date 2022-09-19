import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { openPopup } from '../../../redux/popupSlice';
import { changeActiveTodoFilter } from '../../../redux/todoSlice';
import { TodoFiltersEnum } from '../../../types/reduxTypes';
import s from './TodoFilters.module.scss';

const TodoFilters: React.FC = () => {
  const tasksCount = useAppSelector((state) => state.todo.todos.length);
  const dispatch = useAppDispatch();

  const onDeleteAllTasks = () => {
    if (!tasksCount) return;

    dispatch(openPopup(null));
  };

  return (
    <div className={s.filters}>
      <div className={s.filters__box}>
        <button
          className={s.filters__btn}
          onClick={() => dispatch(changeActiveTodoFilter(TodoFiltersEnum.ALL))}
        >
          All
        </button>
        <button
          className={s.filters__btn}
          onClick={() =>
            dispatch(changeActiveTodoFilter(TodoFiltersEnum.COMPLETED))
          }
        >
          Completed
        </button>
        <button
          className={s.filters__btn}
          onClick={() =>
            dispatch(changeActiveTodoFilter(TodoFiltersEnum.UNCOMPLETED))
          }
        >
          Uncompleted
        </button>
      </div>
      <button
        className={`${s.filters__btn} ${s.close}`}
        onClick={onDeleteAllTasks}
      >
        Delete All
      </button>
    </div>
  );
};

export default TodoFilters;
