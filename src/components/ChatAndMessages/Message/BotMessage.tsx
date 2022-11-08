import s from './Message.module.scss';

interface Props {
  message: string;
}

const BotMessage: React.FC<Props> = ({ message }) => {
  return (
    <li className={s.botMessage}>
      <p className={s.botMessage__message}>{message}</p>
    </li>
  );
};

export default BotMessage;
