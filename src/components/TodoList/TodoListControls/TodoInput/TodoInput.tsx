import React from 'react';
import s from './TodoInput.module.scss';
import TextError from '../../../common/TextError/TextError';
import SubmitLoadingBtn from '../../../common/SubmitLoadingBtn/SubmitLoadingBtn';
import EmojiPick from '../../../common/EmojiPick/EmojiPick';
import { EmojiClickData } from 'emoji-picker-react';

interface Props {
  text: string;
  isPickerOpened: boolean;
  isTodoCreating: boolean;
  todoInputErrMsg: string;
  inputChangeTextHanlder: (e: React.ChangeEvent<HTMLInputElement>) => void;
  emojiClickHandler: (emojiData: EmojiClickData) => void;
  toggleEmojiPicker: () => void;
  onSubmit: (e: React.FormEvent<HTMLButtonElement>) => Promise<void>;
}

const TodoInput: React.FC<Props> = ({
  text,
  isPickerOpened,
  isTodoCreating,
  todoInputErrMsg,
  inputChangeTextHanlder,
  emojiClickHandler,
  toggleEmojiPicker,
  onSubmit,
}) => {
  return (
    <div className={s.todoInput__outer}>
      <form className={s.todoInput}>
        <div className={s.todoInput__block}>
          <input
            className={s.todoInput__input}
            type="text"
            placeholder="Add your new task..."
            value={text}
            onChange={inputChangeTextHanlder}
          />
          <EmojiPick
            customPickerClass={s.todoInput__emojiPicker}
            customBtnPickerClass={s.todoInput__emojiPickerBtn}
            isPickerOpened={isPickerOpened}
            emojiClickHandler={emojiClickHandler}
            toggleEmojiPicker={toggleEmojiPicker}
          />
        </div>

        <SubmitLoadingBtn
          btnClass={s.todoInput__btn}
          btnType="submit"
          btnText="Create"
          btnFetchingText="Creating"
          isFetching={isTodoCreating}
          onSubmit={onSubmit}
        />
      </form>
      {todoInputErrMsg && (
        <TextError customClass={s.todoInput__error}>
          {todoInputErrMsg}
        </TextError>
      )}
    </div>
  );
};

export default React.memo(TodoInput);
