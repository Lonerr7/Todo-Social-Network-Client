import { useAppSelector } from '../../../hooks/hooks';
import TodoTask from '../TodoTask/TodoTask';
import s from './TodoListTasks.module.scss';

const TodoListTasks: React.FC = () => {
  const todos = useAppSelector((state) => state.todo.todos);

  const todoElements = todos.map((t) => (
    <TodoTask
      key={t.id}
      id={t.id}
      taskText={t.taskText}
      difficulty={t.difficulty}
      user={t.user}
      createdAt={t.createdAt}
      isCompleted={t.isCompleted}
    />
  ));

  return <ul className={s.tasks}>{todoElements}</ul>;
};

export default TodoListTasks;
