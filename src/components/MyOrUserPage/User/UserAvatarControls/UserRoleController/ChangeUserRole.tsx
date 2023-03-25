import { UserRoles } from '../../../../../types/reduxTypes/authSliceTypes';
import SubmitLoadingBtn from '../../../../common/SubmitLoadingBtn/SubmitLoadingBtn';
import s from '../UserAvatarControls.module.scss';
import ChangeRoleSelect from './ChangeRoleSelect';

interface Props {
  selectOptions: {
    label: string;
    value: UserRoles;
  }[];
  userRole: UserRoles;
  isUserRoleChanging: boolean;
  toggleEditMode: () => void;
  onSelectChange: (newValue: any) => void;
  onSelectSubmit: () => void;
}

const ChangeUserRole: React.FC<Props> = ({
  selectOptions,
  userRole,
  isUserRoleChanging,
  toggleEditMode,
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
        <button className={s.changeRole__btn} onClick={toggleEditMode}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ChangeUserRole;
