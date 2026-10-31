import React, { useRef, useEffect } from 'react';
import { useAppSelector } from '../../../hooks/reduxToolkitHooks';
import Message from '../Message/Message';
import s from './Messages.module.scss';

const Messages: React.FC = () => {
  const myself = useAppSelector((state) => state.auth.user)!;
  const messages = useAppSelector((state) => state.chat.messages);
  const messagesRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom when a new message appears
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
            isMe={myself?.id === msg.user.id}
            myId={myself?.id}
            message={msg}
          />
        ))}
      </ul>
    </div>
  );
};

export default React.memo(Messages);
