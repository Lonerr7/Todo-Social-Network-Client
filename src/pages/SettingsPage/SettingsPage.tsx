import SettingsNav from '../../components/Settings/SettingsNav/SettingsNav';
import s from './SettingsPage.module.scss';

const SettingsPage: React.FC = () => {
  return (
    <div className={s.settings}>
      <SettingsNav />
    </div>
  );
};

export default SettingsPage;
