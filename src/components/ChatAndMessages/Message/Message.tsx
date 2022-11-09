import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/hooks';
import Avatar from '../../MyOrUserPage/common/Avatar/Avatar';
import s from './Message.module.scss';

interface Props {
  id: string;
  username: string;
  message: string;
  photo: string;
}

const Message: React.FC<Props> = ({ message, username, id, photo }) => {
  const myself = useAppSelector((state) => state.auth.user);
  const isMe = myself?.id === id;

  return (
    <li className={s.message}>
      <Link to={isMe ? '/' : `/users/${id}`}>
        <Avatar customImgClass={s.message__avatar} avatar={photo} />
      </Link>
      <div className={s.message__box}>
        <Link
          className={s.message__usernameLink}
          to={isMe ? '/' : `/users/${id}`}
        >
          <span className={s.message__username}>{username} {isMe && '(you)'}</span>
        </Link>
        <p className={s.message__text}>{message}</p>
      </div>
    </li>
  );
};

export default Message;
