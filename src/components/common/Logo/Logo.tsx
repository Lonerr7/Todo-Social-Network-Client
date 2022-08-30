import s from './Logo.module.scss';
import logo from '../../../assets/images/logo.png';

const Logo: React.FC = () => {
  return (
    <a className={s.logo} href="#d">
      <img className={s.logo__img} src={logo} alt="logo" />
      <span className={s.logo__text}>Todo Social</span>
    </a>
  );
};

export default Logo;
