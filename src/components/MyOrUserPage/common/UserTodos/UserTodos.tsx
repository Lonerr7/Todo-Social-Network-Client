import { useAppSelector } from '../../../../hooks/hooks';
import UserTodoSm from './UserTodoSm/UserTodoSm';
import s from './UserTodos.module.scss';

const UserTodos: React.FC = () => {
  const todos = useAppSelector((state) => state.todo.todos);

  const todosElements = todos.map((t) => (
    <UserTodoSm
      key={t.id}
      taskText={t.taskText}
      createdAt={t.createdAt}
      difficulty={t.difficulty}
      id={t.id}
      isCompleted={t.isCompleted}
    />
  ));

  return (
    <div className={s.todos}>
      <ul className={s.toods__list}>{todosElements}</ul>
    </div>
  );
};

export default UserTodos;
