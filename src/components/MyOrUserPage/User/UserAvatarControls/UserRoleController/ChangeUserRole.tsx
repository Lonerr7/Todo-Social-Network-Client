import { UserRoles } from '../../../../../types/reduxTypes/authSliceTypes';
import SubmitLoadingBtn from '../../../../common/SubmitLoadingBtn/SubmitLoadingBtn';
import TextError from '../../../../common/TextError/TextError';
import s from '../UserAvatarControls.module.scss';
import ChangeRoleSelect from './ChangeRoleSelect';

interface Props {
  selectOptions: {
    label: string;
    value: UserRoles;
  }[];
  userRole: UserRoles;
  isUserRoleChanging: boolean;
  userRoleChangeErrorMsg: string;
  closeEditMode: () => void;
  onSelectChange: (newValue: any) => void;
  onSelectSubmit: () => void;
}

const ChangeUserRole: React.FC<Props> = ({
  selectOptions,
  userRole,
  isUserRoleChanging,
  userRoleChangeErrorMsg,
  closeEditMode,
  onSelectChange,
  onSelectSubmit,
}) => {
  return (
    <div className={s.changeRole}>
      <ChangeRoleSelect
        selectOptions={selectOptions}
        userRole={userRole}
        onSelectChange={onSelectChange}
      />

      <div className={s.changeRole__btns}>
        <SubmitLoadingBtn
          btnClass={s.changeRole__btn}
          btnFetchingText="Changing"
          btnText="Ok"
          btnType="button"
          isFetching={isUserRoleChanging}
          onSubmit={onSelectSubmit}
        />
        <button className={s.changeRole__btn} onClick={closeEditMode}>
          Close
        </button>
      </div>
      {userRoleChangeErrorMsg ? (
        <TextError customClass={s.changeRole__errorMsg}>
          {userRoleChangeErrorMsg}
        </TextError>
      ) : null}
    </div>
  );
};

export default ChangeUserRole;
