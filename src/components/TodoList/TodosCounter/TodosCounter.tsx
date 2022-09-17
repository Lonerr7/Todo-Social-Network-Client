import { useAppSelector } from '../../../hooks/hooks';
import s from './TodosCounter.module.scss';

const TodosCounter: React.FC = () => {
  const todosCount = useAppSelector((state) => state.todo.todos.length);

  return (
    <h2 className={s.counter}>
      Tasks count: <span className={s.counter__number}>{todosCount}</span>
    </h2>
  );
};

export default TodosCounter;
