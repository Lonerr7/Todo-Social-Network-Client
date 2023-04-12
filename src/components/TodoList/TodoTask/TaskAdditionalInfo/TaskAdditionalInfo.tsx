import s from './TaskAdditionalInfo.module.scss';

interface Props {
  difficulty: 'easy' | 'medium' | 'hard';
  createdAt: string;
}

const TaskAdditionalInfo: React.FC<Props> = ({ difficulty, createdAt }) => {
  const uppercaseDifficulty = `${difficulty
    .slice(0, 1)
    .toUpperCase()}${difficulty.slice(1)}`;
  const normalDate = new Date(createdAt).toLocaleString();

  return (
    <div className={s.info}>
      <p className={s.info__difficulty}>Difficulty: {uppercaseDifficulty}</p>
      <p className={s.info__createAt}>{normalDate}</p>
    </div>
  );
};

export default TaskAdditionalInfo;
