import s from './TodoInput.module.scss';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import { createTodo, deleteErrorMsg } from '../../../../redux/todoSlice';
import TextError from '../../../common/TextError/TextError';
import SubmitLoadingBtn from '../../../common/SubmitLoadingBtn/SubmitLoadingBtn';

const TodoInput: React.FC = () => {
  const [text, setText] = useState('');
  const { isTodoCreating, todoInputErrMsg } = useAppSelector(
    (state) => state.todo
  );
  const dispatch = useAppDispatch();

  const onSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (/^\s*$/.test(text)) return;

    const response = await dispatch(createTodo({ taskText: text }));

    // reseting input only when task is valid
    if (response.meta.requestStatus !== 'rejected') {
      setText('');
    }

    // clearing errorMessage after 5 sec
    if (response.meta.requestStatus === 'rejected') {
      setTimeout(() => {
        dispatch(deleteErrorMsg(1)); // 1 for TodoInput error message
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

export default TodoInput;
