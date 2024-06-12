import s from './ShowInfoBtn.module.scss';

type Props = {
  isVisible: boolean;
  toggleAdditionalInfoVisibility: () => void;
};

const ShowInfoBtn: React.FC<Props> = ({
  isVisible,
  toggleAdditionalInfoVisibility,
}) => {
  return (
    <button className={s.btn} onClick={toggleAdditionalInfoVisibility}>
      {isVisible ? 'Hide' : 'Show'} full information
    </button>
  );
};

export default ShowInfoBtn;
