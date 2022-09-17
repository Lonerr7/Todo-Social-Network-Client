import s from './TaskControls.module.scss';
import { BiPencil } from 'react-icons/bi';
import { MdDeleteForever } from 'react-icons/md';

const TaskControls: React.FC = () => {
  return (
    <div className={s.controls}>
      <button className={s.controls__btn}>
        <BiPencil className={s.controls__icon} size={24} />
      </button>
      <button className={s.controls__btn}>
        <MdDeleteForever className={s.controls__icon} size={24} />
      </button>
    </div>
  );
};

export default TaskControls;
