import { useState } from 'react';
import { useAppDispatch } from '../../../../hooks/reduxToolkitHooks';
import { changeUserRole } from '../../../../redux/usersSlice';
import { UserRoles } from '../../../../types/reduxTypes/authSliceTypes';
import UserAvatarControls from './UserAvatarControls';

interface Props {
  myRole: UserRoles;
  isUserBeingBanned: boolean;
  isBanned: boolean;
  userId: string;
  userRole: UserRoles;
  banOrUnbanErrorMsg: string;
  isUserRoleChanging: boolean;
}

const UserAvatarControlsContainer: React.FC<Props> = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [selectValue, setSelectValue] = useState(props.userRole);
  const { userId } = props;

  const dispatch = useAppDispatch();

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const selectOptions = [
    { label: 'user', value: UserRoles.USER },
    { label: 'admin', value: UserRoles.ADMIN },
  ];

  const onSelectChange = (newValue: any) => {
    setSelectValue(newValue.value);
  };

  const onSelectSubmit = async () => {
    await dispatch(
      changeUserRole({
        userId,
        roleToGive: selectValue,
        setRoleSelectEditMode: toggleEditMode,
      })
    );
    setEditMode(false);
  };

  return (
    <UserAvatarControls
      {...props}
      editMode={editMode}
      selectOptions={selectOptions}
      toggleEditMode={toggleEditMode}
      onSelectChange={onSelectChange}
      onSelectSubmit={onSelectSubmit}
    />
  );
};

export default UserAvatarControlsContainer;
