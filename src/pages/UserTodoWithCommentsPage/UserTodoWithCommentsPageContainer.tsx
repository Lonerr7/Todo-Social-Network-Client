import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Preloader from '../../components/common/Preloader/Preloader';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import {
  fetchOpenedTodoComments,
  fetchTodoOwner,
  resetCurrentTodoErrorMessages,
} from '../../redux/currentTodoSlice';
import UserTodoWithCommentsPage from './UserTodoWithCommentsPage';

const UserTodoPageWithCommentsContainer = () => {
  const { currentTodo, isTodoFetching, errMsg, currentTodoOwner } =
    useAppSelector((state) => state.currentTodo);
  const myself = useAppSelector((state) => state.auth.user)!;

  const dispatch = useAppDispatch();

  const { todoId } = useParams();

  // fetching selected todo with comments
  useEffect(() => {
    (async () => {
      if (todoId !== undefined) {
        // 1) Getting selected todo with comments
        const res = await Promise.allSettled([
          dispatch(fetchOpenedTodoComments(todoId)),
          dispatch(fetchTodoOwner(todoId)),
        ]);

        console.log(res);

        // // 2) If todo has a userId then fetch a todo owner
        // if (res.payload) {
        //   dispatch(fetchTodoOwner(res.payload.user));
        // }
      }
    })();

    return () => {
      dispatch(resetCurrentTodoErrorMessages());
    };

    // eslint-disable-next-line
  }, []);

  if (isTodoFetching) return <Preloader />;

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
