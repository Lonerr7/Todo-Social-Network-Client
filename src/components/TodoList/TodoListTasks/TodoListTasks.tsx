import TodoTask from '../TodoTask/TodoTask';
import s from './TodoListTasks.module.scss';

const TodoListTasks: React.FC = () => {
  return (
    <ul className={s.tasks}>
      <TodoTask />
      <TodoTask />
    </ul>
  );
};

export default TodoListTasks;
