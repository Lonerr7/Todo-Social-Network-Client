import { Comment } from '../../../../../types/reduxTypes/todoSliceTypes';
import Avatar from '../../../common/Avatar/Avatar';
import s from './UserTodoComment.module.scss';

interface Props {
  comment: string;
  createdAt: string;
  user: Comment['user'];
}

const UserTodoComment: React.FC<Props> = ({ comment, createdAt, user }) => {
  const normalDate = new Date(createdAt).toLocaleString();

  return (
    <li className={s.comment}>
      <Avatar
        avatar={user.photo}
        customImgClass={s.comment__photo}
        canViewerBeOpened
      />

      <div className={s.comment__box}>
        <p className={s.comment__nickname}>{user.nickname}</p>
        <p className={s.comment__text}>{comment}</p>
        <p className={s.comment__date}>{normalDate}</p>
      </div>
    </li>
  );
};

export default UserTodoComment;
