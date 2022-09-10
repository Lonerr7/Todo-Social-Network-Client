import { NavLink } from 'react-router-dom';
import MenuItem from '../../common/MenuItem/MenuItem';
import s from './SettingsNav.module.scss';

const SettingsNav: React.FC = () => {
  return (
    <div className={s.settingsNav}>
      <ul className={s.settingsNav__list}>
        {/* <MenuItem neededNum={1} text="General" urlPath="/settings/general" />
        <MenuItem neededNum={1} text="Security" urlPath="/settings/security" /> */}
        <NavLink to="/settings/general">General</NavLink>
        <NavLink to="/settings/general">Security</NavLink>
      </ul>
    </div>
  );
};

export default SettingsNav;
