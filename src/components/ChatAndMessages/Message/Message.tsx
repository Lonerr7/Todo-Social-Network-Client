import { Link } from 'react-router-dom';
import Avatar from '../../MyOrUserPage/common/Avatar/Avatar';
import s from './Message.module.scss';

interface Props {
  userId: string;
  username: string;
  message: string;
  photo: string;
}

const Message: React.FC<Props> = ({ message, username, userId, photo }) => {
  return (
    <div className={s.message}>
      <Link to={`/users/${userId}`}>
        <Avatar customImgClass={s.message__avatar} avatar={photo} />
      </Link>
      <div className={s.message__box}>
        <Link to={`/users/${userId}`}>
          <span>{username}</span>
        </Link>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Message;
