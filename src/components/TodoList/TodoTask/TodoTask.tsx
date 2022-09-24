import s from './TodoTask.module.scss';
import TaskControls from './TaskControls/TaskControls';
import TaskInfo from './TaskInfo/TaskInfo';
import { useState } from 'react';
import TaskAdditionalInfo from './TaskAdditionalInfo/TaskAdditionalInfo';
import TextError from '../../common/TextError/TextError';

type Props = {
  taskText: string;
  isCompleted: boolean;
  difficulty: 'easy' | 'medium' | 'hard';
  createdAt: string;
  userId: string;
  id: string;
  errMsg: string;
};

const TodoTask: React.FC<Props> = ({
  taskText,
  isCompleted,
  difficulty,
  createdAt,
  userId,
  id,
  errMsg,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [text, setText] = useState(taskText);

  const toggleEditMode = () => {
    if (!editMode) {
      setText(taskText);
      return setEditMode(!editMode);
    }

    setEditMode(!editMode);
  };

  return (
    <li className={s.task}>
      <div className={s.task__top}>
        <TaskInfo
          taskText={taskText}
          text={text}
          setText={setText}
          isCompleted={isCompleted}
          id={id}
          editMode={editMode}
          toggleEditMode={toggleEditMode}
        />
        <TaskControls
          id={id}
          editMode={editMode}
          toggleEditMode={toggleEditMode}
        />
      </div>
      <div className={s.task__bottom}>
        <TaskAdditionalInfo createdAt={createdAt} difficulty={difficulty} />
      </div>
      {errMsg && <TextError customClass={s.task__error}>{errMsg}</TextError>}
    </li>
  );
};

export default TodoTask;
