import TodoList from '../../components/TodoList/TodoList';
import s from './TodosPage.module.scss';

const TodosPage: React.FC = () => {
  return (
    <div className={s.todos}>
      <TodoList />
    </div>
  );
};

export default TodosPage;
