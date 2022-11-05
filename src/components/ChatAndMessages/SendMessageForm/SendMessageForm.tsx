import { useState, useRef } from 'react';
import { useAppSelector } from '../../../hooks/hooks';
import s from './SendMessageForm.module.scss';

interface Props {
  socket: any;
}

const SendMessageForm: React.FC<Props> = ({ socket }) => {
  const [message, setMessage] = useState('');
  const me = useAppSelector((state) => state.auth.user)!;
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const changeMessageHandler = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setMessage(e.currentTarget.value);
  };

  const sendMessageHandler = () => {
    const messageObj = {
      userId: me.id,
      message,
    };

    socket.emit('chatMessage', messageObj);
    setMessage('');
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className={s.sendMessage}>
      <textarea
        className={s.sendMessage__input}
        name="input"
        id="input"
        value={message}
        onChange={changeMessageHandler}
        ref={inputRef}
      />
      <button className={s.sendMessage__btn} onClick={sendMessageHandler}>
        Send Message
      </button>
    </div>
  );
};

export default SendMessageForm;
