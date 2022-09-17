import s from './TodoList.module.scss';
import TodoListControls from './TodoListControls/TodoListControls';
import TodoListTasks from './TodoListTasks/TodoListTasks';

const TodoList: React.FC = () => {
  return (
    <div className={s.todoList}>
      <TodoListControls />
      <TodoListTasks />
    </div>
  );
};

export default TodoList;
