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
  selectOptions: {
    label: string;
    value: UserRoles;
  }[];
  toggleEditMode: () => void;
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
  toggleEditMode,
}) => {
  return (
    <div className={s.controls}>
      {editMode ? (
        <UserRoleController
          editMode={editMode}
          userRole={userRole}
          selectOptions={selectOptions}
          toggleEditMode={toggleEditMode}
        />
      ) : (
        <>
          <UserRoleController
            editMode={editMode}
            userRole={userRole}
            selectOptions={selectOptions}
            toggleEditMode={toggleEditMode}
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
