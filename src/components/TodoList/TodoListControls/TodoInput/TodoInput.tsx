import React from 'react';
import s from './TodoInput.module.scss';
import { useState } from 'react';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../hooks/reduxToolkitHooks';
import { createTodo, deleteTodosErrorMsg } from '../../../../redux/todoSlice';
import TextError from '../../../common/TextError/TextError';
import SubmitLoadingBtn from '../../../common/SubmitLoadingBtn/SubmitLoadingBtn';
import { EmojiClickData } from 'emoji-picker-react';
import EmojiPick from '../../../common/EmojiPick/EmojiPick';

const TodoInput: React.FC = () => {
  const [text, setText] = useState('');
  const [isPickerOpened, setIsPickerOpened] = useState(false);
  const { isTodoCreating, todoInputErrMsg } = useAppSelector(
    (state) => state.todo
  );
  const dispatch = useAppDispatch();

  const toggleEmojiPicker = () => {
    setIsPickerOpened(!isPickerOpened);
  };

  const emojiClickHandler = (emojiData: EmojiClickData) => {
    setText((prevMessage) => `${prevMessage}${emojiData.emoji}`);
  };

  const onSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (/^\s*$/.test(text)) return;

    const response = await dispatch(createTodo({ taskText: text }));

    // reseting input only when task is valid
    if (response.meta.requestStatus !== 'rejected') {
      setText('');
    }

    // closing emoji picker window
    setIsPickerOpened(false);

    // clearing errorMessage after 5 sec
    if (response.meta.requestStatus === 'rejected') {
      setTimeout(() => {
        dispatch(deleteTodosErrorMsg({ num: 1 })); // 1 for TodoInput error message
      }, 5000);
    }
  };

  return (
    <div className={s.todoInput__outer}>
      <form className={s.todoInput}>
        <input
          className={s.todoInput__input}
          type="text"
          placeholder="Add your new task..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <EmojiPick
          customPickerClass={s.todoInput__emojiPicker}
          customBtnPickerClass={s.todoInput__emojiPickerBtn}
          isPickerOpened={isPickerOpened}
          emojiClickHandler={emojiClickHandler}
          toggleEmojiPicker={toggleEmojiPicker}
        />
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
