import s from './TaskControls.module.scss';
import { BiPencil } from 'react-icons/bi';
import { MdDeleteForever } from 'react-icons/md';
import { useAppDispatch } from '../../../../hooks/reduxToolkitHooks';
import { deleteTodo } from '../../../../redux/todoSlice';

interface TaskControlsProps {
  id: string;
  toggleEditMode: () => void;
}

const TaskControls: React.FC<TaskControlsProps> = ({ id, toggleEditMode }) => {
  const dispatch = useAppDispatch();

  const deleteTodoHandler = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className={s.controls}>
      <button className={s.controls__btn} onClick={toggleEditMode}>
        <BiPencil className={s.controls__icon} size={24} />
      </button>
      <button
        className={`${s.controls__btn} ${s.controls__delete}`}
        onClick={deleteTodoHandler}
      >
        <MdDeleteForever className={s.controls__icon} size={24} />
      </button>
    </div>
  );
};

export default TaskControls;
