import s from './TaskControls.module.scss';
import { BiPencil } from 'react-icons/bi';
import { MdDeleteForever } from 'react-icons/md';
import { useAppDispatch } from '../../../../hooks/hooks';
import { deleteTodo } from '../../../../redux/todoSlice';

type TaskControlsProps = {
  id: string;
};

const TaskControls: React.FC<TaskControlsProps> = ({ id }) => {
  const dispatch = useAppDispatch();

  const deleteTodoHandler = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className={s.controls}>
      <button className={s.controls__btn}>
        <BiPencil className={s.controls__icon} size={24} />
      </button>
      <button className={s.controls__btn} onClick={deleteTodoHandler}>
        <MdDeleteForever className={s.controls__icon} size={24} />
      </button>
    </div>
  );
};

export default TaskControls;
