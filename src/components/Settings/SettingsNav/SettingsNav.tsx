import { useAppSelector } from '../../../hooks/hooks';
import MenuItem from '../../common/MenuItem/MenuItem';
import s from './SettingsNav.module.scss';

const SettingsNav: React.FC = () => {
  const activeNum = useAppSelector((state) => state.app.activeSettingsNum);

  return (
    <div className={s.settingsNav}>
      <ul className={s.settingsNav__list}>
        <MenuItem
          neededNum={1}
          text="General"
          urlPath="/settings"
          activeBgColor="rgb(195, 195, 195)"
          customClass={s.item_border_first}
        />
        <MenuItem
          neededNum={1}
          text="Security"
          urlPath="/settings/security"
          activeBgColor="rgb(195, 195, 195)"
          customClass={s.item_border_last}
        />
      </ul>
    </div>
  );
};

export default SettingsNav;
