import s from './EmojiPicker.module.scss';
import Picker, { EmojiClickData } from 'emoji-picker-react';

interface Props {
  customClass: string;
  isPickerOpened: boolean;
  onEmojiClick: (emojiData: EmojiClickData, event: MouseEvent) => void;
}

const EmojiPicker: React.FC<Props> = ({
  customClass,
  isPickerOpened,
  onEmojiClick,
}) => {
  return (
    <div className={`${s.picker} ${customClass}`}>
      {isPickerOpened && (
        <Picker width="100%" height={400} onEmojiClick={onEmojiClick} />
      )}
    </div>
  );
};

export default EmojiPicker;
