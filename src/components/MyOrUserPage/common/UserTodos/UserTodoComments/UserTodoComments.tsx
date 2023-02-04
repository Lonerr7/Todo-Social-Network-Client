import { useEffect } from 'react';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../hooks/reduxToolkitHooks';
import { setProgress } from '../../../../../redux/progressBarSlice';
import UserTodoComment from '../UserTodoComment/UserTodoComment';
import s from './UserTodoComments.module.scss';

const UserTodoComments: React.FC = () => {
  const comments = useAppSelector(
    (state) => state.currentTodo.currentTodoComments
  );
  const todoId = useAppSelector((state) => state.currentTodo.currentTodo?._id)!;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setProgress(100));

    // eslint-disable-next-line
  }, []);

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
