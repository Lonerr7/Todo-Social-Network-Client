import { Link } from 'react-router-dom';
import TaskAdditionalInfo from '../../../../TodoList/TodoTask/TaskAdditionalInfo/TaskAdditionalInfo';
import s from '../../../../TodoList/TodoTask/TodoTask.module.scss';
import st from './UserTodoBig.module.scss';

interface Props {
  ownersNickname: string | undefined;
  ownersId: string | undefined;
  isMe: boolean;
  taskText: string;
  createdAt: string;
  difficulty: 'easy' | 'medium' | 'hard';
  isCompleted: boolean;
}

const UserTodoBig: React.FC<Props> = ({
  ownersNickname,
  isMe,
  ownersId,
  taskText,
  createdAt,
  difficulty,
  isCompleted,
}) => {
  return (
    <div className={st.todo}>
      <div className={`${s.task} ${st.todo__inner}`}>
        <div className={`${s.task__top} ${st.todo__top}`}>
          <p
            className={
              isCompleted
                ? `${st.todo__text} ${st.todo__text_completed}`
                : `${st.todo__text}`
            }
          >
            {taskText}
          </p>
          {ownersNickname && ownersId ? (
            <Link
              to={isMe ? '/' : `/users/${ownersId}`}
              className={st.todo__ownersNickname}
            >
              by <span>{ownersNickname}</span>
            </Link>
          ) : null}
        </div>
        <div className={st.todo__bottom}>
          <TaskAdditionalInfo createdAt={createdAt} difficulty={difficulty} />
        </div>
      </div>
    </div>
  );
};

export default UserTodoBig;
