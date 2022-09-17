import s from './TodoList.module.scss';
import TodoListControls from './TodoListControls/TodoListControls';
import TodoListTasks from './TodoListTasks/TodoListTasks';
import TodoListTitle from './TodoListTitle/TodoListTitle';

const TodoList: React.FC = () => {
  return (
    <div className={s.todoList}>
      <TodoListTitle />
      <TodoListControls />
      <TodoListTasks />
    </div>
  );
};

export default TodoList;
