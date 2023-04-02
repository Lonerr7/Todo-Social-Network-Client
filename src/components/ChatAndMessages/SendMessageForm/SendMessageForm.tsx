import { EmojiClickData } from 'emoji-picker-react';
import s from './SendMessageForm.module.scss';
import EmojiPick from '../../common/EmojiPick/EmojiPick';

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
        autoFocus
      ></textarea>
      <EmojiPick
        emojiClickHandler={props.emojiClickHandler}
        isPickerOpened={props.isPickerOpened}
        toggleEmojiPicker={props.btnClickHandler}
        customBtnPickerClass={s.sendMessage__pickerBtn}
        customPickerClass={s.sendMessage__emojiPicker}
      />
      <button className={s.sendMessage__btn} type="submit">
        Send Message
      </button>
    </form>
  );
};

export default SendMessageForm;
