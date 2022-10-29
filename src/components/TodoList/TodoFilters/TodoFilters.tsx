import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { setActiveTodoFilter } from '../../../redux/appSlice';
import { openAreYouSurePopup } from '../../../redux/popupSlice';
import { changeActiveTodoFilter } from '../../../redux/todoSlice';
import { TodoFiltersEnum } from '../../../types/reduxTypes/todoSliceTypes';
import s from './TodoFilters.module.scss';

const TodoFilters: React.FC = () => {
  const tasksCount = useAppSelector((state) => state.todo.todos.length);
  const { activeTodoFilter } = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();

  const onDeleteAllTasks = () => {
    if (!tasksCount) return;

    dispatch(openAreYouSurePopup(null));
  };

  return (
    <div className={s.filters}>
      <div className={s.filters__box}>
        <button
          className={
            activeTodoFilter === 1
              ? `${s.filters__btn} ${s.active}`
              : s.filters__btn
          }
          onClick={() => {
            dispatch(changeActiveTodoFilter(TodoFiltersEnum.ALL));
            dispatch(setActiveTodoFilter(1));
          }}
        >
          All
        </button>
        <button
          className={
            activeTodoFilter === 2
              ? `${s.filters__btn} ${s.active}`
              : s.filters__btn
          }
          onClick={() => {
            dispatch(changeActiveTodoFilter(TodoFiltersEnum.COMPLETED));
            dispatch(setActiveTodoFilter(2));
          }}
        >
          Completed
        </button>
        <button
          className={
            activeTodoFilter === 3
              ? `${s.filters__btn} ${s.active}`
              : s.filters__btn
          }
          onClick={() => {
            dispatch(changeActiveTodoFilter(TodoFiltersEnum.UNCOMPLETED));
            dispatch(setActiveTodoFilter(3));
          }}
        >
          Uncompleted
        </button>
      </div>
      <button
        className={`${s.filters__btn} ${s.close}`}
        onClick={onDeleteAllTasks}
      >
        Delete All
      </button>
    </div>
  );
};

export default React.memo(TodoFilters);
