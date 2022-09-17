import s from './TodoInput.module.scss';

const TodoInput: React.FC = () => {
  return (
    <form className={s.todoInput}>
      <input
        className={s.todoInput__input}
        type="text"
        placeholder="Add your new task..."
      />
      <button className={s.todoInput__btn} type="submit">
        Create
      </button>
    </form>
  );
};

export default TodoInput;
