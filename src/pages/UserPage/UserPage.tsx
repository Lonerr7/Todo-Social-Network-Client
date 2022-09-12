import { useAppSelector } from '../../hooks/hooks';
import s from './UserPage.module.scss';

const UserPage: React.FC = () => {
  const user = useAppSelector((state) => state.auth.user);

  return (
    <div className={s.user}>
      UserPage
      {user?.bio ? <p>My profile status: {user.bio}</p> : ''}
    </div>
  );
};

export default UserPage;
