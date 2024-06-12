import QuckLogin from '../../components/Sidebar/QuckLogin/QuckLogin';
import s from './WelcomePage.module.scss';

const WelcomePage: React.FC = () => {
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
      <QuckLogin
        customClass={s.page__quickLogin}
        customLinkClass={s.page__quickLoginLink}
      />
    </div>
  );
};

export default WelcomePage;
