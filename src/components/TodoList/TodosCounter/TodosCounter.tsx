import React from 'react';
import { useAppSelector } from '../../../hooks/reduxToolkitHooks';
import { selectTodosByFilter } from '../../../redux/selectors/todoSelectors';
import s from './TodosCounter.module.scss';

const TodosCounter: React.FC = () => {
  const todosCount = useAppSelector(selectTodosByFilter).length;
  const { activeTodoFilter } = useAppSelector((state) => state.app);

  let phrase = `All todos:`;

  if (activeTodoFilter === 1) phrase = `All todos:`;
  if (activeTodoFilter === 2) phrase = 'Completed todos:';
  if (activeTodoFilter === 3) phrase = 'Uncompleted todos:';

  return (
    <h2 className={s.counter}>
      {phrase} <span className={s.counter__number}>{todosCount}</span>
    </h2>
  );
};

export default React.memo(TodosCounter);
