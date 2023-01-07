import { useAppSelector } from '../../hooks/reduxToolkitHooks';
import Credits from '../common/Credits/Credits';
import Menu from './Menu/Menu';
import QuckLogin from './QuckLogin/QuckLogin';
import s from './Sidebar.module.scss';

const Sidebar: React.FC = () => {
  const user = useAppSelector((state) => state.auth.user);

  return (
    <div className={s.sidebar}>
      {!user ? <QuckLogin /> : <Menu />}
      <Credits />
    </div>
  );
};

export default Sidebar;
