import React from 'react';
import s from './TodoListTitle.module.scss';

const TodoListTitle: React.FC = () => {
  console.log(`title rerender`);

  return (
    <div className={s.todoTitle}>
      <h1 className={s.todoTitle__title}>My Todo List</h1>
    </div>
  );
};

export default React.memo(TodoListTitle);
