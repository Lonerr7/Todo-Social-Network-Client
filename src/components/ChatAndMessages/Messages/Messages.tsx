import React, { useRef, useEffect } from 'react';
import { useAppSelector } from '../../../hooks/reduxToolkitHooks';
import Message from '../Message/Message';
import s from './Messages.module.scss';

const Messages: React.FC = () => {
  const messages = useAppSelector((state) => state.chat.messages);
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
        {messages.map((msg) => (
          <Message
            key={msg._id}
            username={msg.nickname}
            message={msg.text}
            photo={msg.avatar}
            userId={msg.userId}
            messageId={msg._id}
          />
        ))}
      </ul>
    </div>
  );
};

export default React.memo(Messages);
