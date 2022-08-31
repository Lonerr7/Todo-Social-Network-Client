import s from './Sidebar.module.scss';

const Sidebar: React.FC = () => {
  const isAuth = false;

  return (
    <div className={s.sidebar}>
      {!isAuth ? (
        <>
          <div className={s.sidebar__quickLogin}>
            <button className={s.sidebar__btn}>Log In</button>
            <button className={s.sidebar__btn}>Sign Up</button>
          </div>
          <p className={s.sidebar__credits}>
            Made by:{' '}
            <a
              target="_blank"
              rel="noreferrer"
              className={s.sidebar__creditLink}
              href="https://github.com/Lonerr7"
            >
              nic3guy
            </a>
          </p>
        </>
      ) : null}
    </div>
  );
};

export default Sidebar;
