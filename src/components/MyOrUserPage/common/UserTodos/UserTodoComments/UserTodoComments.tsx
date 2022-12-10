import { useAppSelector } from '../../../../../hooks/hooks';
import UserTodoComment from '../UserTodoComment/UserTodoComment';
import s from './UserTodoComments.module.scss';

const UserTodoComments: React.FC = () => {
  const todos = useAppSelector(
    (state) => state.currentTodo.currentTodo?.comments
  );

  const todosElems = todos
    ? todos.map((t) => (
        <UserTodoComment
          key={t._id}
          comment={t.comment}
          createdAt={t.createdAt}
          user={t.user}
        />
      ))
    : null;

  return <ul className={s.comments}>{todosElems}</ul>;
};

export default UserTodoComments;
