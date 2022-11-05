import { useState } from 'react';
import s from './SendMessageForm.module.scss';

interface Props {
  socket: any;
}

const SendMessageForm: React.FC<Props> = ({ socket }) => {
  const [message, setMessage] = useState('');

  const changeMessageHandler = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setMessage(e.currentTarget.value);
  };

  const sendMessageHandler = () => {
    socket.emit('chatMessage', message);
    setMessage('');
  };

  return (
    <div className={s.sendMessage}>
      <textarea
        className={s.sendMessage__input}
        name="input"
        id="input"
        value={message}
        onChange={changeMessageHandler}
      />
      <button className={s.sendMessage__btn} onClick={sendMessageHandler}>
        Send Message
      </button>
    </div>
  );
};

export default SendMessageForm;
