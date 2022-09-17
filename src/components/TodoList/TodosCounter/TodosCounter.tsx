import s from './TodosCounter.module.scss';

const TodosCounter: React.FC = () => {
  return (
    <h2 className={s.counter}>
      Tasks count: <span className={s.counter__number}>0</span>
    </h2>
  );
};

export default TodosCounter;
