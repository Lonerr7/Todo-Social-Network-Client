import { useState, useRef } from 'react';
import { useAppSelector } from '../../../hooks/hooks';
import s from './SendMessageForm.module.scss';

interface Props {
  socket: any;
}

const SendMessageForm: React.FC<Props> = ({ socket }) => {
  const [message, setMessage] = useState('');
  const me = useAppSelector((state) => state.auth.user)!;
  const inputRef = useRef<HTMLInputElement>(null);

  const changeMessageHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setMessage(e.currentTarget.value);
  };

  const sendMessageHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (/^\s*$/.test(message)) return;

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
    <form className={s.sendMessage} onSubmit={sendMessageHandler}>
      <input
        className={s.sendMessage__input}
        name="input"
        id="input"
        value={message}
        onChange={changeMessageHandler}
        ref={inputRef}
      />
      <button className={s.sendMessage__btn} type="submit">
        Send Message
      </button>
    </form>
  );
};

export default SendMessageForm;
