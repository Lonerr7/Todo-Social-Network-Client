import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Preloader from '../../components/common/Preloader/Preloader';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import {
  fetchOpenedTodoWithComments,
  fetchTodoOwner,
} from '../../redux/currentTodoSlice';
import UserTodoWithCommentsPage from './UserTodoWithCommentsPage';

const UserTodoPageWithCommentsContainer = () => {
  const { currentTodo, isTodoFetching, errMsg, currentTodoOwner } =
    useAppSelector((state) => state.currentTodo);
  const dispatch = useAppDispatch();

  const { todoId } = useParams();

  // fetching selected todo with comments
  useEffect(() => {
    (async () => {
      if (todoId !== undefined) {
        // 1) Getting selected todo with comments
        const res = await dispatch(fetchOpenedTodoWithComments(todoId));

        // 2) If todo has a userId then fetch a todo owner
        if (res.payload.user) {
          dispatch(fetchTodoOwner(res.payload.user));
        }
      }
    })();

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
          ownerPhoto={currentTodoOwner.photo}
        />
      ) : (
        'Error'
      )}
    </div>
  );
};

export default UserTodoPageWithCommentsContainer;
