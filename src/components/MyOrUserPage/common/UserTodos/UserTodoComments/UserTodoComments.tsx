import { useAppSelector } from '../../../../../hooks/hooks';
import UserTodoComment from '../UserTodoComment/UserTodoComment';
import s from './UserTodoComments.module.scss';

const UserTodoComments: React.FC = () => {
  const comments = useAppSelector(
    (state) => state.currentTodo.currentTodo?.comments
  );
  const todoId = useAppSelector((state) => state.currentTodo.currentTodo?._id)!;

  const commentsElems = comments
    ? comments.map((c) => (
        <UserTodoComment
          key={c._id}
          comment={c.comment}
          createdAt={c.createdAt}
          user={c.user}
          todoId={todoId}
          commentId={c._id}
        />
      ))
    : null;

  return <ul className={s.comments}>{commentsElems}</ul>;
};

export default UserTodoComments;
