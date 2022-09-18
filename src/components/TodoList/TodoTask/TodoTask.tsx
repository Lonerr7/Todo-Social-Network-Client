import s from './TodoTask.module.scss';
import TaskControls from './TaskControls/TaskControls';
import TaskInfo from './TaskInfo/TaskInfo';
import { useState } from 'react';

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
    </li>
  );
};

export default TodoTask;
