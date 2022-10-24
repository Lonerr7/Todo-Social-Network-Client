import s from './Credits.module.scss';

type Props = {
  customClass?: string;
};

const Credits: React.FC<Props> = ({ customClass }) => {
  return (
    <p className={`${s.credits} ${customClass}`}>
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
