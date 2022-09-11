import { Outlet } from 'react-router-dom';
import SettingsNav from '../../components/Settings/SettingsNav/SettingsNav';
import s from './SettingsPage.module.scss';

const SettingsPage: React.FC = () => {
  return (
    <div className={s.settings}>
      <div className={s.settings__inner}>
        <Outlet />
        <SettingsNav />
      </div>
    </div>
  );
};

export default SettingsPage;
