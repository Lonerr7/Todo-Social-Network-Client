import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import React from 'react';
import { useAppDispatch } from '../../../hooks/reduxToolkitHooks';
import { openAreYouSurePopup } from '../../../redux/popupSlice';
import { TodoFiltersEnum } from '../../../types/reduxTypes/todoSliceTypes';
import s from './TodoFilters.module.scss';

interface Props {
  tasksCount: number;
  activeTodoFilter: number;
  displayDeleteBtn?: boolean;
  wrapperClass?: string;
  changeActiveTodoFilterWord: ActionCreatorWithPayload<TodoFiltersEnum, string>;
  setActiveTodoFilter: ActionCreatorWithPayload<number, string>;
}

const TodoFilters: React.FC<Props> = ({
  displayDeleteBtn,
  wrapperClass,
  tasksCount,
  activeTodoFilter,
  changeActiveTodoFilterWord,
  setActiveTodoFilter,
}) => {
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
            dispatch(changeActiveTodoFilterWord(TodoFiltersEnum.ALL));
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
            dispatch(changeActiveTodoFilterWord(TodoFiltersEnum.COMPLETED));
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
            dispatch(changeActiveTodoFilterWord(TodoFiltersEnum.UNCOMPLETED));
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
