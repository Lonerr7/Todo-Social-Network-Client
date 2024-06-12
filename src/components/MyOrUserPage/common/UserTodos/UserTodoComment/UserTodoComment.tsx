import defaultAvatar from '../../../../../assets/img/default.jpg';
import { HiOutlineTrash } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../hooks/reduxToolkitHooks';
import { deleteTodoComment } from '../../../../../redux/currentTodoSlice';
import { Comment } from '../../../../../types/reduxTypes/todoSliceTypes';
import Preloader from '../../../../common/Preloader/Preloader';
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
  const { isCommentDeleting, currentCommentOnDeletion } = useAppSelector(
    (state) => state.currentTodo
  );

  const commentOwnerId = user?._id;
  const isUserMissing = user?._id ? false : true;

  const isMe = myself?.id === commentOwnerId;

  const dispatch = useAppDispatch();

  const deleteCommentHandler = () => {
    dispatch(deleteTodoComment({ todoId, commentId }));
  };

  return (
    <li className={s.comment}>
      {!isUserMissing ? (
        <Link
          className={s.comment__link}
          to={isMe ? '/' : `/users/${user._id}`}
        >
          <div className={s.comment__avatarBox}>
            <Avatar avatar={user.photo} customImgClass={s.comment__photo} />
          </div>
        </Link>
      ) : (
        <div
          className={`${s.comment__avatarBox} ${s.comment__deletedAvatarBox}`}
        >
          <span className={s.comment__deletedCross}></span>
          <Avatar avatar={user.photo} customImgClass={s.comment__photo} />
        </div>
      )}

      <div className={s.comment__box}>
        {isMe ? (
          <div className={s.comment__container}>
            <Link className={s.comment__link} to="/">
              <span className={s.comment__nickname}>{user.nickname} (you)</span>
            </Link>

            <div className={s.comment__controls}>
              {isCommentDeleting && currentCommentOnDeletion === commentId ? (
                <Preloader customClass={s.comment__preloader} />
              ) : null}
              <button
                className={s.comment__deleteBtn}
                onClick={deleteCommentHandler}
              >
                <HiOutlineTrash size={20} />
              </button>
            </div>
          </div>
        ) : (
          <div className={s.comment__linkContainer}>
            {!isUserMissing ? (
              <Link className={s.comment__link} to={`/users/${user._id}`}>
                <span className={s.comment__nickname}>{user.nickname}</span>
              </Link>
            ) : (
              <span>[deleted]</span>
            )}
          </div>
        )}

        <span className={s.comment__text}>{comment}</span>
        <p className={s.comment__date}>{normalDate}</p>
      </div>
    </li>
  );
};

export default UserTodoComment;
