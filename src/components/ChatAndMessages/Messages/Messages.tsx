import { useRef, useEffect } from 'react';
import { useAppSelector } from '../../../hooks/hooks';
import Message from '../Message/Message';
import s from './Messages.module.scss';

const Messages: React.FC = () => {
  const { messages } = useAppSelector((state) => state.chat);
  const messagesRef = useRef<HTMLDivElement>(null);

  // Auto scroll bottom when a new message appears
  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current?.scrollHeight;
    }
  }, [messages]);

  return (
    <div className={s.messages} ref={messagesRef}>
      <ul className={s.messages__list}>
        {messages.map((msg, i) => (
          <Message
            key={msg._id}
            username={msg.nickname}
            message={msg.text}
            photo={msg.avatar}
            userId={msg.userId}
          />
        ))}
      </ul>
    </div>
  );
};

export default Messages;
