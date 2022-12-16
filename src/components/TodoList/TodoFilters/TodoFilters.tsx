import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { setActiveTodoFilter } from '../../../redux/appSlice';
import { openAreYouSurePopup } from '../../../redux/popupSlice';
import { changeActiveTodoFilter } from '../../../redux/todoSlice';
import { TodoFiltersEnum } from '../../../types/reduxTypes/todoSliceTypes';
import s from './TodoFilters.module.scss';

interface Props {
  displayDeleteBtn?: boolean;
  wrapperClass?: string;
}

const TodoFilters: React.FC<Props> = ({ displayDeleteBtn, wrapperClass }) => {
  const tasksCount = useAppSelector((state) => state.todo.todos.length);
  const { activeTodoFilter } = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();

  const onDeleteAllTasks = displayDeleteBtn
    ? () => {
        if (!tasksCount) return;

        dispatch(openAreYouSurePopup(null));
      }
    : null;

  return (
    <div className={`${s.filters} ${wrapperClass}`}>
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
      {displayDeleteBtn ? (
        <button
          className={`${s.filters__btn} ${s.close}`}
          onClick={onDeleteAllTasks!}
        >
          Delete All
        </button>
      ) : null}
    </div>
  );
};

export default React.memo(TodoFilters);
