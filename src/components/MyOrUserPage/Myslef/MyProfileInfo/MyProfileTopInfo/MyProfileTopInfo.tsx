import { NavLink } from 'react-router-dom';
import { useAppDispatch } from '../../../../../hooks/hooks';
import {
  setActiveMenuNum,
  setActiveTodoFilter,
} from '../../../../../redux/appSlice';
import { changeActiveTodoFilter } from '../../../../../redux/todoSlice';
import { Todo, TodoFiltersEnum } from '../../../../../types/reduxTypes';
import s from './MyProfileTopInfo.module.scss';

type Props = {
  todos: Todo[];
};

const ProfileInfo: React.FC<Props> = ({ todos }) => {
  const allTodosCount = todos.length;
  const completedTodosCount = todos.filter((t) => t.isCompleted).length;
  const dispatch = useAppDispatch();

  const onAllTodosClick = () => {
    dispatch(setActiveMenuNum(4));

    dispatch(changeActiveTodoFilter(TodoFiltersEnum.ALL));
    dispatch(setActiveTodoFilter(1));
  };

  const onCompletedTodosClick = () => {
    dispatch(setActiveMenuNum(4));

    dispatch(changeActiveTodoFilter(TodoFiltersEnum.COMPLETED));
    dispatch(setActiveTodoFilter(2));
  };

  return (
    <div className={s.info}>
      <div className={s.info__box}>
        <NavLink
          className={s.info__link}
          to="/users"
          onClick={() => dispatch(setActiveMenuNum(2))}
        >
          <span className={s.info__number}>0</span>
          <span className={s.info__text}>Friends</span>
        </NavLink>
        <NavLink className={s.info__link} to="/todos" onClick={onAllTodosClick}>
          <span className={s.info__number}>{allTodosCount}</span>
          <span className={s.info__text}>All Todos</span>
        </NavLink>
        <NavLink
          className={s.info__link}
          to="/todos"
          onClick={onCompletedTodosClick}
        >
          <span className={s.info__number}>{completedTodosCount}</span>
          <span className={s.info__text}>completed todos</span>
        </NavLink>
      </div>
    </div>
  );
};

export default ProfileInfo;
