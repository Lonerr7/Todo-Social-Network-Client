import { useAppSelector } from '../../../hooks/hooks';
import BotMessage from '../Message/BotMessage';
import Message from '../Message/Message';
import s from './Messages.module.scss';

const Messages: React.FC = () => {
  const { messages } = useAppSelector((state) => state.chat);

  return (
    <div className={s.messages}>
      <ul className={s.messages__list}>
        {messages.map((msg) => {
          if (msg.fromBot) {
            return <BotMessage key={msg.id} message={msg.text} />;
          }
          return (
            <Message
              key={msg.id}
              username={msg.username}
              message={msg.text}
              photo={msg.avatar}
              userId={msg.id}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Messages;
