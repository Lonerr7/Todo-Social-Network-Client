import s from './TodoTask.module.scss';
import TaskControls from './TaskControls/TaskControls';
import TaskInfo from './TaskInfo/TaskInfo';

type TodoTaskProps = {
  taskText: string;
  isCompleted: boolean;
  difficulty: 'easy' | 'medium' | 'hard';
  createdAt: string;
  user: string;
  id: string;
};

const TodoTask: React.FC<TodoTaskProps> = ({
  taskText,
  isCompleted,
  difficulty,
  createdAt,
  user,
  id,
}) => {
  return (
    <li className={s.task}>
      <TaskInfo taskText={taskText} isCompleted={isCompleted} id={id} />
      <TaskControls />
    </li>
  );
};

export default TodoTask;
