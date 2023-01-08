import React from 'react';
import s from './TodoListSearch.module.scss';
import { ImCross } from 'react-icons/im';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxToolkitHooks';
import { setTodoSearchText } from '../../../redux/todoSlice';
import { useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const TodoListSearch: React.FC = () => {
  const { todoSearchText } = useAppSelector((state) => state.todo);
  const dispatch = useAppDispatch();

  const onTextChange = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.value.match(/^\s+$/)) {
      return;
    }
    dispatch(setTodoSearchText(e.currentTarget.value));
  };

  const onInputClear = () => {
    dispatch(setTodoSearchText(''));
  };

  // Clear search input when we leave TodoList Component
  useEffect(() => {
    return () => {
      dispatch(setTodoSearchText(''));
    };

    // eslint-disable-next-line
  }, []);

  return (
    <div className={s.search}>
      <AiOutlineSearch className={s.search__searchIcon} size={24} />
      <input
        className={s.search__input}
        type="text"
        placeholder="Search for todo"
        value={todoSearchText}
        onChange={onTextChange}
      />
      {todoSearchText && (
        <button className={s.search__clear} onClick={onInputClear}>
          <ImCross className={s.search__icon} size={15} />
        </button>
      )}
    </div>
  );
};

export default React.memo(TodoListSearch);
