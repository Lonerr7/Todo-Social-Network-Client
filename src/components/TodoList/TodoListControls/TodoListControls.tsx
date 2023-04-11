import { useAppSelector } from '../../../hooks/reduxToolkitHooks';
import { setActiveTodoFilter } from '../../../redux/appSlice';
import { changeActiveTodoFilterWord } from '../../../redux/todoSlice';
import TodoFilters from '../TodoFilters/TodoFilters';
import TodoInputContainer from './TodoInput/TodoInputContainer';
import s from './TodoListControls.module.scss';

interface Props {
  tasksCount: number;
}

const TodoListControls: React.FC<Props> = ({ tasksCount }) => {
  const activeTodoFilter = useAppSelector(
    (state) => state.app.activeTodoFilter
  );

  return (
    <div className={s.controls}>
      <TodoInputContainer />
      <TodoFilters
        tasksCount={tasksCount}
        activeTodoFilter={activeTodoFilter}
        changeActiveTodoFilterWord={changeActiveTodoFilterWord}
        setActiveTodoFilter={setActiveTodoFilter}
        displayDeleteBtn
      />
    </div>
  );
};

export default TodoListControls;
