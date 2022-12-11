import TaskAdditionalInfo from '../../../../TodoList/TodoTask/TaskAdditionalInfo/TaskAdditionalInfo';
import s from '../../../../TodoList/TodoTask/TodoTask.module.scss';
import st from './UserTodoBig.module.scss';

interface Props {
  taskText: string;
  createdAt: string;
  difficulty: 'easy' | 'medium' | 'hard';
  isCompleted: boolean;
}

const UserTodoBig: React.FC<Props> = ({
  taskText,
  createdAt,
  difficulty,
  isCompleted,
}) => {
  return (
    <div className={st.todo}>
      <div className={`${s.task} ${st.todo__inner}`}>
        <div className={s.task__top}>
          <p
            className={
              isCompleted
                ? `${st.todo__text} ${st.todo__text_completed}`
                : `${st.todo__text}`
            }
          >
            {taskText}
          </p>
        </div>
        <div className={st.todo__bottom}>
          <TaskAdditionalInfo createdAt={createdAt} difficulty={difficulty} />
        </div>
      </div>
    </div>
  );
};

export default UserTodoBig;
