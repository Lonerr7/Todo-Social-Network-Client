import { useState } from 'react';
import { UserRole } from '../../../../types/reduxTypes/authSliceTypes';
import UserAvatarControls from './UserAvatarControls';

interface Props {
  myRole: UserRole;
  isUserBeingBanned: boolean;
  isBanned: boolean;
  userId: string;
  banOrUnbanErrorMsg: string;
}

const UserAvatarControlsContainer: React.FC<Props> = (props) => {
  const [editMode, setEditMode] = useState(false);

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  return (
    <UserAvatarControls
      {...props}
      editMode={editMode}
      toggleEditMode={toggleEditMode}
    />
  );
};

export default UserAvatarControlsContainer;
