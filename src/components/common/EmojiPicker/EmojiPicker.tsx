import s from './EmojiPicker.module.scss';
import Picker, { EmojiClickData, Theme } from 'emoji-picker-react';
import { Themes } from '../../../types/reduxTypes/themeSliceTypes';

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
        <Picker
          width="100%"
          height={400}
          onEmojiClick={onEmojiClick}
          theme={
            document.body.getAttribute('data-theme') === Themes.LIGHT
              ? Theme.LIGHT
              : Theme.DARK
          }
        />
      )}
    </div>
  );
};

export default EmojiPicker;
