import s from '../TodosPage/TodosPage.module.scss';
import st from './UserTodoWithCommentsPage.module.scss';
import UserTodoBig from '../../components/MyOrUserPage/common/UserTodos/UserTodoBig/UserTodoBig';
import { TodoWithComments } from '../../types/reduxTypes/todoSliceTypes';
import UserTodoComments from '../../components/MyOrUserPage/common/UserTodos/UserTodoComments/UserTodoComments';
import UserTodoCommentInput from '../../components/MyOrUserPage/common/UserTodos/UserTodoCommentInput/UserTodoCommentInput';

interface Props {
  currentTodo: TodoWithComments;
  ownerNickname: string;
  ownerPhoto: string;
}

const UserTodoWithCommentsPage: React.FC<Props> = ({
  currentTodo,
  ownerNickname,
  ownerPhoto,
}) => {
  return (
    <div className={s.todos}>
      <h1 className={st.todoPage__title}>{ownerNickname}'s todo's comments</h1>
      <UserTodoBig
        taskText={currentTodo.taskText}
        createdAt={currentTodo.createdAt}
        difficulty={currentTodo.difficulty}
      />
      <UserTodoCommentInput ownerPhoto={ownerPhoto} todoId={currentTodo._id} />
      <UserTodoComments />
    </div>
  );
};

export default UserTodoWithCommentsPage;
