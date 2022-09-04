import s from './Credits.module.scss';

const Credits: React.FC = () => {
  return (
    <p className={s.credits}>
      Made by:{' '}
      <a
        target="_blank"
        rel="noreferrer"
        className={s.credits__creditLink}
        href="https://github.com/Lonerr7"
      >
        nic3guy
      </a>
    </p>
  );
};

export default Credits;
