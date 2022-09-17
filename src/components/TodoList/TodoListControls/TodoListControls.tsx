import TodoFilters from '../TodoFilters/TodoFilters';
import TodoInput from './TodoInput/TodoInput';
import s from './TodoListControls.module.scss';

const TodoListControls: React.FC = () => {
  return (
    <div className={s.controls}>
      <TodoInput />
      <TodoFilters />
    </div>
  );
};

export default TodoListControls;
