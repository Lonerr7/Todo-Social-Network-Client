import s from './Header.module.scss';

type HeaderProps = {
  children: React.ReactNode | React.ReactNode[];
};

const Header: React.FC<HeaderProps> = ({ children }) => {
  return <header className={s.header}>{children}</header>;
};

export default Header;
