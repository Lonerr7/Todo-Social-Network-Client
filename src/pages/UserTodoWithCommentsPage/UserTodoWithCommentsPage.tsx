import s from '../TodosPage/TodosPage.module.scss';
import UserTodoBig from '../../components/MyOrUserPage/common/UserTodos/UserTodoBig/UserTodoBig';
import UserTodoComments from '../../components/MyOrUserPage/common/UserTodos/UserTodoComments/UserTodoComments';
import { TodoSmall } from '../../types/reduxTypes/todoSliceTypes';
import ReactPaginate from 'react-paginate';
import UserTodoCommentInputContainer from '../../components/MyOrUserPage/common/UserTodos/UserTodoCommentInput/UserTodoCommentInputContainer';

interface Props {
  ownersNickname: string | undefined;
  ownersId: string | undefined;
  isMe: boolean;
  currentTodo: TodoSmall;
  myPhoto: string;
  currentPage: number;
  pageCount: number;
  handlePageClick: (
    selectedItem:
      | number
      | {
          selected: number;
        }
  ) => void;
}

const UserTodoWithCommentsPage: React.FC<Props> = ({
  ownersNickname,
  ownersId,
  isMe,
  currentTodo,
  myPhoto,
  currentPage,
  pageCount,
  handlePageClick,
}) => {
  return (
    <div className={s.todos}>
      <UserTodoBig
        isMe={isMe}
        ownersNickname={ownersNickname}
        ownersId={ownersId}
        taskText={currentTodo.taskText}
        createdAt={currentTodo.createdAt}
        difficulty={currentTodo.difficulty}
        isCompleted={currentTodo.isCompleted}
      />
      <UserTodoCommentInputContainer
        myPhoto={myPhoto}
        todoId={currentTodo._id}
      />
      <UserTodoComments />
      <ReactPaginate
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName="paginator__container"
        activeClassName="paginator__item_active"
        pageClassName="paginator__page"
        nextClassName="paginator__next"
        previousClassName="paginator__prev"
        previousLabel="<"
        nextLabel=">"
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        breakLabel="..."
        breakClassName="paginator__break"
        disabledLinkClassName="paginator__disabled"
        forcePage={currentPage} // !
      />
    </div>
  );
};

export default UserTodoWithCommentsPage;
