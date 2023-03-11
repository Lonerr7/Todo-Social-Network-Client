import { useAppDispatch } from '../../../../hooks/reduxToolkitHooks';
import { openAreYouSurePopup } from '../../../../redux/popupSlice';
import { banOrUnbanUser } from '../../../../redux/usersSlice';
import { UserManipulationBanActions } from '../../../../types/apiTypes';
import { UserRole } from '../../../../types/reduxTypes/authSliceTypes';
import SubmitLoadingBtn from '../../../common/SubmitLoadingBtn/SubmitLoadingBtn';
import s from './UserAvatarControls.module.scss';

interface Props {
  myRole: UserRole;
  isUserBeingBanned: boolean;
  isBanned: boolean;
  userId: string;
}

const UserAvatarControls: React.FC<Props> = ({
  isUserBeingBanned,
  isBanned,
  userId,
  myRole,
}) => {
  const dispatch = useAppDispatch();

  const banUser = () => {
    dispatch(
      banOrUnbanUser({ userId, action: UserManipulationBanActions.BAN })
    );
  };

  const unbanUser = () => {
    dispatch(
      banOrUnbanUser({ userId, action: UserManipulationBanActions.UNBAN })
    );
  };

  const openDeleteUserPopup = () => {
    dispatch(openAreYouSurePopup(userId)); // !
  };

  return (
    <div className={s.controls}>
      {!isBanned ? (
        <SubmitLoadingBtn
          btnClass={s.controls__btn}
          btnFetchingText="Banning"
          btnText="Ban"
          btnType="button"
          isFetching={isUserBeingBanned}
          onSubmit={banUser}
        />
      ) : (
        <SubmitLoadingBtn
          btnClass={s.controls__btn}
          btnFetchingText="Unbanning"
          btnText="Unban"
          btnType="button"
          isFetching={isUserBeingBanned}
          onSubmit={unbanUser}
        />
      )}
      {myRole === 'CEO' ? (
        <button
          className={`${s.controls__btn} ${s.controls__deleteBtn}`}
          onClick={openDeleteUserPopup}
        >
          Delete
        </button>
      ) : null}
    </div>
  );
};

export default UserAvatarControls;
