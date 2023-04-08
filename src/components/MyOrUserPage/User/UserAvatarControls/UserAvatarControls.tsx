import { UserRoles } from '../../../../types/reduxTypes/authSliceTypes';
import s from './UserAvatarControls.module.scss';
import UserBanUnbanControls from './UserBanUnbanControls/UserBanUnbanControls';
import UserRoleController from './UserRoleController/UserRoleController';

interface Props {
  myRole: UserRoles;
  userRole: UserRoles;
  isUserBeingBanned: boolean;
  isBanned: boolean;
  userId: string;
  banOrUnbanErrorMsg: string;
  editMode: boolean;
  isUserRoleChanging: boolean;
  selectOptions: {
    label: string;
    value: UserRoles;
  }[];
  userRoleChangeErrorMsg: string;
  isUserRoleChanged: boolean;
  openEditMode: () => void;
  closeEditMode: () => void;
  onSelectChange: (newValue: any) => void;
  onSelectSubmit: () => void;
}

const UserAvatarControls: React.FC<Props> = ({
  isUserBeingBanned,
  isBanned,
  userId,
  userRole,
  myRole,
  banOrUnbanErrorMsg,
  editMode,
  selectOptions,
  isUserRoleChanging,
  userRoleChangeErrorMsg,
  isUserRoleChanged,
  openEditMode,
  closeEditMode,
  onSelectChange,
  onSelectSubmit,
}) => {
  return (
    <div className={s.controls}>
      {editMode ? (
        <UserRoleController
          editMode={editMode}
          userRole={userRole}
          selectOptions={selectOptions}
          isUserRoleChanging={isUserRoleChanging}
          userRoleChangeErrorMsg={userRoleChangeErrorMsg}
          isUserRoleChanged={isUserRoleChanged}
          openEditMode={openEditMode}
          closeEditMode={closeEditMode}
          onSelectChange={onSelectChange}
          onSelectSubmit={onSelectSubmit}
        />
      ) : (
        <>
          <UserRoleController
            editMode={editMode}
            userRole={userRole}
            selectOptions={selectOptions}
            isUserRoleChanging={isUserRoleChanging}
            userRoleChangeErrorMsg={userRoleChangeErrorMsg}
            isUserRoleChanged={isUserRoleChanged}
            openEditMode={openEditMode}
            closeEditMode={closeEditMode}
            onSelectChange={onSelectChange}
            onSelectSubmit={onSelectSubmit}
          />
          <UserBanUnbanControls
            isBanned={isBanned}
            isUserBeingBanned={isUserBeingBanned}
            myRole={myRole}
            userId={userId}
            banOrUnbanErrorMsg={banOrUnbanErrorMsg}
          />
        </>
      )}
    </div>
  );
};

export default UserAvatarControls;
