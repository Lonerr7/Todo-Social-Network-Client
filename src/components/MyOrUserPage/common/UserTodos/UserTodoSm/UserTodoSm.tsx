import { Link } from 'react-router-dom';
import { TodoTaskProps } from '../../../../../types/componentTypes/todoPropsTypes';
import TaskAdditionalInfo from '../../../../TodoList/TodoTask/TaskAdditionalInfo/TaskAdditionalInfo';
import s from '../../../../TodoList/TodoTask/TodoTask.module.scss';
import st from './UserTodoSm.module.scss';

interface Props extends TodoTaskProps {}

const UserTodoSm: React.FC<Props> = ({
  taskText,
  difficulty,
  createdAt,
  id,
  isCompleted,
}) => {
  return (
    <li className={s.task}>
      <div className={`${s.task__top} ${st.todo__top}`}>
        <p
          className={
            !isCompleted
              ? `${s.task__text} ${st.todo__text}`
              : `${s.task__text} ${st.todo__text} ${st.todo__text_completed}`
          }
        >
          {taskText}
        </p>
        <Link
          className={`${s.task__link} ${st.todo__link}`}
          to={`/Todo-Social-Network-Client/todo/${id}?page=1`}
        >
          View comments
        </Link>
      </div>
      <div className={s.task__bottom}>
        <TaskAdditionalInfo createdAt={createdAt} difficulty={difficulty} />
      </div>
    </li>
  );
};

export default UserTodoSm;
