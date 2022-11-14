import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/hooks';
import Avatar from '../../MyOrUserPage/common/Avatar/Avatar';
import { HiOutlineTrash } from 'react-icons/hi';
import s from './Message.module.scss';

interface Props {
  userId: string;
  username: string;
  message: string;
  photo: string;
}

const Message: React.FC<Props> = ({ message, username, userId, photo }) => {
  const myself = useAppSelector((state) => state.auth.user);
  const isMe = myself?.id === userId;

  return (
    <li className={s.message}>
      <div className={s.message__inner}>
        <Link to={isMe ? '/' : `/users/${userId}`}>
          <Avatar customImgClass={s.message__avatar} avatar={photo} />
        </Link>
        <div className={s.message__box}>
          <div className={s.message__row}>
            <Link
              className={s.message__usernameLink}
              to={isMe ? '/' : `/users/${userId}`}
            >
              <span className={s.message__username}>
                {username} {isMe && '(you)'}
              </span>
            </Link>
            <button className={s.message__deleteBtn}>
              <HiOutlineTrash className={s.message__deleteIcon} size={18} />
            </button>
          </div>
          <p className={s.message__text}>{message}</p>
        </div>
      </div>
    </li>
  );
};

export default Message;
