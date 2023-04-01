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
  userRoleChangeErrorMsg: string;
  openEditMode: () => void;
  closeEditMode: () => void;
  onSelectChange: (newValue: any) => void;
  onSelectSubmit: () => void;
}

const UserRoleController: React.FC<Props> = ({
  editMode,
  selectOptions,
  userRole,
  isUserRoleChanging,
  userRoleChangeErrorMsg,
  openEditMode,
  closeEditMode,
  onSelectChange,
  onSelectSubmit,
}) => {
  return (
    <div className={s.roleController}>
      {!editMode ? (
        <button
          className={`${s.controls__btn} ${s.controls__changeRoleBtn}`}
          onClick={openEditMode}
        >
          Change role
        </button>
      ) : (
        <ChangeUserRole
          selectOptions={selectOptions}
          userRole={userRole}
          isUserRoleChanging={isUserRoleChanging}
          userRoleChangeErrorMsg={userRoleChangeErrorMsg}
          closeEditMode={closeEditMode}
          onSelectChange={onSelectChange}
          onSelectSubmit={onSelectSubmit}
        />
      )}
    </div>
  );
};

export default UserRoleController;
