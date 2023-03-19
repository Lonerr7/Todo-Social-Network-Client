import ChangeUserRole from './ChangeUserRole';
import s from '../UserAvatarControls.module.scss';

interface Props {
  editMode: boolean;
  toggleEditMode: () => void;
}

const UserRoleController: React.FC<Props> = ({ editMode, toggleEditMode }) => {
  return (
    <div className={s.roleController}>
      {!editMode ? (
        <button
          className={`${s.controls__btn} ${s.controls__changeRoleBtn}`}
          onClick={toggleEditMode}
        >
          Change role
        </button>
      ) : (
        <ChangeUserRole toggleEditMode={toggleEditMode} />
      )}
    </div>
  );
};

export default UserRoleController;
