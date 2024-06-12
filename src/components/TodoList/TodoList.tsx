import s from './TodoList.module.scss';
import TodoListControls from './TodoListControls/TodoListControls';
import TodoListTasks from './TodoListTasks/TodoListTasks';
import TodoListTitle from './TodoListTitle/TodoListTitle';
import TodosCounter from './TodosCounter/TodosCounter';
import Search from '../common/Search/Search';
import { useAppSelector } from '../../hooks/reduxToolkitHooks';
import { setTodoSearchText } from '../../redux/todoSlice';

const TodoList: React.FC = () => {
  const { todoSearchText, todos } = useAppSelector((state) => state.todo);
  const tasksCount = todos.length;

  return (
    <div className={s.todoList}>
      <TodoListTitle />
      <TodosCounter />
      <TodoListControls tasksCount={tasksCount} />
      <Search
        text={todoSearchText}
        actionCreator={setTodoSearchText}
        placeholder="Search for todo"
      />
      <TodoListTasks />
    </div>
  );
};

export default TodoList;
