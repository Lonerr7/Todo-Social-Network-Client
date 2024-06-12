import s from './SettingsNav.module.scss';
import { useAppSelector } from '../../../hooks/reduxToolkitHooks';
import MenuItem from '../../common/MenuItem/MenuItem';
import { Themes } from '../../../types/reduxTypes/themeSliceTypes';

const SettingsNav: React.FC = () => {
  const activeNum = useAppSelector((state) => state.app.activeSettingsNum);

  const isDarkMode =
    document.body.getAttribute('data-theme') === Themes.DARK ? true : false;

  return (
    <nav className={s.settingsNav}>
      <ul className={s.settingsNav__list}>
        <li className={s.settingsNav__listItem}>
          <MenuItem
            activeNum={activeNum}
            neededNum={1}
            text="General"
            urlPath="/settings"
            activeBgColor={isDarkMode ? '#0b0d10' : 'rgb(195, 195, 195)'}
            customClass={s.item_border_first}
          />
        </li>
        <li className={s.settingsNav__listItem}>
          <MenuItem
            activeNum={activeNum}
            neededNum={2}
            text="Security"
            urlPath="/settings/security"
            activeBgColor={isDarkMode ? '#0b0d10' : 'rgb(195, 195, 195)'}
          />
        </li>
      </ul>
    </nav>
  );
};

export default SettingsNav;
