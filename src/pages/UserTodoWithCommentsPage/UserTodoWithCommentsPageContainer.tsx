import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Preloader from '../../components/common/Preloader/Preloader';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxToolkitHooks';
import { usePagination } from '../../hooks/usePagination';
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
    totalCommentsCount,
  } = useAppSelector((state) => state.currentTodo);
  const myself = useAppSelector((state) => state.auth.user)!;
  const myTodos = useAppSelector((state) => state.todo.todos);

  const dispatch = useAppDispatch();

  const { todoId } = useParams();
  const navigate = useNavigate();

  // using pagination and getting comments by page
  const { handlePageClick, page, pageCount } = usePagination(
    totalCommentsCount,
    `/todo/${todoId}?page=`,
    5,
    todoId!,
    fetchOpenedTodoComments
  );

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

  // fetching todo owner and resetting data when we leave component
  useEffect(() => {
    if (todoId !== undefined) {
      dispatch(fetchTodoOwner(todoId));
    }

    navigate(`/todo/${todoId}?page=1`);

    return () => {
      dispatch(resetCurrentTodoErrorMessages());
      dispatch(resetCurrentTodoComments());
    };

    // eslint-disable-next-line
  }, []);

  // fetching selected todo comments
  // useEffect(() => {
  //   if (todoId !== undefined) {
  //     // Getting selected todo comments
  //     dispatch(fetchOpenedTodoComments({ todoId, page: 1 }));
  //   }

  //   // eslint-disable-next-line
  // }, []);

  if (isTodoCommentsAndOwnerFetching) return <Preloader />;

  if (errMsg) return <div>{errMsg}</div>;

  return (
    <div>
      {currentTodo && currentTodoOwner ? (
        <UserTodoWithCommentsPage
          currentTodo={currentTodo}
          ownerNickname={currentTodoOwner.nickname}
          myPhoto={myself.photo}
          pageCount={pageCount}
          currentPage={page - 1}
          handlePageClick={handlePageClick}
        />
      ) : (
        'Error'
      )}
    </div>
  );
};

export default UserTodoPageWithCommentsContainer;
