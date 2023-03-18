import { useAppDispatch } from '../../../../../hooks/reduxToolkitHooks';
import { openAreYouSurePopup } from '../../../../../redux/popupSlice';
import {
  banOrUnbanUser,
  resetUsersErrorMessages,
} from '../../../../../redux/usersSlice';
import { UserManipulationBanActions } from '../../../../../types/apiTypes';
import { UserRole } from '../../../../../types/reduxTypes/authSliceTypes';
import SubmitLoadingBtn from '../../../../common/SubmitLoadingBtn/SubmitLoadingBtn';
import TextError from '../../../../common/TextError/TextError';
import s from '../UserAvatarControls.module.scss';

interface Props {
  isBanned: boolean;
  isUserBeingBanned: boolean;
  myRole: UserRole;
  userId: string;
  banOrUnbanErrorMsg: string;
}

const UserBanUnbanControls: React.FC<Props> = ({
  isBanned,
  isUserBeingBanned,
  myRole,
  userId,
  banOrUnbanErrorMsg,
}) => {
  const dispatch = useAppDispatch();

  const banOrUnbanUserHandler = (action: 'ban' | 'unban') => {
    if (action === 'ban') {
      dispatch(
        banOrUnbanUser({ userId, action: UserManipulationBanActions.BAN })
      );
    } else {
      dispatch(
        banOrUnbanUser({ userId, action: UserManipulationBanActions.UNBAN })
      );
    }

    setTimeout(() => {
      dispatch(resetUsersErrorMessages());
    }, 5000);
  };

  const openDeleteUserPopup = () => {
    dispatch(openAreYouSurePopup(userId)); // !
  };

  return (
    <>
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
    </>
  );
};

export default UserBanUnbanControls;
