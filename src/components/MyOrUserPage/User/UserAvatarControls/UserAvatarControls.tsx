import { UserRole } from '../../../../types/reduxTypes/authSliceTypes';
import s from './UserAvatarControls.module.scss';
import UserBanUnbanControls from './UserBanUnbanControls/UserBanUnbanControls';
import UserRoleController from './UserRoleController/UserRoleController';

interface Props {
  myRole: UserRole;
  isUserBeingBanned: boolean;
  isBanned: boolean;
  userId: string;
  banOrUnbanErrorMsg: string;
  editMode: boolean;
  toggleEditMode: () => void;
}

const UserAvatarControls: React.FC<Props> = ({
  isUserBeingBanned,
  isBanned,
  userId,
  myRole,
  banOrUnbanErrorMsg,
  editMode,
  toggleEditMode,
}) => {
  return (
    <div className={s.controls}>
      {editMode ? (
        <UserRoleController
          editMode={editMode}
          toggleEditMode={toggleEditMode}
        />
      ) : (
        <>
          <UserRoleController
            editMode={editMode}
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
