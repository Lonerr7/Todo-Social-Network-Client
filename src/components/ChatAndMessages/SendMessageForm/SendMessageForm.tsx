import { EmojiClickData } from 'emoji-picker-react';
import { VscSmiley } from 'react-icons/vsc';
import EmojiPicker from '../../common/EmojiPicker/EmojiPicker';
import s from './SendMessageForm.module.scss';

interface Props {
  message: string;
  socketChannel: any;
  inputRef: React.RefObject<HTMLTextAreaElement>;
  isPickerOpened: boolean;
  sendMessageHandler: (e: React.FormEvent<HTMLFormElement>) => void;
  changeMessageHandler: (e: React.FormEvent<HTMLTextAreaElement>) => void;
  textareaSendMessageHandler: (
    e: React.KeyboardEvent<HTMLTextAreaElement>
  ) => void;
  btnClickHandler: () => void;
  emojiClickHandler: (emojiData: EmojiClickData) => void;
}

const SendMessageForm: React.FC<Props> = (props) => {
  return (
    <form className={s.sendMessage} onSubmit={props.sendMessageHandler}>
      <textarea
        className={s.sendMessage__input}
        name="input"
        id="input"
        value={props.message}
        onChange={props.changeMessageHandler}
        ref={props.inputRef}
        onKeyDown={props.textareaSendMessageHandler}
      ></textarea>
      <button
        className={s.sendMessage__pickerBtn}
        onClick={props.btnClickHandler}
        type="button"
      >
        <VscSmiley className={s.sendMessage__pickerIcon} size={24} />
      </button>
      <EmojiPicker
        customClass={s.sendMessage__emojiPicker}
        isPickerOpened={props.isPickerOpened}
        onEmojiClick={props.emojiClickHandler}
      />
      <button className={s.sendMessage__btn} type="submit">
        Send Message
      </button>
    </form>
  );
};

export default SendMessageForm;
