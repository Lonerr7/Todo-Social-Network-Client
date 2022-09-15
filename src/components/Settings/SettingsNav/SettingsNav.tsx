import { useEffect } from 'react';
import s from './SettingsNav.module.scss';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { setActiveSettingsNum } from '../../../redux/appSlice';
import { activeLsNumbers } from '../../../types/appTypes';
import { getSetCurrentNumFromLS } from '../../../utils/appHelpers';
import MenuItem from '../../common/MenuItem/MenuItem';

const SettingsNav: React.FC = () => {
  const activeNum = useAppSelector((state) => state.app.activeSettingsNum);
  const dispatch = useAppDispatch();

  const setActiveNum = (neededNum: number) => {
    dispatch(setActiveSettingsNum(neededNum));
  };

  useEffect(() => {
    getSetCurrentNumFromLS(activeLsNumbers.SETTINGS_NUM, setActiveNum);

    return () => {
      dispatch(setActiveSettingsNum(1));
    };
    // eslint-disable-next-line
  }, []);

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
            setActiveNum={setActiveNum}
          />
        </li>
        <li className={s.settingsNav__listItem}>
          <MenuItem
            activeNum={activeNum}
            neededNum={2}
            text="Security"
            urlPath="/settings/security"
            activeBgColor="rgb(195, 195, 195)"
            customClass={s.item_border_last}
            setActiveNum={setActiveNum}
          />
        </li>
      </ul>
    </nav>
  );
};

export default SettingsNav;
