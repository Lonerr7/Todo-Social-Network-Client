import s from './ShowInfoBtn.module.scss';

type Props = {
  toggleAdditionalInfoVisibility: () => void;
};

const ShowInfoBtn: React.FC<Props> = ({ toggleAdditionalInfoVisibility }) => {
  return (
    <button className={s.btn} onClick={toggleAdditionalInfoVisibility}>
      Show full information
    </button>
  );
};

export default ShowInfoBtn;
