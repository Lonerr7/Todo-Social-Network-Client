import s from './TodoList.module.scss';
import TodoListControls from './TodoListControls/TodoListControls';
import TodoListTasks from './TodoListTasks/TodoListTasks';
import TodoListTitle from './TodoListTitle/TodoListTitle';
import TodosCounter from './TodosCounter/TodosCounter';

const TodoList: React.FC = () => {
  return (
    <div className={s.todoList}>
      <TodoListTitle />
      <TodosCounter />
      <TodoListControls />
      <TodoListTasks />
    </div>
  );
};

export default TodoList;
