import s from './Logo.module.scss';
import logo from '../../../assets/img/logo.png';
import { NavLink } from 'react-router-dom';

type LogoProps = {
  styleClass?: string;
  overallClass?: string;
};

const Logo: React.FC<LogoProps> = ({ styleClass, overallClass }) => {
  return (
    <NavLink className={`${s.logo} ${overallClass}`} to="/">
      <img className={s.logo__img} src={logo} alt="logo" />
      <span className={`${s.logo__text} ${styleClass}`}>Todo Social</span>
    </NavLink>
  );
};

export default Logo;
