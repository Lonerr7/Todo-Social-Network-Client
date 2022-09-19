import s from './TodoInput.module.scss';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import { createTodo } from '../../../../redux/todoSlice';
import TextError from '../../../common/TextError/TextError';

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
        {!isTodoCreating ? (
          <button className={s.todoInput__btn} type="submit" onClick={onSubmit}>
            Create
          </button>
        ) : (
          <button className={s.todoInput__btn} disabled={true}>
            Creating...
          </button>
        )}
      </form>
      {todoInputErrMsg && <TextError>{todoInputErrMsg}</TextError>}
    </div>
  );
};

export default TodoInput;
