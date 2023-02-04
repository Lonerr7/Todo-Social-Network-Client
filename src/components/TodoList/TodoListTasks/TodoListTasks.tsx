import { useEffect } from 'react';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../hooks/reduxToolkitHooks';
import { selectTodosByFilter } from '../../../redux/selectors/todoSelectors';
import { deleteTodosErrorMsg } from '../../../redux/todoSlice';
import TextError from '../../common/TextError/TextError';
import TodoTask from '../TodoTask/TodoTask';
import s from './TodoListTasks.module.scss';

const TodoListTasks: React.FC = () => {
  const todos = useAppSelector(selectTodosByFilter);
  const errMsg = useAppSelector((state) => state.todo.todoErrMsg);
  const todosCount = todos.length;

  const dispatch = useAppDispatch();

  const todoElements = todos.map((t) => (
    <TodoTask
      key={t.id}
      id={t.id}
      taskText={t.taskText}
      difficulty={t.difficulty}
      createdAt={t.createdAt}
      isCompleted={t.isCompleted}
    />
  ));

  useEffect(() => {
    return () => {
      dispatch(deleteTodosErrorMsg({ num: 3 }));
    };

    // eslint-disable-next-line
  }, []);

  return (
    <>
      {!todosCount ? (
        <p className={s.tasks__warning}>[empty Empty]</p>
      ) : (
        <>
          {errMsg && (
            <TextError customClass={s.tasks__error}>{errMsg}</TextError>
          )}
          <ul className={s.tasks}>{todoElements}</ul>
        </>
      )}
    </>
  );
};

export default TodoListTasks;
