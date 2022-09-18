import s from './TodoInput.module.scss';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import { createTodo } from '../../../../redux/todoSlice';

const TodoInput: React.FC = () => {
  const [text, setText] = useState('');
  const { isTodoCreating } = useAppSelector((state) => state.todo);
  const dispatch = useAppDispatch();

  const onSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (/^\s*$/.test(text)) return;

    dispatch(createTodo({ taskText: text }));
    setText('');
  };

  return (
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
  );
};

export default TodoInput;
