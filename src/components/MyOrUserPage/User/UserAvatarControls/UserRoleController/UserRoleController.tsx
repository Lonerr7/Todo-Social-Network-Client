import ChangeUserRole from './ChangeUserRole';
import s from '../UserAvatarControls.module.scss';
import { UserRoles } from '../../../../../types/reduxTypes/authSliceTypes';

interface Props {
  editMode: boolean;
  userRole: UserRoles;
  isUserRoleChanging: boolean;
  selectOptions: {
    label: string;
    value: UserRoles;
  }[];
  toggleEditMode: () => void;
  onSelectChange: (newValue: any) => void;
  onSelectSubmit: () => void;
}

const UserRoleController: React.FC<Props> = ({
  editMode,
  selectOptions,
  userRole,
  isUserRoleChanging,
  toggleEditMode,
  onSelectChange,
  onSelectSubmit,
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
          isUserRoleChanging={isUserRoleChanging}
          toggleEditMode={toggleEditMode}
          onSelectChange={onSelectChange}
          onSelectSubmit={onSelectSubmit}
        />
      )}
    </div>
  );
};

export default UserRoleController;
