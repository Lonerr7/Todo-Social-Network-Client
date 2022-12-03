import s from '../TodosPage/TodosPage.module.scss';
import UserTodoBig from '../../components/MyOrUserPage/common/UserTodos/UserTodoBig/UserTodoBig';
import { TodoWithComments } from '../../types/reduxTypes/todoSliceTypes';
import { User } from '../../types/reduxTypes/authSliceTypes';

interface Props {
  currentTodo: TodoWithComments;
  todoOwner: User;
}

const UserTodoWithCommentsPage: React.FC<Props> = ({
  currentTodo,
  todoOwner,
}) => {
  return (
    <div className={s.todos}>
      <h1>{todoOwner.nickname}'s todo's comments</h1>
      <UserTodoBig
        taskText={currentTodo.taskText}
        createdAt={currentTodo.createdAt}
        difficulty={currentTodo.difficulty}
      />
    </div>
  );
};

export default UserTodoWithCommentsPage;
