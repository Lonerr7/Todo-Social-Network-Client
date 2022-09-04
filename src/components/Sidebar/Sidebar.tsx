import { useAppSelector } from '../../hooks/hooks';
import Credits from '../common/Credits/Credits';
import QuckLogin from './QuckLogin/QuckLogin';
import s from './Sidebar.module.scss';

const Sidebar: React.FC = () => {
  const user = useAppSelector((state) => state.auth.user);

  return (
    <div className={s.sidebar}>
      {!user ? <QuckLogin /> : <p>{user.nickname}</p>}
      <Credits />
    </div>
  );
};

export default Sidebar;
