import s from './Logo.module.scss';
import { NavLink } from 'react-router-dom';

interface LogoProps {
  styleClass?: string;
  overallClass?: string;
};

const Logo: React.FC<LogoProps> = ({ styleClass, overallClass }) => {
  return (
    <NavLink className={`${s.logo} ${overallClass}`} to="/Todo-Social-Network-Client/">
      <span className={`${s.logo__text} ${styleClass}`}>Todo Social</span>
    </NavLink>
  );
};

export default Logo;
