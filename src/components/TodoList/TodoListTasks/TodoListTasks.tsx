import { useAppSelector } from '../../../hooks/hooks';
import { selectTodosByFilter } from '../../../redux/selectors';
import TodoTask from '../TodoTask/TodoTask';
import s from './TodoListTasks.module.scss';

const TodoListTasks: React.FC = () => {
  const todos = useAppSelector(selectTodosByFilter);

  const todoElements = todos.map((t) => (
    <TodoTask
      key={t.id}
      id={t.id}
      taskText={t.taskText}
      difficulty={t.difficulty}
      userId={t.user}
      createdAt={t.createdAt}
      isCompleted={t.isCompleted}
      errMsg={t.errorMsg}
    />
  ));

  return <ul className={s.tasks}>{todoElements}</ul>;
};

export default TodoListTasks;
