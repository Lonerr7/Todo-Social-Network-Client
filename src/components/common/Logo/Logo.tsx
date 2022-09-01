import s from './Logo.module.scss';
import logo from '../../../assets/images/logo.png';

type LogoProps = {
  styleClass?: string;
  overallClass?: string;
};

const Logo: React.FC<LogoProps> = ({ styleClass, overallClass }) => {
  return (
    // eslint-disable-next-line
    <a className={`${s.logo} ${overallClass}`} href="">
      <img className={s.logo__img} src={logo} alt="logo" />
      <span className={`${s.logo__text} ${styleClass}`}>Todo Social</span>
    </a>
  );
};

export default Logo;
