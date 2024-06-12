import { EmojiClickData, Theme } from 'emoji-picker-react';
import s from './EmojiPick.module.scss';
import { VscSmiley } from 'react-icons/vsc';
import { Themes } from '../../../types/reduxTypes/themeSliceTypes';
import Picker from 'emoji-picker-react';

interface Props {
  customPickerClass?: string;
  customBtnPickerClass?: string;
  isPickerOpened: boolean;
  emojiClickHandler: (emojiData: EmojiClickData) => void;
  toggleEmojiPicker: () => void;
}

const EmojiPick: React.FC<Props> = ({
  customBtnPickerClass,
  customPickerClass,
  isPickerOpened,
  emojiClickHandler,
  toggleEmojiPicker,
}) => {
  return (
    <>
      <button
        className={`${s.picker__btn} ${customBtnPickerClass}`}
        onClick={toggleEmojiPicker}
        type="button"
      >
        <VscSmiley className={s.picker__pickerIcon} size={24} />
      </button>
      <div className={`${s.picker} ${customPickerClass}`}>
        {isPickerOpened && (
          <Picker
            width="100%"
            height={400}
            onEmojiClick={emojiClickHandler}
            theme={
              document.body.getAttribute('data-theme') === Themes.LIGHT
                ? Theme.LIGHT
                : Theme.DARK
            }
          />
        )}
      </div>
    </>
  );
};

export default EmojiPick;
