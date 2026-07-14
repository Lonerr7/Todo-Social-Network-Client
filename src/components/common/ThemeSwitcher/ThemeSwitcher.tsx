import s from './ThemeSwitcher.module.scss';
import { BiSun, BiMoon } from 'react-icons/bi';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../hooks/reduxToolkitHooks';
import { changeTheme } from '../../../redux/themeSlice';

const ThemeSwitcher: React.FC = () => {
  const currentTheme = useAppSelector((state) => state.theme.theme);
  const dispatch = useAppDispatch();

  const themeChangeHandler = () => {
    dispatch(
      changeTheme(currentTheme === 'dark' ? 'light' : 'dark')
    );
  };

  return (
    <button className={s.themeSwitcher} onClick={themeChangeHandler}>
      {currentTheme === 'light' ? (
        <BiSun className={s.themeSwitcher__icon} size={20} />
      ) : (
        <BiMoon className={s.themeSwitcher__icon} size={20} />
      )}
    </button>
  );
};

export default ThemeSwitcher;
