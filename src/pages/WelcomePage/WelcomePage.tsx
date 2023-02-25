import { useEffect } from 'react';
import s from './WelcomePage.module.scss';

const WelcomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Welcome! | Todo Social';

    // eslint-disable-next-line
  }, []);

  return (
    <div className={s.page}>
      <h1 className={s.page__title}>Welcome to Todo Social!</h1>
      <p className={s.page__text}>
        This is a pet-project made by{' '}
        <a
          className={s.page__link}
          href="https://github.com/Lonerr7"
          target="_blank"
          rel="noreferrer"
        >
          nic3guy
        </a>
      </p>
      <p className={s.page__text}>
        To try it out please log in or create an account!
      </p>
    </div>
  );
};

export default WelcomePage;
