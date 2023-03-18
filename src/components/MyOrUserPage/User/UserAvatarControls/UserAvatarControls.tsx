import { useAppDispatch } from '../../../../hooks/reduxToolkitHooks';
import { openAreYouSurePopup } from '../../../../redux/popupSlice';
import {
  banOrUnbanUser,
  resetUsersErrorMessages,
} from '../../../../redux/usersSlice';
import { UserManipulationBanActions } from '../../../../types/apiTypes';
import { UserRole } from '../../../../types/reduxTypes/authSliceTypes';
import SubmitLoadingBtn from '../../../common/SubmitLoadingBtn/SubmitLoadingBtn';
import TextError from '../../../common/TextError/TextError';
import s from './UserAvatarControls.module.scss';

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
  const dispatch = useAppDispatch();

  const banOrUnbanUserHandler = (action: 'ban' | 'unban') => {
    if (action === 'ban') {
      dispatch(
        banOrUnbanUser({ userId, action: UserManipulationBanActions.BAN })
      );
    } else {
      banOrUnbanUser({ userId, action: UserManipulationBanActions.UNBAN });
    }

    // resetting error msg after 5 sec.
    setTimeout(() => {
      dispatch(resetUsersErrorMessages());
    }, 5000);
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
          onSubmit={() => banOrUnbanUserHandler('ban')}
        />
      ) : (
        <SubmitLoadingBtn
          btnClass={s.controls__btn}
          btnFetchingText="Unbanning"
          btnText="Unban"
          btnType="button"
          isFetching={isUserBeingBanned}
          onSubmit={() => banOrUnbanUserHandler('unban')}
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

      {banOrUnbanErrorMsg ? (
        <TextError customClass={s.errorMsg}>{banOrUnbanErrorMsg}</TextError>
      ) : null}
    </div>
  );
};

export default UserAvatarControls;
