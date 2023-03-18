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
}

const UserAvatarControls: React.FC<Props> = ({
  isUserBeingBanned,
  isBanned,
  userId,
  myRole,
  banOrUnbanErrorMsg,
}) => {
  return (
    <div className={s.controls}>
      <UserRoleController />
      <UserBanUnbanControls
        isBanned={isBanned}
        isUserBeingBanned={isUserBeingBanned}
        myRole={myRole}
        userId={userId}
        banOrUnbanErrorMsg={banOrUnbanErrorMsg}
      />
    </div>
  );
};

export default UserAvatarControls;
