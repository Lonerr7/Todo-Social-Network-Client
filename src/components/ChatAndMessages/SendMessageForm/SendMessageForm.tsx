import { EmojiClickData } from 'emoji-picker-react';
import { useState, useRef } from 'react';
import { VscSmiley } from 'react-icons/vsc';
import { useAppSelector } from '../../../hooks/hooks';
import EmojiPicker from '../../common/EmojiPicker/EmojiPicker';
import s from './SendMessageForm.module.scss';

const SendMessageForm: React.FC = () => {
  const [message, setMessage] = useState('');
  const { socketChannel } = useAppSelector((state) => state.chat);
  const me = useAppSelector((state) => state.auth.user)!;
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [isPickerOpened, setIsPickerOpened] = useState(false);

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
    setIsPickerOpened(false);

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

  const btnClickHandler = () => {
    setIsPickerOpened(!isPickerOpened);
  };

  const emojiClickHandler = (emojiData: EmojiClickData, event: MouseEvent) => {
    setMessage((prevMessage) => `${prevMessage}${emojiData.emoji}`);
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
      ></textarea>
      <button
        className={s.sendMessage__pickerBtn}
        onClick={btnClickHandler}
        type="button"
      >
        <VscSmiley className={s.sendMessage__pickerIcon} size={24} />
      </button>
      <EmojiPicker
        customClass={s.sendMessage__emojiPicker}
        isPickerOpened={isPickerOpened}
        onEmojiClick={emojiClickHandler}
      />
      <button className={s.sendMessage__btn} type="submit">
        Send Message
      </button>
    </form>
  );
};

export default SendMessageForm;
