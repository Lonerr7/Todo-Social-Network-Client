import { Link } from 'react-router-dom';
import s from './Message.module.scss';

interface Props {
  message: string;
  userId: string;
  username: string;
}

// обернуть только username v Link

const BotMessage: React.FC<Props> = ({ message, userId, username }) => {
  return (
    <li className={s.botMessage}>
      <p className={s.botMessage__message}>
        <Link className={s.botMessage__link} to={`/users/${userId}`}>{username}</Link> {message}
      </p>
    </li>
  );
};

export default BotMessage;
