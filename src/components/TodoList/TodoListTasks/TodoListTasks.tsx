import { useAppSelector } from '../../../hooks/hooks';
import { selectTodosByFilter } from '../../../redux/selectors/todoSelectors';
import TodoTask from '../TodoTask/TodoTask';
import s from './TodoListTasks.module.scss';

const TodoListTasks: React.FC = () => {
  const todos = useAppSelector(selectTodosByFilter);
  const todosCount = todos.length;

  const todoElements = todos.map((t) => (
    <TodoTask
      key={t.id}
      id={t.id}
      taskText={t.taskText}
      difficulty={t.difficulty}
      createdAt={t.createdAt}
      isCompleted={t.isCompleted}
      errMsg={t.errorMsg}
    />
  ));

  return (
    <>
      {!todosCount ? (
        <p className={s.tasks__warning}>[empty Empty]</p>
      ) : (
        <ul className={s.tasks}>{todoElements}</ul>
      )}
    </>
  );
};

export default TodoListTasks;
