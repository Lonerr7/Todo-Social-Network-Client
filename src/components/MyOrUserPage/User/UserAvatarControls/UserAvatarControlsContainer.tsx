import { useState } from 'react';
import { UserRoles } from '../../../../types/reduxTypes/authSliceTypes';
import UserAvatarControls from './UserAvatarControls';

interface Props {
  myRole: UserRoles;
  isUserBeingBanned: boolean;
  isBanned: boolean;
  userId: string;
  userRole: UserRoles;
  banOrUnbanErrorMsg: string;
}

const UserAvatarControlsContainer: React.FC<Props> = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [selectValue, setSelectValue] = useState(props.myRole);

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const selectOptions = [
    { label: 'user', value: UserRoles.USER },
    { label: 'admin', value: UserRoles.ADMIN },
    { label: 'CEO', value: UserRoles.CEO },
  ];

  const onSelectChange = (newValue: any) => {};

  const onSelectSubmit = () => {};

  return (
    <UserAvatarControls
      {...props}
      editMode={editMode}
      selectOptions={selectOptions}
      toggleEditMode={toggleEditMode}
    />
  );
};

export default UserAvatarControlsContainer;
