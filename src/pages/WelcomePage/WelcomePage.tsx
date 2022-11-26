import { useEffect } from 'react';
import s from './WelcomePage.module.scss';

const WelcomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Welcome! | Todo Social';

    // eslint-disable-next-line
  }, []);

  return <div className={s.page}>Welcome!</div>;
};

export default WelcomePage;
