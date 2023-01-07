import s from '../TodosPage/TodosPage.module.scss';
import st from './UserTodoWithCommentsPage.module.scss';
import UserTodoBig from '../../components/MyOrUserPage/common/UserTodos/UserTodoBig/UserTodoBig';
import UserTodoComments from '../../components/MyOrUserPage/common/UserTodos/UserTodoComments/UserTodoComments';
import UserTodoCommentInput from '../../components/MyOrUserPage/common/UserTodos/UserTodoCommentInput/UserTodoCommentInput';
import { TodoSmall } from '../../types/reduxTypes/todoSliceTypes';

interface Props {
  currentTodo: TodoSmall;
  ownerNickname: string;
  myPhoto: string;
}

const UserTodoWithCommentsPage: React.FC<Props> = ({
  currentTodo,
  ownerNickname,
  myPhoto,
}) => {
  return (
    <div className={s.todos}>
      <h1 className={st.todoPage__title}>{ownerNickname}'s todo's comments</h1>
      <UserTodoBig
        taskText={currentTodo.taskText}
        createdAt={currentTodo.createdAt}
        difficulty={currentTodo.difficulty}
        isCompleted={currentTodo.isCompleted}
      />
      <UserTodoCommentInput myPhoto={myPhoto} todoId={currentTodo._id} />
      <UserTodoComments />
    </div>
  );
};

export default UserTodoWithCommentsPage;
