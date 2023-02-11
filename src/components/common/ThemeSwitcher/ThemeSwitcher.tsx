import s from './ThemeSwitcher.module.scss';
import { BiSun, BiMoon } from 'react-icons/bi';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../hooks/reduxToolkitHooks';
import { Themes } from '../../../types/reduxTypes/themeSliceTypes';
import { changeTheme } from '../../../redux/themeSlice';

const ThemeSwitcher: React.FC = () => {
  const currentTheme = useAppSelector((state) => state.theme.theme);
  const dispatch = useAppDispatch();

  const themeChangeHandler = () => {
    dispatch(
      changeTheme(currentTheme === Themes.LIGHT ? Themes.DARK : Themes.LIGHT)
    );
  };

  return (
    <button className={s.themeSwitcher} onClick={themeChangeHandler}>
      {currentTheme === Themes.LIGHT ? (
        <BiSun className={s.themeSwitcher__icon} size={20} />
      ) : (
        <BiMoon className={s.themeSwitcher__icon} size={20} />
      )}
    </button>
  );
};

export default ThemeSwitcher;
