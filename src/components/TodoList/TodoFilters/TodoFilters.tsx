import { useAppDispatch } from '../../../hooks/hooks';
import { openPopup } from '../../../redux/popupSlice';
import s from './TodoFilters.module.scss';

const TodoFilters: React.FC = () => {
  const dispatch = useAppDispatch();

  const onDeleteAllTasks = () => {
    dispatch(openPopup(null));
  };

  return (
    <div className={s.filters}>
      <div className={s.filters__box}>
        <button className={s.filters__btn}>All</button>
        <button className={s.filters__btn}>Completed</button>
        <button className={s.filters__btn}>Uncompleted</button>
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
