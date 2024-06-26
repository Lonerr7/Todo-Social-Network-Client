import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxToolkitHooks';
import { usePagination } from '../../hooks/usePagination';
import {
  fetchOpenedTodo,
  fetchOpenedTodoComments,
  resetCurrentTodoComments,
  resetCurrentTodoErrorMessages,
} from '../../redux/currentTodoSlice';
import UserTodoWithCommentsPage from './UserTodoWithCommentsPage';
import FinishProgressBarIfError from '../../components/MyOrUserPage/common/FinishProgressBarIfError/FinishProgressBarIfError';

const UserTodoPageWithCommentsContainer: React.FC = () => {
  const {
    currentTodo,
    isCurrentTodoFetching,
    currentTodoOwner: todoOwner,
    isTodoOwnerFetching,
    errMsg,
    totalCommentsCount,
  } = useAppSelector((state) => state.currentTodo);
  const myself = useAppSelector((state) => state.auth.user)!;
  const isMe = myself.id === todoOwner?.id;

  console.log(currentTodo);
  

  const dispatch = useAppDispatch();

  const { todoId } = useParams();

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
    (async () => {
      await dispatch(fetchOpenedTodo(todoId!));
    })();

    // resetting data when we leave component
    return () => {
      dispatch(resetCurrentTodoErrorMessages());
      dispatch(resetCurrentTodoComments());
    };

    // eslint-disable-next-line
  }, []);

  if (isCurrentTodoFetching || isTodoOwnerFetching) return null;

  if (errMsg) {
    return <FinishProgressBarIfError errorMsg={errMsg} />;
  }

  return (
    <div>
      {currentTodo ? (
        <UserTodoWithCommentsPage
          isMe={isMe}
          ownersNickname={todoOwner?.nickname}
          ownersId={todoOwner?.id}
          currentTodo={currentTodo}
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
