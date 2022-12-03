import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../../hooks/hooks';
import { fetchOpenedTodoWithComments } from '../../../../../redux/currentTodoSlice';
import Preloader from '../../../../common/Preloader/Preloader';

const UserTodoBig: React.FC = () => {
  const { currentTodo, isTodoFetching, errMsg } = useAppSelector(
    (state) => state.currentTodo
  );
  const dispatch = useAppDispatch();

  const { todoId } = useParams();

  useEffect(() => {
    if (todoId !== undefined) {
      dispatch(fetchOpenedTodoWithComments(todoId));
    }
    console.log(`from useEffect`);

    // eslint-disable-next-line
  }, []);

  if (isTodoFetching) return <Preloader />;

  if (errMsg) return <div>{errMsg}</div>;

  return <div>{currentTodo?.taskText}</div>;
};

export default UserTodoBig;
