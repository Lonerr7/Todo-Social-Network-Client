import ChangeUserRole from './ChangeUserRole';
import s from '../UserAvatarControls.module.scss';
import { UserRoles } from '../../../../../types/reduxTypes/authSliceTypes';

interface Props {
  editMode: boolean;
  userRole: UserRoles;
  selectOptions: {
    label: string;
    value: UserRoles;
  }[];
  toggleEditMode: () => void;
}

const UserRoleController: React.FC<Props> = ({
  editMode,
  selectOptions,
  userRole,
  toggleEditMode,
}) => {
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
        <ChangeUserRole
          selectOptions={selectOptions}
          userRole={userRole}
          toggleEditMode={toggleEditMode}
        />
      )}
    </div>
  );
};

export default UserRoleController;
