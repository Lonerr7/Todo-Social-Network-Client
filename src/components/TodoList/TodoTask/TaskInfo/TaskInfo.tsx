import s from './TaskInfo.module.scss';
import { BsToggleOff } from 'react-icons/bs';
import { BsToggleOn } from 'react-icons/bs';
import { useAppDispatch } from '../../../../hooks/hooks';
import { updateTodo } from '../../../../redux/todoSlice';

type TaskInfoProps = {
  taskText: string;
  isCompleted: boolean;
  id: string;
};

const TaskInfo: React.FC<TaskInfoProps> = ({ taskText, isCompleted, id }) => {
  const dispatch = useAppDispatch();

  const toggleTaskCompletion = () => {
    dispatch(updateTodo({ id, isCompleted: !isCompleted }));
  };

  return (
    <div className={s.taskInfo} onClick={toggleTaskCompletion}>
      {!isCompleted ? (
        <>
          <BsToggleOff className={s.taskInfo__icon} size={28} />
          <h6 className={s.taskInfo__title}>{taskText}</h6>
        </>
      ) : (
        <>
          <BsToggleOn className={s.taskInfo__icon} size={28} />
          <h6 className={`${s.taskInfo__title} ${s.taskInfo__title_completed}`}>
            {taskText}
          </h6>
        </>
      )}
    </div>
  );
};

export default TaskInfo;
