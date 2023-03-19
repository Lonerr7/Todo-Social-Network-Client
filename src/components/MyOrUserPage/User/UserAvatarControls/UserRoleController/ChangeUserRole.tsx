import s from '../UserAvatarControls.module.scss';

interface Props {
  toggleEditMode: () => void;
}

const ChangeUserRole: React.FC<Props> = ({ toggleEditMode }) => {
  return (
    <div className={s.changeRole}>
      <div className={s.changeRole__select}>React-select role</div>
      <div className={s.changeRole__btns}>
        <button className={s.changeRole__btn}>Ok</button>
        <button className={s.changeRole__btn} onClick={toggleEditMode}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ChangeUserRole;
