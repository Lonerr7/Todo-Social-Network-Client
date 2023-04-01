import { useState } from 'react';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../hooks/reduxToolkitHooks';
import {
  openUserRoleEditMode,
  closeUserRoleEditMode,
  changeUserRole,
  hideUserRoleSuccessMsg,
} from '../../../../redux/usersSlice';
import { UserRoles } from '../../../../types/reduxTypes/authSliceTypes';
import UserAvatarControls from './UserAvatarControls';

interface Props {
  myRole: UserRoles;
  isBanned: boolean;
  userId: string;
  userRole: UserRoles;
}

const UserAvatarControlsContainer: React.FC<Props> = (props) => {
  const {
    roleEditMode: editMode,
    banOrUnbanErrorMsg,
    isCurrentUserBeingBanned: isUserBeingBanned,
    isUserRoleChanging,
    userRoleChangeErrorMsg,
    isUserRoleChanged,
  } = useAppSelector((state) => state.users);
  const [selectValue, setSelectValue] = useState(props.userRole);
  const { userId } = props;

  const dispatch = useAppDispatch();

  const selectOptions = [
    { label: 'user', value: UserRoles.USER },
    { label: 'admin', value: UserRoles.ADMIN },
  ];

  const onSelectChange = (newValue: any) => {
    setSelectValue(newValue.value);
  };

  const openEditMode = () => {
    dispatch(openUserRoleEditMode());
  };

  const closeEditMode = () => {
    dispatch(closeUserRoleEditMode());
  };

  const onSelectSubmit = async () => {
    await dispatch(
      changeUserRole({
        userId,
        roleToGive: selectValue,
      })
    );

    setTimeout(() => {
      dispatch(hideUserRoleSuccessMsg());
    }, 2300);
  };

  return (
    <UserAvatarControls
      {...props}
      editMode={editMode}
      selectOptions={selectOptions}
      openEditMode={openEditMode}
      closeEditMode={closeEditMode}
      onSelectChange={onSelectChange}
      onSelectSubmit={onSelectSubmit}
      isUserBeingBanned={isUserBeingBanned}
      banOrUnbanErrorMsg={banOrUnbanErrorMsg}
      isUserRoleChanging={isUserRoleChanging}
      userRoleChangeErrorMsg={userRoleChangeErrorMsg}
      isUserRoleChanged={isUserRoleChanged}
    />
  );
};

export default UserAvatarControlsContainer;
