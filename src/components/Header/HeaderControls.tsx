import s from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/reduxToolkitHooks';
import { setActiveMenuNum } from '../../redux/appSlice';
import { User } from '../../types/reduxTypes/authSliceTypes';
import HeaderNav from './HeaderNav/HeaderNav';

interface HeaderControlsProps {
  user: User;
}

const HeaderControls: React.FC<HeaderControlsProps> = ({ user }) => {
  const dispatch = useAppDispatch();

  const setActiveNum = (newActiveNum: number) => {
    dispatch(setActiveMenuNum(newActiveNum));
  };

  return (
    <div className={s.header__controls}>
      <p className={s.header__user}>
        Hello,{' '}
        <NavLink
          className={s.header__userLink}
          to="/Todo-Social-Network-Client/"
          onClick={() => setActiveNum(1)}
        >
          {user.nickname}
        </NavLink>
      </p>
      <HeaderNav />
    </div>
  );
};

export default HeaderControls;
