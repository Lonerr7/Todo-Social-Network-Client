import { NavLink } from 'react-router-dom';
import { useAppDispatch } from '../../../../hooks/reduxToolkitHooks';
import { setActiveTodoFilter } from '../../../../redux/appSlice';
import { changeActiveTodoFilterWord } from '../../../../redux/todoSlice';
import {
  Todo,
  TodoFiltersEnum,
} from '../../../../types/reduxTypes/todoSliceTypes';
import s from './ProfileTopInfo.module.scss';

interface Props {
  todos: Array<Todo>;
}

const ProfileTopInfo: React.FC<Props> = ({ todos }) => {
  const allTodosCount = todos.length;
  const completedTodosCount = todos.filter((t) => t.isCompleted).length;
  const dispatch = useAppDispatch();

  const onAllTodosClick = () => {
    dispatch(changeActiveTodoFilterWord(TodoFiltersEnum.ALL));
    dispatch(setActiveTodoFilter(1));
  };

  const onCompletedTodosClick = () => {
    dispatch(changeActiveTodoFilterWord(TodoFiltersEnum.COMPLETED));
    dispatch(setActiveTodoFilter(2));
  };

  return (
    <div className={s.info}>
      <div className={s.info__box}>
        <NavLink className={s.info__link} to="/Todo-Social-Network-Client/users">
          <span className={s.info__number}>0</span>
          <span className={s.info__text}>Friends</span>
        </NavLink>
        <NavLink className={s.info__link} to="/Todo-Social-Network-Client/todos" onClick={onAllTodosClick}>
          <span className={s.info__number}>{allTodosCount}</span>
          <span className={s.info__text}>All Todos</span>
        </NavLink>
        <NavLink
          className={s.info__link}
          to="/Todo-Social-Network-Client/todos"
          onClick={onCompletedTodosClick}
        >
          <span className={s.info__number}>{completedTodosCount}</span>
          <span className={s.info__text}>completed todos</span>
        </NavLink>
      </div>
    </div>
  );
};

export default ProfileTopInfo;
