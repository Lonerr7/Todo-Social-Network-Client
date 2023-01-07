import { useAppSelector } from '../../../hooks/reduxToolkitHooks';
import { setActiveTodoFilter } from '../../../redux/appSlice';
import { changeActiveTodoFilterWord } from '../../../redux/todoSlice';
import { Todo } from '../../../types/reduxTypes/todoSliceTypes';
import TodoFilters from '../TodoFilters/TodoFilters';
import TodoInput from './TodoInput/TodoInput';
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
      <TodoInput />
      <TodoFilters
        todos={todos}
        activeTodoFilter={activeTodoFilter}
        changeActiveTodoFilterWord={changeActiveTodoFilterWord}
        setActiveTodoFilter={setActiveTodoFilter}
      />
    </div>
  );
};

export default TodoListControls;
