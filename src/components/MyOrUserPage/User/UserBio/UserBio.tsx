import s from './UserBio.module.scss';

type Props = {
  bio?: string;
};

const UserBio: React.FC<Props> = ({ bio }) => {
  return (
    <div className={s.bio}>
      <div className={s.bio__textBox}>
        <span className={s.bio__text}>{bio}</span>
      </div>
    </div>
  );
};

export default UserBio;
