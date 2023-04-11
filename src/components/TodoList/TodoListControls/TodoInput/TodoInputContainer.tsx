import { useState } from 'react';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../hooks/reduxToolkitHooks';
import { EmojiClickData } from 'emoji-picker-react';
import { createTodo, deleteTodosErrorMsg } from '../../../../redux/todoSlice';
import TodoInput from './TodoInput';

const TodoInputContainer: React.FC = () => {
  const [text, setText] = useState('');
  const [isPickerOpened, setIsPickerOpened] = useState(false);
  const { isTodoCreating, todoInputErrMsg } = useAppSelector(
    (state) => state.todo
  );
  const dispatch = useAppDispatch();

  const inputChangeTextHanlder = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const emojiClickHandler = (emojiData: EmojiClickData) => {
    setText((prevMessage) => `${prevMessage}${emojiData.emoji}`);
  };

  const toggleEmojiPicker = () => {
    setIsPickerOpened(!isPickerOpened);
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
    <TodoInput
      text={text}
      isPickerOpened={isPickerOpened}
      isTodoCreating={isTodoCreating}
      todoInputErrMsg={todoInputErrMsg}
      inputChangeTextHanlder={inputChangeTextHanlder}
      emojiClickHandler={emojiClickHandler}
      toggleEmojiPicker={toggleEmojiPicker}
      onSubmit={onSubmit}
    />
  );
};

export default TodoInputContainer;
