import { useAppSelector } from '../../../hooks/reduxToolkitHooks';
import { setActiveTodoFilter } from '../../../redux/appSlice';
import { changeActiveTodoFilterWord } from '../../../redux/todoSlice';
import { Todo } from '../../../types/reduxTypes/todoSliceTypes';
import TodoFilters from '../TodoFilters/TodoFilters';
import TodoInputContainer from './TodoInput/TodoInputContainer';
import s from './TodoListControls.module.scss';

interface Props {
  todos: Todo[];
}

const TodoListControls: React.FC<Props> = ({ todos }) => {
  const activeTodoFilter = useAppSelector(
    (state) => state.app.activeTodoFilter
  );

  return (
    <div className={s.controls}>
      <TodoInputContainer />
      <TodoFilters
        todos={todos}
        activeTodoFilter={activeTodoFilter}
        changeActiveTodoFilterWord={changeActiveTodoFilterWord}
        setActiveTodoFilter={setActiveTodoFilter}
        displayDeleteBtn
      />
    </div>
  );
};

export default TodoListControls;
