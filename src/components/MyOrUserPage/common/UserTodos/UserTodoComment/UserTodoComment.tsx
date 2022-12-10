import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../../hooks/hooks';
import { deleteTodoComment } from '../../../../../redux/currentTodoSlice';
import { Comment } from '../../../../../types/reduxTypes/todoSliceTypes';
import Avatar from '../../../common/Avatar/Avatar';
import s from './UserTodoComment.module.scss';

interface Props {
  comment: string;
  createdAt: string;
  user: Comment['user'];
  todoId: string;
  commentId: string;
}

const UserTodoComment: React.FC<Props> = ({
  comment,
  createdAt,
  user,
  todoId,
  commentId,
}) => {
  const normalDate = new Date(createdAt).toLocaleString();
  const myself = useAppSelector((state) => state.auth.user);
  const isMe = myself?.id === user._id;

  const dispatch = useAppDispatch();

  const deleteCommentHandler = () => {
    dispatch(deleteTodoComment({ todoId, commentId }));
  };

  return (
    <li className={s.comment}>
      <Link className={s.comment__link} to={isMe ? '/' : `/users/${user._id}`}>
        <Avatar avatar={user.photo} customImgClass={s.comment__photo} />
      </Link>

      <div className={s.comment__box}>
        {isMe ? (
          <div>
            <Link className={s.comment__link} to="/">
              <span className={s.comment__nickname}>{user.nickname} (you)</span>
            </Link>
            <button onClick={deleteCommentHandler}>delete</button>
          </div>
        ) : (
          <Link className={s.comment__link} to={`/users/${user._id}`}>
            <p className={s.comment__nickname}>{user.nickname}</p>
          </Link>
        )}

        <p className={s.comment__text}>{comment}</p>
        <p className={s.comment__date}>{normalDate}</p>
      </div>
    </li>
  );
};

export default UserTodoComment;
