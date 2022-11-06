import Message from '../Message/Message';
import s from './Messages.module.scss';

interface Props {
  messages: any;
}

const Messages: React.FC<Props> = ({ messages }) => {
  return (
    <div className={s.messages}>
      {messages.map((msg: any, i: number) => (
        <Message
          key={i}
          username={msg.username}
          message={msg.message}
          photo={msg.avatar}
          userId={msg.id}
          fromBot={msg.fromBot}
        />
      ))}
    </div>
  );
};

export default Messages;
