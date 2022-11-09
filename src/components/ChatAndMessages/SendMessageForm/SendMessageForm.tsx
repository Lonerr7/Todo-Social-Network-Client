import { useState, useRef } from 'react';
import { useAppSelector } from '../../../hooks/hooks';
import s from './SendMessageForm.module.scss';

const SendMessageForm: React.FC = () => {
  const [message, setMessage] = useState('');
  const { socketChannel } = useAppSelector((state) => state.chat);
  const me = useAppSelector((state) => state.auth.user)!;
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const changeMessageHandler = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setMessage(e.currentTarget.value);
  };

  const sendMessageHelper = () => {
    if (/^\s*$/.test(message)) return;

    const messageObj = {
      userId: me.id,
      text: message,
    };

    socketChannel.emit('chatMessage', messageObj);
    setMessage('');

    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const sendMessageHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    sendMessageHelper();
  };

  const textareaSendMessageHandler = (
    e: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (e.code === 'Enter' && e.shiftKey === false) {
      e.preventDefault();

      sendMessageHelper();
    }
  };

  return (
    <form className={s.sendMessage} onSubmit={sendMessageHandler}>
      <textarea
        className={s.sendMessage__input}
        name="input"
        id="input"
        value={message}
        onChange={changeMessageHandler}
        ref={inputRef}
        onKeyDown={textareaSendMessageHandler}
      />
      <button className={s.sendMessage__btn} type="submit">
        Send Message
      </button>
    </form>
  );
};

export default SendMessageForm;
