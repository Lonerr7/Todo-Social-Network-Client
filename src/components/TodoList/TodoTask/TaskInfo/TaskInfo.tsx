import s from './TaskInfo.module.scss';
import { BsToggleOff } from 'react-icons/bs';
import { BsToggleOn } from 'react-icons/bs';

const TaskInfo: React.FC = () => {
  return (
    <div className={s.taskInfo}>
      <button className={s.taskInfo__toggle}>
        <BsToggleOff className={s.taskInfo__icon} size={28} />
      </button>
      <h6 className={s.taskInfo__title}>My task</h6>
    </div>
  );
};

export default TaskInfo;
