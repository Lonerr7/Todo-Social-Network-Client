import { User, UserRoles } from '../../../types/reduxTypes/authSliceTypes';
import UserAvatarControlsContainer from '../../MyOrUserPage/User/UserAvatarControls/UserAvatarControlsContainer';

interface Props {
  user: User;
  myRole: UserRoles;
}

const UserAvatarControlsLogic: React.FC<Props> = ({ user, myRole }) => {
  return (
    <>
      {((myRole === UserRoles.ADMIN && user.role === UserRoles.USER) ||
        (myRole === UserRoles.CEO &&
          (user.role === UserRoles.USER || user.role === UserRoles.ADMIN))) && (
        <UserAvatarControlsContainer
          isBanned={user.isBanned}
          userId={user.id}
          myRole={myRole}
          userRole={user.role}
        />
      )}
    </>
  );
};

export default UserAvatarControlsLogic;
