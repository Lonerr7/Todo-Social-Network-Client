import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Preloader from '../../components/common/Preloader/Preloader';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxToolkitHooks';
import {
  fetchOpenedTodoComments,
  fetchTodoOwner,
  resetCurrentTodoComments,
  resetCurrentTodoErrorMessages,
  setCurrentTodo,
} from '../../redux/currentTodoSlice';
import { TodoSmall } from '../../types/reduxTypes/todoSliceTypes';
import UserTodoWithCommentsPage from './UserTodoWithCommentsPage';

const UserTodoPageWithCommentsContainer = () => {
  const {
    currentTodo,
    isTodoCommentsAndOwnerFetching,
    errMsg,
    currentTodoOwner,
  } = useAppSelector((state) => state.currentTodo);
  const myself = useAppSelector((state) => state.auth.user)!;
  const myTodos = useAppSelector((state) => state.todo.todos);

  const dispatch = useAppDispatch();

  const { todoId } = useParams();

  // getting selected todo from state and setting it
  useEffect(() => {
    const { _id, createdAt, difficulty, id, isCompleted, taskText }: TodoSmall =
      myTodos.filter((t) => t.id === todoId)[0];

    const todoSmall: TodoSmall = {
      id,
      createdAt,
      difficulty,
      _id,
      isCompleted,
      taskText,
    };

    dispatch(setCurrentTodo(todoSmall));

    // eslint-disable-next-line
  }, []);

  // fetching selected todo comments
  useEffect(() => {
    if (todoId !== undefined) {
      // 1) Getting selected todo comments
      Promise.allSettled([
        dispatch(fetchOpenedTodoComments(todoId)),
        dispatch(fetchTodoOwner(todoId)),
      ]);
    }

    return () => {
      dispatch(resetCurrentTodoErrorMessages());
      dispatch(resetCurrentTodoComments());
    };

    // eslint-disable-next-line
  }, []);

  if (isTodoCommentsAndOwnerFetching) return <Preloader />;

  if (errMsg) return <div>{errMsg}</div>;

  return (
    <div>
      {currentTodo && currentTodoOwner ? (
        <UserTodoWithCommentsPage
          currentTodo={currentTodo}
          ownerNickname={currentTodoOwner.nickname}
          myPhoto={myself.photo}
        />
      ) : (
        'Error'
      )}
    </div>
  );
};

export default UserTodoPageWithCommentsContainer;
