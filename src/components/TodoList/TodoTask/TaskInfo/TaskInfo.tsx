import s from './TaskInfo.module.scss';
import { BsToggleOff } from 'react-icons/bs';
import { BsToggleOn } from 'react-icons/bs';

type TaskInfoProps = {
  taskText: string;
  isCompleted: boolean;
};

const TaskInfo: React.FC<TaskInfoProps> = ({ taskText, isCompleted }) => {
  return (
    <div className={s.taskInfo}>
      <button className={s.taskInfo__toggle}>
        <BsToggleOff className={s.taskInfo__icon} size={28} />
      </button>
      <h6 className={s.taskInfo__title}>{taskText}</h6>
    </div>
  );
};

export default TaskInfo;
