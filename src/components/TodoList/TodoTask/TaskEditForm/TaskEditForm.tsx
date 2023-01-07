import { useAppDispatch } from '../../../../hooks/reduxToolkitHooks';
import { deleteTodosErrorMsg, updateTodo } from '../../../../redux/todoSlice';
import s from './TaskEditForm.module.scss';

type TaskEditFormProps = {
  id: string;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  toggleEditMode: () => void;
};

const TaskEditForm: React.FC<TaskEditFormProps> = ({
  text,
  setText,
  id,
  toggleEditMode,
}) => {
  const dispatch = useAppDispatch();

  const taskTextChangeHandler = async (
    e: React.FormEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    const response = await dispatch(updateTodo({ id, taskText: text }));

    // deleting errorMsg in Todo after 5 sec
    if (response.meta.requestStatus === 'rejected') {
      setTimeout(() => {
        dispatch(deleteTodosErrorMsg({ num: 2, id }));
      }, 5000);
    }

    toggleEditMode();
  };

  return (
    <form className={s.form}>
      <label className={s.form__label} htmlFor="taskText" id="taskText">
        <input
          className={s.form__input}
          type="text"
          name="taskText"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <button
        className={s.form__btn}
        type="submit"
        onClick={taskTextChangeHandler}
      >
        Ok
      </button>
    </form>
  );
};

export default TaskEditForm;
