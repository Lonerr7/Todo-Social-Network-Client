import {
  useAppDispatch,
  useAppSelector,
} from '../../../../hooks/reduxToolkitHooks';
import { banOrUnbanUser } from '../../../../redux/usersSlice';
import { UserManipulationBanActions } from '../../../../types/apiTypes';
import SubmitLoadingBtn from '../../../common/SubmitLoadingBtn/SubmitLoadingBtn';
import s from './UserAvatarControls.module.scss';

interface Props {
  isBanned: boolean;
  userId: string;
}

const UserAvatarControls: React.FC<Props> = ({ isBanned, userId }) => {
  const isUserBeingBanned = useAppSelector(
    (state) => state.users.isCurrentUserBeingBanned
  );
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

  return (
    <div className={s.controls}>
      {!isBanned ? (
        // <button className={s.controls__btn} onClick={banUser}>
        //   Ban
        // </button>
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
      <button className={s.controls__btn}>Delete</button>
    </div>
  );
};

export default UserAvatarControls;
