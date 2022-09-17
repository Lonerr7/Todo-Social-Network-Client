import s from './TodoTask.module.scss';
import TaskControls from './TaskControls/TaskControls';
import TaskInfo from './TaskInfo/TaskInfo';

const TodoTask: React.FC = () => {
  return (
    <li className={s.task}>
      <TaskInfo />
      <TaskControls />
    </li>
  );
};

export default TodoTask;
