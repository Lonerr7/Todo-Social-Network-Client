import { Link } from 'react-router-dom';
import Avatar from '../../MyOrUserPage/common/Avatar/Avatar';
import s from './Message.module.scss';

interface Props {
  userId: string;
  username: string;
  message: string;
  photo: string;
  fromBot?: boolean;
}

const Message: React.FC<Props> = ({
  message,
  username,
  userId,
  photo,
  fromBot,
}) => {
  if (fromBot) {
    return (
      <div className={s.botMessage}>
        <p className={s.botMessage__message}>{message}</p>
      </div>
    );
  }

  return (
    <div className={s.message}>
      <Link to={`/users/${userId}`}>
        <Avatar customImgClass={s.message__avatar} avatar={photo} />
      </Link>
      <div className={s.message__box}>
        <Link className={s.message__usernameLink} to={`/users/${userId}`}>
          <span className={s.message__username}>{username}</span>
        </Link>
        <p className={s.message__text}>{message}</p>
      </div>
    </div>
  );
};

export default Message;
