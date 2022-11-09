import { EmojiClickData } from 'emoji-picker-react';
import { useState, useRef } from 'react';
import { useAppSelector } from '../../../hooks/hooks';
import SendMessageForm from './SendMessageForm';

const SendMessageFormContainer: React.FC = () => {
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

  const emojiClickHandler = (emojiData: EmojiClickData) => {
    setMessage((prevMessage) => `${prevMessage}${emojiData.emoji}`);
  };

  return (
    <SendMessageForm
      message={message}
      socketChannel={socketChannel}
      inputRef={inputRef}
      isPickerOpened={isPickerOpened}
      sendMessageHandler={sendMessageHandler}
      changeMessageHandler={changeMessageHandler}
      textareaSendMessageHandler={textareaSendMessageHandler}
      btnClickHandler={btnClickHandler}
      emojiClickHandler={emojiClickHandler}
    />
  );
};

export default SendMessageFormContainer;
