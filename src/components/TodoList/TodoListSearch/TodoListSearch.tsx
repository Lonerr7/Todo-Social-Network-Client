import s from './TodoListSearch.module.scss';
import { ImCross } from 'react-icons/im';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { setTodoSearchText } from '../../../redux/todoSlice';

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

  return (
    <div className={s.search}>
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

export default TodoListSearch;
