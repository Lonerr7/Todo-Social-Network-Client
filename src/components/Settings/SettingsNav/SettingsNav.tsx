import s from './SettingsNav.module.scss';
import { useAppSelector } from '../../../hooks/reduxToolkitHooks';
import MenuItem from '../../common/MenuItem/MenuItem';

const SettingsNav: React.FC = () => {
  const activeNum = useAppSelector((state) => state.app.activeSettingsNum);

  return (
    <nav className={s.settingsNav}>
      <ul className={s.settingsNav__list}>
        <li className={s.settingsNav__listItem}>
          <MenuItem
            activeNum={activeNum}
            neededNum={1}
            text="General"
            urlPath="/settings"
            activeBgColor="rgb(195, 195, 195)"
            customClass={s.item_border_first}
          />
        </li>
        <li className={s.settingsNav__listItem}>
          <MenuItem
            activeNum={activeNum}
            neededNum={2}
            text="Security"
            urlPath="/settings/security"
            activeBgColor="rgb(195, 195, 195)"
          />
        </li>
        <li className={s.settingsNav__listItem}>
          <MenuItem
            activeNum={activeNum}
            neededNum={3}
            text="Appearance"
            urlPath="/settings/appearance"
            activeBgColor="rgb(195, 195, 195)"
            customClass={s.item_border_last}
          />
        </li>
      </ul>
    </nav>
  );
};

export default SettingsNav;
