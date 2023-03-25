import { UserRoles } from '../../../../../types/reduxTypes/authSliceTypes';
import s from '../UserAvatarControls.module.scss';
import ChangeRoleSelect from './ChangeRoleSelect';

interface Props {
  selectOptions: {
    label: string;
    value: UserRoles;
  }[];
  userRole: UserRoles;
  toggleEditMode: () => void;
}

const ChangeUserRole: React.FC<Props> = ({ selectOptions, userRole, toggleEditMode }) => {
  return (
    <div className={s.changeRole}>
      <ChangeRoleSelect selectOptions={selectOptions} userRole={userRole} />
      <div className={s.changeRole__btns}>
        <button className={s.changeRole__btn}>Ok</button>
        <button className={s.changeRole__btn} onClick={toggleEditMode}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ChangeUserRole;
